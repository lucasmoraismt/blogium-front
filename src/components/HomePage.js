import React, { useState, useEffect } from "react";
import PostList from "./PostList/PostList";
import axios from "axios";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    const request = axios.get("http://localhost:4001/posts");

    request.then((response) => {
      setPosts([...posts, ...response.data]);
    });
    request.catch((error) => {
      console.log(error.response);
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return <PostList name="Daily stories" posts={posts} />;
}
