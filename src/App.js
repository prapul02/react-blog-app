import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import PostPage from "./pages/PostPage";
import AddPost from "./pages/AddPost";
import PageErrorBoundary from "./components/PageErrorBoundary";

// counter
// state - number - 0
// action - increment / decrement
const countReducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function App() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <Header />
      <Switch>
        <Route exact path="/">
          <PageErrorBoundary>
            <Home />
          </PageErrorBoundary>
        </Route>

        <Route exact path="/posts/:id">
          <PageErrorBoundary>
            <PostPage />
          </PageErrorBoundary>
        </Route>

        <Route path="/authors">
          <PageErrorBoundary>
            <Authors />
          </PageErrorBoundary>
        </Route>

        <Route path="/add-post">
          <PageErrorBoundary>
            <AddPost />
          </PageErrorBoundary>
        </Route>
      </Switch>
    </>
  );
}
