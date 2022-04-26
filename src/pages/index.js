import groq from 'groq'
import client from '../Client.js'
import styled from "styled-components"
import PostList from "../components/PostList.js";
import DisplayAuthors from "../components/DisplayAuthors.js";
import {Title} from "../styles/styles"


const Index = ({posts, authors}) => {
    return (
        <>
            <PostList posts={posts} title={"Innlegg"} scroll={true}/>
            <Grid>

                <Content>
                    <Title>Velkommen til Girlpower workshop!</Title>
                    <DisplayAuthors authors={authors}/>
                </Content>
            </Grid>
        </>
    )
}

export const getStaticProps = async () => {
    const posts = await client.fetch(groq`
      *[_type == "post"] 
    `)

    const authors = await client.fetch(groq`
      *[_type == "author"]
    `)


    return {
        props: {
            posts, authors
        },
        revalidate: 1
    }
}

export default Index
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr); 
  grid-template-rows: repeat(10, 1fr);
`

const Content = styled.div`
  padding: 3em 2em 2em 0;
  grid-column-start: 3;
  grid-column-end: span 6;
  grid-row-start: 2;
  grid-row-end: span 8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: white;

`

