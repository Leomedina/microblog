import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container } from 'react-bootstrap';

function PostPage() {
  const { id } = useParams();
  const post = useSelector(store => store.Blog[id])

  return (
    <Container>
      <h1>{post.title}</h1>
      <h1 className="lead">{post.description}</h1>
      <br />
      <p>{post.body}</p>
    </Container>
  );
}

export default PostPage;