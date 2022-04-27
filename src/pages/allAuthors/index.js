import groq from 'groq'
import client from '../../Client.js'
import styled from "styled-components"
import AllAuthors from "../../components/AllAuthors";


const Index = ({authors}) => {
    return (
        <Content>
            <AllAuthors authors={authors}/>
        </Content>
    )
}

export const getStaticProps = async () => {
    const authors = await client.fetch(groq`
      *[_type == "author"]
    `)
    return {
        props: {

            
        },
        revalidate: 1
    }
}

export default Index
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0 2em 0;
`

