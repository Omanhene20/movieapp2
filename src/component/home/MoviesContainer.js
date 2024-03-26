import React, { Component } from 'react';

import { connect } from 'react-redux';

import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';
    console.log(movies);

    content =
      movies.Response === 'True'
        ? movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = function(state){
console.log(state);
    return {
        movies: state.movies.movies
      }

}

export default connect(mapStateToProps)(MoviesContainer);