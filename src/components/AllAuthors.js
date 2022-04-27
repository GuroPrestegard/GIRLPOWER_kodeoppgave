import React from "react";
import styled from "styled-components";
import AuthorComponent from "./AuthorComponent";

const AllAuthors = ({authors}) => {

    return (
        <DisplayAuthorsWrapper>
            {authors && authors.map((author, i) => {
                return (
                    <AuthorComponent author={author}/>
                )
            })}

        </DisplayAuthorsWrapper>
    )
}
export default AllAuthors

const DisplayAuthorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
`


