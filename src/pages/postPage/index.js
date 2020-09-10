import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Button } from 'react-bootstrap';

function PostPage() {
  const { id } = useParams();
  const post = useSelector(store => store.Blog[id])

  return (
    <Container>
      <h1>{post.title}</h1>
      <h1 className="lead">{post.description}</h1>
      <br />
      <p>{post.body}</p>
      <Button variant="danger" className="mr-2">delete</Button>
      <Button variant="secondary" className="mx-4">edit</Button>
    </Container>
  );
}

export default PostPage;