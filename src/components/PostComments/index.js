import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Button
} from 'react-bootstrap';

function PostComments({ comments }) {
  return (
    <ListGroup variant="flush">
      {comments.map(comment =>
        <>
          <ListGroupItem>
            <Button size="sm" variant="outline-danger" className="px-2">X</Button>
            <span className="px-2">
              {comment}
            </span>
          </ListGroupItem>
        </>)}
    </ListGroup>
  )
}

export default PostComments;