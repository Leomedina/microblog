import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" >Blog</NavLink>
        </li>
        <li>
          <NavLink exact to="/add-new-post">Add New Post</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;