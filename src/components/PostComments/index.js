import React from 'react';
import {
  ListGroup,
  Button
} from 'react-bootstrap';

function PostComments({ comments, deleteCommentHandler }) {

  const delBtnHandler = (comment) => {
    deleteCommentHandler(comment);
  };

  return (
    <ListGroup variant="flush">
      {comments.map((comment, index) =>
        <ListGroup.Item key={index}>
          <Button
            size="sm"
            variant="outline-danger"
            className="px-2"
            onClick={() => delBtnHandler(comment)}>X</Button>
          <span className="px-2">
            {comment}
          </span>
        </ListGroup.Item >
      )}
    </ListGroup>
  )
}

export default PostComments;