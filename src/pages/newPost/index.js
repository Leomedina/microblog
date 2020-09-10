import React from 'react';
import NewPostForm from '../../components/NewPostForm'
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addBlog, initComments } from '../../reducers/actions';
import { v4 as uuidv4 } from 'uuid';

function NewPost() {
  const dispatch = useDispatch();

  const handleAddBtn = (title, description, body) => {
    const NEW_ID = uuidv4();
    dispatch(addBlog(NEW_ID, title, description, body));
    dispatch(initComments(NEW_ID));
  };

  return (
    <Container>
      <NewPostForm handleAddBtn={handleAddBtn} />
    </Container>
  )
};

export default NewPost;