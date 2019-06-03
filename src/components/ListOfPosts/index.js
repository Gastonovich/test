import React, { useEffect } from "react";
import { connect } from "react-redux";
import { postsFetching } from "../../actions";
import styled from "styled-components";

import Posts from "./view.js";

const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div``;
function ListOfPosts(props) {
  useEffect(() => {
    if (props.posts.length < 1) {
      props.fetchData();
    }
  });

  if (props.postsHasErrored) {
    return (
      <h1>
        Sorry! There are some problems, our smurfs are working on resolivng this
        problem
      </h1>
    );
  }
  if (props.postsIsLoading) {
    return <h2>loading</h2>;
  }

  return (
    <Wrapper>
      <Header>
        <h1>Latest Posts</h1>
      </Header>
      {props.posts !== undefined && props.posts.length > 1 && (
        <Posts posts={props.posts} />
      )}
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    postsHasErrored: state.postsHasErrored,
    postsIsLoading: state.postsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(postsFetching())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfPosts);
