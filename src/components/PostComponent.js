import React from "react";
import styled from "styled-components";
import {Title} from "../styles/styles";
import {urlForImage} from "../utils/urlForImage";
import {PortableText} from "@portabletext/react";

const PostComponent = ({authorImage, name, categories, body, title}) => {


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
                            {`Postet i: ${categories.map((category, i) => category )}`}
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
                                        src={urlForImage(value).fit('max').auto('format')}
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
export default PostComponent


const StyledCategories = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`

const StyledImg = styled.img`
  display: flex;
  justify-self: center;
  align-self: center;
  border: solid 0.5px lightgrey;
  max-width: 50em;
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
`

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`


const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
