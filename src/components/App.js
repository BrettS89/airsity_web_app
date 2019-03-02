import React from 'react';
import { connect } from 'react-redux';
import { isLoggedIn } from '../store/actions/authActions';
import Routing from '../routing';
import Header from '../containers/header';
import './app.css';

class App extends React.Component {
  componentDidMount() {
    this.props.isLoggedIn();
  }

  setTopPadding = () => {
    return this.props.state.page === 'home' ? { paddingTop: '2.5vh' } : {};
  };

  render () {
    return (
      <React.Fragment>
      <Header/>
        <div className="body" style={this.setTopPadding()}>
          <Routing />
        </div>
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({
  state: {
    page: state.nav,
  },
});

export default connect(mapStateToProps, { isLoggedIn })(App);
