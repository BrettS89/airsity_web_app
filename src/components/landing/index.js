import React from 'react';
import LandingView from './LandingView';
import './landing.css';

class Landing extends React.Component {
  componentDidMount() {
    this.props.setPage('home');
  }

  render() {
    return <LandingView />;
  }
}

export default Landing;
