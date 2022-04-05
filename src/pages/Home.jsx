import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../Client.js";

const Home = () => {

    const [allPostsData, setAllPosts] = useState();

    console.log("ALL posts data", allPostsData)

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "post"]{
            title,
            slug,
            mainImage{
              asset->{
              _id,
              url
            }
          }
        }`
          )
          .then((data) => {setAllPosts(data)
            console.log("App post", data)
        })
          .catch((e) => {
              console.log("ERRORR")
              console.error(e.message)
          });
      }, []);

      return(
        <div>
        <h2>Blog Posts</h2>
        <h3>Welcome to my blog posts page!</h3>
        <div>
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <span key={index}>
                  <span>
                    <h2>{post.title}</h2>
                  </span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    
      )
}
export default Home;