import React from "react";
import styled from "styled-components";
import {urlForImage} from "../utils/urlForImage";
import {PortableText} from "@portabletext/react";

const DisplayAuthors = ({authors}) => {

    return (
        <DisplayAuthorsWrapper>
            {authors && authors.map((author, i) => {
                return (
                    <StyledContent>
                        <Title key={i}>{author.name}</Title>
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
                )
            })}

        </DisplayAuthorsWrapper>
    )
}
export default DisplayAuthors

const DisplayAuthorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledContent = styled.div`
  padding: 5em;
`

const Section = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

const Title = styled.p`
  font-size: larger;
  display: flex;
  align-self: center;
`
const Image = styled.img`
  width: auto;
  height: 10em;
  border-radius: 50%;
  margin-left: 3em;
`

