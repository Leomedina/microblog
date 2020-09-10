import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { VOTE_DOWN, VOTE_UP } from '../../reducers/actionTypes';

function BlogCard({ id, title, description, history, votes, handleVote }) {

  const handleClick = () => {
    history.push(`/post/${id}`)
  };

  const handleUp = () => {
    handleVote(id, VOTE_UP);
  };

  const handleDown = () => {
    handleVote(id, VOTE_DOWN);
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
      <Card.Footer>
        <span className="m-2">Votes: {votes}</span>
        <Button size="sm" variant="primary"
          className="m-1" onClick={handleUp}>+</Button>
        <Button size="sm" variant="danger"
          className="m-1" onClick={handleDown}>-</Button>
      </Card.Footer>
    </Card>
  );
};

export default BlogCard;