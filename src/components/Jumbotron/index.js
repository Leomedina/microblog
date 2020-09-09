import React from 'react';
import Nav from '../Nav/index';
import { Jumbotron, Container } from 'react-bootstrap';

function Header() {
  return (
    <Jumbotron>
      <Container>
        <h1 className="display-1">Microblog</h1>
        <p>Get in the Rithm of blogging</p>
        <Nav />
      </Container>
    </Jumbotron >
  );
};

export default Header;