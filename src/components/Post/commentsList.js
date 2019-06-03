import React from "react";
import styled from "styled-components";

const Comments = styled.div`
  width: 80%;
`;
const Item = styled.div`
  margin: 2em;
`;

export default function createListOfComments({ comments }) {
  return (
    <Comments>
      <p>Comments</p>
      {comments &&
        comments.map(item => (
          <Item key={item.id}>
            {item.body}
            <hr />
          </Item>
        ))}
    </Comments>
  );
}
