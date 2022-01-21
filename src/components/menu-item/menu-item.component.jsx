import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div className={`menu-item ${size ? size : ''}`}>
    {console.log(linkUrl)}
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
