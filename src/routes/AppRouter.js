/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Sidebar from '../components/Sidebar';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import SkillsPage from '../pages/SkillsPage';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div css={css`
      width: 100%;
      display: flex;
    `}>
      <div css={css`
        width: 15%;
        min-height: 100vh;
      `}>
        <Sidebar />
      </div>
      <div>
        <Route path="/" component={HomePage} exact/>
        <Route path="/about" component={AboutPage} exact/>
        <Route path="/skills" component={SkillsPage} exact/>
      </div>
    </div>
  </Router>
);

export default AppRouter;