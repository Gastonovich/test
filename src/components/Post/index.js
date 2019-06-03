import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { postFetching } from "../../actions";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles(() => ({
  button: {
    width: "90%"
  }
}));

const Wrapper = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    padding: 3em;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h2`
  width: 100%;
  font-weight: normal;
  font-size: 2em;
  margin-block-end: 0.2em;
`;

const Details = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.85em;
  font-style: italic;
  width: 90%;
`;

const Description = styled.p`
  color: rgba(0, 0, 0, 0.75);
`;

const Comments = styled.div`
  width: 80%;
`;
const Item = styled.div`
  margin: 2em;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 70%;
`;

function Post(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const { postId } = props.match.params;

  async function addComment() {
    if(value.length > 0){
      axios.post("https://simple-blog-api.crew.red/comments", {
          postId: +postId,
          body: value
        })
        .then(function(response) {
          console.log(response);
          props.fetchComments(postId);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  const handleChange = () => event => {
    setValue(event.target.value);
  };

  useEffect(() => {
    props.fetchComments(postId);
  }, []);

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
    <Wrapper>
      <Paper>
        <Button
          className={classes.button}
          onClick={() => props.history.push("../")}
        >
          Back
        </Button>
        <Title>{props.post.title}</Title>
        <Details>
          <p>
            {props.post.author} - {props.post.date}
          </p>
        </Details>
        <Description>{props.post.body}</Description>

        <Comments>
          <p>Comments</p>
          {props.post.comments &&
            props.post.comments.map(item => (
              <Item key={item.id}>
                {item.body}
                <hr />
              </Item>
            ))}
        </Comments>
        <Form noValidate autoComplete="off">
          <TextField
            id="outlined-full-width"
            style={{ margin: 8 }}
            placeholder="Add your comment"
            fullWidth
            value={value}
            margin="normal"
            variant="outlined"
            onChange={handleChange()}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => addComment()}
          >
            Send
          </Button>
        </Form>
      </Paper>
    </Wrapper>
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
    fetchComments: id => dispatch(postFetching(id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Post)
);
