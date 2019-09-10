/** @jsx jsx */
import {css, jsx} from '@emotion/core';

import Sidebar from './Sidebar';
import Content from './Content';

const App = () => (
  <div css={css`
    display: flex;
    width: 100%;
  `}
  >
    <AppRouter />
  </div>
);

export default App;