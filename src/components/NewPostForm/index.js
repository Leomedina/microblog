import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

function NewPostForm({ addBlog }) {
  const INITIAL_STATE = { title: "", description: "", body: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBlog(formData.title, formData.description, formData.body);
    setFormData(INITIAL_STATE);
    history.push('/');
  };

  return (
    <Container>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label >Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="body">
          <Form.Label>Body:</Form.Label>
          <Form.Control
            as="textarea"
            name="body"
            cols="40" rows="5"
            value={formData.body}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default NewPostForm;