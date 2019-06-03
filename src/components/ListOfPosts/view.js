import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { withRouter } from "react-router-dom";

const Post = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em;
  cursor: pointer;
  > div {
    padding: 1.2em;
  }
`;
const Title = styled.h2`
  font-weight: normal;
  font-size: 2em;
`;
const Description = styled.p`
  color: rgba(0, 0, 0, 0.75);
`;
const Details = styled.div`
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.85em;
`;

function Items({ posts, history }) {
  console.log(history);
  return (
    <>
      {posts &&
        posts.map(({ title, id, body, author, date }) => (
          <Post key={id} onClick={() => history.push(`./posts/${id}`)}>
            <Paper>
              <Title>{title}</Title>
              <Description>{body}</Description>
              <Details>
                <p>{author}</p>
                <p>{date}</p>
              </Details>
            </Paper>
          </Post>
        ))}
    </>
  );
}

export default withRouter(Items);
