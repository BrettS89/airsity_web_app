import React from 'react';
import './genres.css';
import GenresView from './GenresView';

class Genres extends React.Component {

  componentDidMount() {
    this.props.setPage('genre');
  }

  setGenre = (genre) => {
    this.props.setGenre(genre);
    this.props.history.push('/discover');
  };

  render() {
    return <GenresView 
            setGenre={this.setGenre}
            />;
  }
}

export default Genres;
