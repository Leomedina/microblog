import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Container } from 'react-bootstrap';
import BlogModal from '../../components/blogModal';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const blogs = useSelector(store => Object.entries(store.Blog), shallowEqual);
  const history = useHistory();

  return (
    <Container>
      <p className="lead">Welcome to <strong>microblog</strong>! our innovative site for communicating on the
      information superhighway. Read the latest below:</p>
      <br />
      {blogs.map(([id, blog]) =>
        <BlogModal
          key={id}
          id={id}
          title={blog.title}
          description={blog.description}
          history={history}
        />
      )}
    </Container >
  );
}

export default HomePage;