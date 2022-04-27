import groq from 'groq'
import client from '../Client.js'
import styled from "styled-components"
import PostList from "../components/PostList.js";
import AllAuthors from "../components/AllAuthors.js";
import {Title} from "../styles/styles"
import PostComponent from "../components/PostComponent";


const Index = ({mainPagePost, posts}) => {
    console.log(mainPagePost)
    return (
        <>
            <PostList posts={posts} title={"Innlegg"} scroll={true}/>
            <Content>

            <PostComponent title={mainPagePost?.title}
                           name={mainPagePost?.name}
                           categories={mainPagePost?.categories}
                           authorImage={mainPagePost?.authorImage}
                           body={mainPagePost?.body}/>
            </Content>
        </>
    )
}

export const getStaticProps = async () => {
    const mainPagePost = await client.fetch(groq`
    *[_type == "post" && slug.current == $slug][0]{
                            title,
                            "name": author->name,
                            "categories": categories[]->title,
                            "authorImage": author->image,
                            body
                        }
    `, {slug: "girlpower"})

    const posts = await client.fetch(groq`
      *[_type == "post"]
    `)


    return {
        props: {
            mainPagePost, posts
        },
        revalidate: 1
    }
}

export default Index

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  max-width: 70%;
  `
