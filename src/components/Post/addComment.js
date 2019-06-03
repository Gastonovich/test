import axios from "axios";

export default async function addComment({ value, postId, fetchComments }) {
  if (value.length > 0) {
    axios
      .post("https://simple-blog-api.crew.red/comments", {
        postId: +postId,
        body: value
      })
      .then(function(response) {
        console.log(response);
        fetchComments(postId);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
