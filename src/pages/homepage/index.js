import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Container, CardGroup } from 'react-bootstrap';
import BlogCard from '../../components/BlogCard';
import { useHistory } from 'react-router-dom';
import { getBlogsFromAPI } from '../../reducers/actions';

function HomePage() {
  const blogs = useSelector(store => Object.entries(store.Blog), shallowEqual);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getBlogsFromAPI())
  }, [dispatch])

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