import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../../reducers/actions'
import Comments from '../../components/PostComments';
import NewCommentForm from '../../components/NewCommentForm';
import {
  Container,
  Button,
} from 'react-bootstrap';

function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const post = useSelector(store => store.Blog[id])
  const comments = useSelector(store => store.Comments[id].comments);

  const addCommentHandler = (comment) => {
    dispatch(addComment(id, comment))
  };

  return (
    <Container>
      <h1>{post.title}</h1>
      <h1 className="lead">{post.description}</h1>
      <br />
      <p className="mt-1">{post.body}</p>
      <Button variant="danger" className="mr-2 my-4">delete</Button>
      <Button variant="secondary" className="mx-4 my-4">edit</Button>
      <hr />
      <h3>Comments:</h3>
      <Comments comments={comments} />
      <hr />
      <NewCommentForm addComment={addCommentHandler} />
    </Container>
  );
}

export default PostPage;