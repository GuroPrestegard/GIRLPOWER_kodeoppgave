import groq from 'groq'
import client from '../../Client.js'
import styled from "styled-components"
import {Title} from "../../styles/styles";
import PostList from "../../components/PostList";


const Index = ({posts, authors}) => {
    return (
        <Content>
            <PostList posts={posts} title={"Innlegg etter kategori"}/>
        </Content>
    )
}

export const getStaticProps = async () => {
    const posts = await client.fetch(groq`
      *[_type == "post"]
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
  margin-bottom: 2em;
`

