import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import Post from "../components/Post";

const Author = () => {
  const [author, setAuthor] = useState({});

  const [posts, setPosts] = useState([]);

  const { params } = useRouteMatch();

  useEffect(() => {
    fetch(`https://ssczc.sse.codesandbox.io/authors/${params.authorId}`)
      .then((res) => res.json())
      .then((data) => setAuthor(data.author));

    fetch(`https://ssczc.sse.codesandbox.io/posts/author/${params.authorId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data.post));
  }, [params]);

  return (
    <div>
      <p>{author.name}</p>
      {posts.map((post, index) => {
        return <Post content={post.content} />;
      })}
      ;
    </div>
  );
};

export default Author;
