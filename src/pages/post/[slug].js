// [slug].js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../Client.js'
import {urlForImage} from '../../utils/urlForImage.js'
import {backgroundColor, Content, Title} from "../../styles/styles";
import styled from "styled-components";
import React from "react";

const Post = ({post}) => {
    const {
        title = 'Missing title',
        name = 'Missing name',
        categories,
        authorImage,
        body = []
    } = post || {}
    console.log(body)
    return (
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
                <StyledColumn>
                    <div>Skrive av {name}</div>
                    {categories && (
                        <StyledCategories>
                            {`Postet i: ${categories.map((category, i) => "" + category + (i < categories.length - 1 ? ", " : ""))}`}
                        </StyledCategories>
                    )}
                </StyledColumn>
            </Preamble>
            <StyledBody>

                <PortableText
                    value={body}
                    components={{
                        types: {
                            image: ({value}) => {
                                if (!value?.asset?._ref) {
                                    return null
                                }
                                return (
                                    <StyledImg
                                        alt={value.alt || ' '}
                                        loading="lazy"
                                        src={urlForImage(value).width(1000).height(500).fit('max').auto('format')}
                                    />
                                )
                            },
                        }
                    }}
                />
            </StyledBody>
        </StyledArticle>

    )
}

const StyledCategories = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`

const StyledImg = styled.img`
  border: solid 0.5px lightgrey;
`

const StyledArticle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 5em;
  padding: 5em;
  align-items: center;
  border-radius: 15px;
  height: fit-content;
  min-width: 50%;
`

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`


const StyledBody = styled.div`
  p, li {
    font-size: large;
    margin: 1em 0 1em 0;
  }
`
const Preamble = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2em 0 4em 0;

  img {
    border-radius: 50%;
    padding-right: 1em;
  }
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

