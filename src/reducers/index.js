import { combineReducers } from "redux";
import { posts, postsHasErrored, postsIsLoading } from "./posts.js";
import { post, postHasErrored, postIsLoading } from "./post.js";

export default combineReducers({
  posts,
  postsHasErrored,
  postsIsLoading,
  post,
  postHasErrored,
  postIsLoading
});
