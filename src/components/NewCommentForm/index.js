import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function NewCommentForm({ addComment }) {
  const INITIAL_STATE = { comment: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(formData.comment);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <Form.Group controlId="comment">
        <Form.Control
          type="text"
          name="comment"
          placeholder="New Comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </form>
  );
};

export default NewCommentForm;