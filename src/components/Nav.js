import React from 'react';
import '../App.css';
import logo from '../ztm.png';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <img src={logo} alt="" />
        <span>
          <strong>ZtM</strong> RoadMap
        </span>
      </nav>
    );
  }
}
