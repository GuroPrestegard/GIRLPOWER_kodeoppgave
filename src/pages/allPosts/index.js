import groq from 'groq'
import client from '../../Client.js'
import styled from "styled-components"
import {Title} from "../../styles/styles";
import PostList from "../../components/PostList";
import PostComponent from "../../components/PostComponent";


const Index = ({posts}) => {
    return (
            <Content>
                {posts.map(post =>(

                <PostComponent title={post?.title}
                               name={post?.name}
                               categories={post?.categories}
                               authorImage={post?.authorImage}
                               body={post?.body}/>
                ))}
            </Content>
    )
}

    const query = groq`*[_type == "post"] {
                            title,
                            "name": author->name,
                            "categories": categories[]->title,
                            "authorImage": author->image,
                            body
                        }`
export const getStaticProps = async () => {
    const posts = await client.fetch(query)
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
  max-width: 70%;
`

