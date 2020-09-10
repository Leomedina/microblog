import React from 'react';
import { Card, Button } from 'react-bootstrap'

function BlogCard({ id, title, description, history }) {

  const handleClick = () => {
    history.push(`/post/${id}`)
  };

  return (
    <Card border="light">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="primary"
          onClick={handleClick}
        >Read more</Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;