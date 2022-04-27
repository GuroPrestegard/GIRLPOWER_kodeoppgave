import React from "react";
import styled from "styled-components";
import {urlForImage} from "../utils/urlForImage";
import {PortableText} from "@portabletext/react";

const AuthorComponent = ({author}) => {

    return (
        <AuthorComponentWrapper>
            <StyledContent>
                <Title >{author.name}</Title>
                <Section>
                    {author?.image && (
                        <Image
                            src={urlForImage(author.image)
                                .width(500)
                                .url()}
                            alt={`${author.name}'s picture`}
                        />
                    )}
                    <PortableText
                        value={author?.bio}
                    />
                </Section>
            </StyledContent>

        </AuthorComponentWrapper>
    )
}
export default AuthorComponent

const AuthorComponentWrapper = styled.div`
    display: flex;
`


const StyledContent = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 2em;
  margin-bottom: 2em;
  background-color: white;
  border-radius: 10px;

`

const Section = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  max-width: 40em;
`

const Title = styled.p`
  font-size: x-large;
  display: flex;
  align-self: center;
`
const Image = styled.img`
  width: auto;
  height: 10em;
  border-radius: 50%;
  margin-left: 3em;
`

