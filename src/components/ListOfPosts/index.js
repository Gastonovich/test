import React, {useState, useEffect } from "react";
import { connect } from "react-redux";
import { postsFetching } from "../../actions";

function ListOfPosts(props) {
  
  useEffect(() => {
    if(props.items.length < 1){
      props.fetchData();
    }    
  });

  if (props.hasErrored) {
    return (
      <h1>
        Sorry! There are some problems, our smurfs are working on resolivng this
        problem
      </h1>
    );
  }
  if (props.isLoading) {
    return <h2>loading</h2>;
  }

  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
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
