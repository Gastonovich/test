import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p``;
const Description = styled.p``;
const Details = styled.div``;
export default function Items(posts) {
  return (
    <>
      {posts &&
        posts.map(({ title, id, body, author, date }) => (
          <Post key={id}>
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
