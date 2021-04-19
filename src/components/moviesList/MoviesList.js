import React from "react";

import movies from "../../data/data.json";

import MovieCard from "./MovieCard";
import NewMovieForm from "../form/NewMovieForm";

class MoviesList extends React.Component {
  state = {
    moviesList: [...movies.results],
    originalList: [...movies.results],
    ordered: false,
  };

  handleDelete = (titleToDelete) => {
    const filteredMovies = this.state.moviesList.filter(
      (movie) => movie.title !== titleToDelete
    );
    this.setState({ moviesList: filteredMovies });
  };

  //   handleAdding = (movie) => {
  //     const newList = [movie, ...this.state.moviesList];
  //     this.setState({ moviesList: newList });
  //   };

  handleAdding = (title, overview) => {
    const newMovie = { title: title, overview: overview };
    const newList = [newMovie, ...this.state.moviesList];
    this.setState({ moviesList: newList });
  };

  handleOrdering = () => {
    const sorted = [...this.state.moviesList].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    this.setState({ moviesList: sorted });
  };

  render() {
    return (
      <div>
        <div className="container">
          <NewMovieForm handleAdding={this.handleAdding} />
          {/* <button className="btn btn-primary" onClick={this.handleOrdering}>
            Order
          </button> */}
        </div>

        <div className="container d-flex flex-wrap">
          {this.state.moviesList.map((movie, i) => {
            return (
              <div key={`${movie.title}${i}`} className="card m-1 w-25">
                <MovieCard
                  title={movie.title}
                  overview={movie.overview}
                  onClick={this.handleDelete}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MoviesList;
