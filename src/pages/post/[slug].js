// [slug].js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../Client.js'
import {urlForImage} from '../../utils/urlForImage.js'
import {backgroundColor, Content, Title} from "../../styles/styles";
import styled from "styled-components";
import React from "react";
import PostComponent from "../../components/PostComponent";

const Post = ({post}) => {
    const {
        title = 'Missing title',
        name = 'Missing name',
        categories,
        authorImage,
        body = []
    } = post || {}
    return (
        <PostComponent title={title}
                       name={name}
                       categories={categories}
                       authorImage={authorImage}
                       body={body}/>
    )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
                            title,
                            "name": author->name,
                            "categories": categories[]->title,
                            "authorImage": author->image,
                            body
                        }`
export const getStaticPaths = async () => {
    const paths = await client.fetch(
        groq`*[_type == "post" && defined(slug.current)][].slug.current`
    )
    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: true,
    }
}

export const getStaticProps = async (context) => {
    // It's important to default the slug so that it doesn't return "undefined"
    const {slug = ""} = context.params
    const post = await client.fetch(query, {slug})
    return {
        props: {
            post
        },
        revalidate: 1
    }
}

export default Post

