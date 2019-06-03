import React, { useEffect } from "react";
import { connect } from "react-redux";
import { postFetching } from "../../actions";
import { withRouter } from 'react-router-dom'

function Post(props) {
  
  useEffect(() => {
    const {postId} = props.match.params
    
    if (props.post.length < 1) {
      props.fetchComments(postId);
    }
  },[]);

  console.log(props.history);
  if (props.postHasErrored) {
    return (
      <h1>
        Sorry! There are some problems, our smurfs are working on resolivng this
        problem
      </h1>
    );
  }
  if (props.postIsLoading) {
    return <h2>loading</h2>;
  }
  return (
    <>
      {props.post.title}
      {props.post.body}
      <ul>
        {props.post.comments &&
          props.post.comments.map(item => <li key={item.id}>{item.body}</li>)}
      </ul>
    </>
  );
}

const mapStateToProps = state => {
  return {
    post: state.post,
    postHasErrored: state.postHasErrored,
    postIsLoading: state.postIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: (id) => dispatch(postFetching(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Post));
