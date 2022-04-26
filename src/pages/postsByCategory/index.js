import groq from 'groq'
import client from '../../Client.js'
import styled from "styled-components"
import {Title} from "../../styles/styles";
import PostList from "../../components/PostList";
import {backgroundColor} from "../../styles/styles";


const Index = ({posts, authors}) => {
    return (
        <Content>
            <PostList posts={posts} title={"Innlegg etter kategori"}/>
        </Content>
    )
}

export const getStaticProps = async () => {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    return {
        props: {
            posts
        },
        revalidate: 1
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


