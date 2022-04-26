import groq from 'groq'
import client from '../Client.js'
import styled from "styled-components"
import PostList from "../components/PostList.js";
import DisplayAuthors from "../components/DisplayAuthors.js";
import { Title} from "../styles/styles"
import Layout from "../components/Layout";


const Index = ({posts, authors}) => {
    return (
        <Layout>
            <PostList posts={posts}/>
            <Content>
                <Title>Velkommen til Girlpower workshop!</Title>
                <DisplayAuthors authors={authors}/>
            </Content>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt asc)
    `)

    const authors = await client.fetch(groq`
      *[_type == "author"] 
    `)


    return {
        props: {
            posts, authors
        }
    }
}

export default Index
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  margin: 5em;
  padding: 5em;
  align-items: center;
  border-radius: 15px;

`

