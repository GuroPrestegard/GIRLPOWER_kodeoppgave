// [slug].js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../Client.js'
import {urlForImage} from '../../utils/urlForImage.js'
import {image} from "../../utils/image.js";
import {backgroundColor, Content, Title} from "../../styles/styles";
import styled from "styled-components";


const Post = ({post}) => {
    const {
        title = 'Missing title',
        name = 'Missing name',
        categories,
        authorImage,
        body = []
    } = post || {}
    return (
        <Layout>
            <StyledArticle>
                <Title>{title}</Title>
                <Preamble>

                    {authorImage && (
                        <div>
                            <img
                                src={urlForImage(authorImage)
                                    .width(50)
                                    .url()}
                                alt={`${name}'s picture`}
                            />
                        </div>
                    )}
                    <div>Skrive av {name}</div>
                    {categories && (
                        <StyledCategories>
                            {`Postet i: ${categories.map(category => category)}`}
                        </StyledCategories>
                    )}
                </Preamble>
                <PortableText
                    value={body}
                    components={{
                        types: {
                            image
                        }
                    }}
                />
            </StyledArticle>
        </Layout>
    )
}

const StyledCategories = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`

const StyledArticle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-evenly;
  margin: 5em;
  padding: 5em;
  align-items: center;
  border-radius: 15px;
  min-height: 50%;
  min-width: 50%;
`

const Layout = styled.div`
  display: flex;
  background-color: ${backgroundColor};
  justify-content: center;
  align-items: center;

`

const Preamble = styled.div`
  display: flex;
  flex-direction: row;

`

const query = groq`*[_type == "post" && slug.current == $slug][0]{
                            title,
                            "name": author->name,
                            "categories": categories[]->title,
                            "authorImage": author->image,
                            body
                        }`
export const getStaticPaths = async () => {
    const paths = await client.fetch(
        groq`*[_type == "post" && defined(slug.current)][].slug.current`
    )
    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: true,
    }
}

export const getStaticProps = async (context) => {
    // It's important to default the slug so that it doesn't return "undefined"
    const {slug = ""} = context.params
    const post = await client.fetch(query, {slug})
    return {
        props: {
            post
        },
        revalidate: 1
    }
}

export default Post

