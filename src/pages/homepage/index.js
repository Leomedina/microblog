import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Container, CardGroup } from 'react-bootstrap';
import BlogCard from '../../components/BlogCard';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const blogs = useSelector(store => Object.entries(store.Blog), shallowEqual);
  const history = useHistory();

  return (
    <Container>
      <p className="lead">Welcome to <strong>microblog</strong>! our innovative site for communicating on the
      information superhighway. Read the latest below:</p>
      <br />
      <CardGroup>
        {blogs.map(([id, blog]) =>
          <BlogCard
            key={id}
            id={id}
            title={blog.title}
            description={blog.description}
            history={history}
          />
        )}
      </CardGroup>
    </Container >
  );
}

export default HomePage;