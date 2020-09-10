import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Button
} from 'react-bootstrap';

function PostComments({ comments, deleteCommentHandler }) {
  const delBtnHandler = (comment) => {
    deleteCommentHandler(comment);
  };

  return (
    <ListGroup variant="flush">
      {comments.map((comment, index) =>
        <span key={index}>
          <ListGroupItem>
            <Button
              size="sm"
              variant="outline-danger"
              className="px-2"
              onClick={() => delBtnHandler(comment)}>X</Button>
            <span className="px-2">
              {comment}
            </span>
          </ListGroupItem>
        </span >)}
    </ListGroup>
  )
}

export default PostComments;