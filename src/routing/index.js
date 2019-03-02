import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Signup from '../containers/signup';
import Login from '../containers/login';
import Genres from '../containers/genres';
import Discover from '../containers/discover';
import Playlist from '../containers/playlist';
import Account from '../containers/account';
import Footer from '../containers/footer';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsAndConditions from '../components/TC';
import Landing from '../containers/landing';

export default () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path="/termsandconditions" component={TermsAndConditions} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/genres" component={Genres} />
          <Route path="/account" component={Account} />
          <Route path="/playlist" component={Playlist} />
          <Route path="/discover" component={Discover} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Landing} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
};
