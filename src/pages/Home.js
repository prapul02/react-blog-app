import React from "react";
import Post from "../components/Post";
import usePosts from "../hooks/usePosts";
import useHover from "../hooks/useHover";

const Home = () => {
  const posts = usePosts();

  const isHovered = useHover("#title");

  return (
    <div className="container">
      <h1 style={{ color: isHovered ? "blue" : "black" }} id="title">
        Welcome To Blog!
      </h1>
      {posts.map((post, index) => {
        return (
          <Post
            id={post._id}
            key={index}
            title={post.title}
            author={post.author.name}
            content={post.content}
            isSummary
          />
        );
      })}
    </div>
  );
};

export default Home;
