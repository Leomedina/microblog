import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function HomePage() {
  const blogs = useSelector(store => store.Blog);

  return (
    <Container>
      <p className="lead">Welcome to <strong>microblog</strong>! our innovative site for communicating on the
      information superhighway. Read the latest below:</p>
      
    </Container >
  );
}

export default HomePage;