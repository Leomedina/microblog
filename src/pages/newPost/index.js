import React from 'react';
import NewPostForm from '../../components/NewPostForm'
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addBlog } from '../../reducers/actions';

function NewPost() {
  const dispatch = useDispatch();
  const handleAddBtn = (title, description, body) => {
    dispatch(addBlog(title, description, body));
  };

  return (
    <Container>
      <NewPostForm addBlog={handleAddBtn} />
    </Container>
  )
};

export default NewPost;