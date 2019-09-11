/** @jsx jsx */
import {css, jsx, Global} from '@emotion/core';
import {NavLink} from 'react-router-dom'

import Avatar from './Avatar';

const Sidebar = () => (
  <div css={css`
    width: 100%;
    background: salmon;
    min-height: 100vh;
  `}>
    <Global styles={css`
      ul {
        margin:0;
        list-style: none;
      }
      `} 
    />
    <Avatar />
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/skills">Skills</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/graphics">Graphics</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  </div>
);

export default Sidebar;