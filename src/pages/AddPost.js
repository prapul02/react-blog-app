import React, { useState, useEffect } from "react";
import TextField from "../components/TextField";

function AddPost() {
  const [title, setTitle] = useState("Title goes here");
  const [authors, setAuthors] = useState([]);
  const [content, setContent] = useState("Start Here...");

  const [authorId, setAuthorId] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    fetch("https://ssczc.sse.codesandbox.io/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: content,
        title: title,
        authorId: authorId
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Submitted Successfully");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch(`https://ssczc.sse.codesandbox.io/authors`)
      .then((res) => res.json())
      .then((data) => setAuthors(data.authors));
  }, []);

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={onFormSubmit}>
        <TextField
          label="Post Title"
          name="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter title"
          required
        />
        <br />
        <br />
        <label>Author</label>
        <select
          value={authorId}
          onChange={(event) => setAuthorId(event.target.value)}
        >
          {authors.map((auth, index) => {
            return (
              <option key={index} value={auth._id}>
                {auth.name}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <TextField
          label="Content"
          name="content"
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Enter content"
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPost;
