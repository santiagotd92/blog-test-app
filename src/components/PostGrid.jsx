import React, { useEffect, useState } from "react";
import { SinglePost } from "./SinglePost";
import { getPosts } from "../helpers/getPosts";

export const PostGrid = () => {

  const [blogPosts, setBlogPosts] = useState([]);

  const getBlogPosts = async () => {
    const posts = await getPosts();
    setBlogPosts(posts);
    console.log(blogPosts.data);
    
  };

  useEffect(() => {
    getBlogPosts();
  }, []);



  return (
    <>
      <div className="card-grid">PostGrid
      {blogPosts.data && (blogPosts.data).map((post) => (
        <SinglePost key={post.id} image={post.image}  title={post.text} owner={(post.owner.firstName+''+post.owner.lastName)} ownerpicture={post.owner.picture} tags={post.tags}/>
      ))}
      </div>
    </>
  );
};
