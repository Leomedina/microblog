import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink exact to="/"  className="mr-2">Blog</NavLink>
      <NavLink exact to="/add-new-post" className="mx-3">New Post</NavLink>
    </nav>
  )
}

export default Nav;