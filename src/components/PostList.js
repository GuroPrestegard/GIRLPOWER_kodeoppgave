import React from "react";
import styled from "styled-components";
import Link from "next/link";
import {urlForImage} from "../utils/urlForImage";
import {Title} from "../styles/styles";

const PostList = ({posts, title, scroll}) => {
    console.log(posts)
    return (
        <StyledSidebar scroll={scroll}>
            <Title>{title}</Title>
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
                                                    .width(200)
                                                    .url()}
                                                alt={"thumbnail"}
                                            />
                                        )}
                                        <SmallTitle>{title}</SmallTitle></StyledAnchor>
                                </Link>
                            </StyledLi>
                        )
                )}
            </StyledUl>
        </StyledSidebar>
    )
}
export default PostList

const SmallTitle = styled.h3`
  margin-top: 0.7em;
  text-decoration: underline;
`

const StyledSidebar = styled.div`
  padding: 3em;
  overflow-y: ${(props) => props.scroll ? "scroll" : "auto" };
`
const StyledAnchor = styled.a`
  :visited {
    color: blue;
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
  margin-top: 2em;
`
