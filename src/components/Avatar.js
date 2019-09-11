/** @jsx jsx */
import {css, jsx} from '@emotion/core';

const Avatar = () => (
  <div css={css`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}>
    <img 
      css={css`
        width: 50px;
        height: 50px;
      `}
      className="ui small circular image"
      src="https://semantic-ui.com/images/wireframe/square-image.png"
      alt="Jorge A | Developer"
    />
  </div>
);

export default Avatar;