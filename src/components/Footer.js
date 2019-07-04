import React from 'react';
import '../App.css';

export default class Footer extends React.Component {
  render() {
    return <footer>&copy;{new Date().getUTCFullYear()} Zero to Mastery</footer>;
  }
}
