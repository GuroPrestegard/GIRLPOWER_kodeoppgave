import React from "react";
import styled from "styled-components";
import Link from "next/link";
import {urlForImage} from "../utils/urlForImage";
import {Title} from "../styles/styles";

const PostList = ({posts}) => {
    console.log(posts)
    return (
        <StyledSidebar>
            <Title>Innlegg</Title>
            <StyledUl>
                {posts?.length > 0 && posts?.map(
                    ({_id, title = '', slug = '', publishedAt = '', mainImage}) =>
                        slug && (
                            <StyledLi key={_id}>
                                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                                    <StyledAnchor>
                                        {mainImage && (
                                            <img
                                                src={urlForImage(mainImage)
                                                    .width(300)
                                                    .url()}
                                                alt={"thumbnail"}
                                            />
                                        )}
                                        {title}</StyledAnchor>
                                </Link>
                            </StyledLi>
                        )
                )}
            </StyledUl>
        </StyledSidebar>
    )
}
export default PostList

const StyledSidebar = styled.div`
  padding: 3em;
  overflow-y: scroll ;

`
const StyledAnchor = styled.a`
  :visited {
    color: red;
  }
  cursor: pointer;
  display: flex;
  flex-direction: column;

`


const StyledLi = styled.li`
  margin-bottom: 5em;
  background-color: white;
  padding: 2em;
  border-radius: 5px;
`


const StyledUl = styled.ul`
  list-style: none;
  font-size: large;
  padding: 0;
  margin: 0;
`
