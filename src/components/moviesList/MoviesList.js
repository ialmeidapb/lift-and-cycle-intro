import React from "react";

import movies from "../../data/data.json";

import MovieCard from "./MovieCard";
import NewMovieForm from "../form/NewMovieForm";
import TextInput from "../form/TextInput";

class MoviesList extends React.Component {
  state = {
    moviesList: [...movies.results],
    originalList: [...movies.results],
    searchedMovie: "",
  };

  componentDidMount = () => {
    console.log("componentDidMount");
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchedMovie !== this.state.searchedMovie) {
      const filteredArray = this.state.originalList.filter((movie) =>
        movie.title
          .toLowerCase()
          .includes(this.state.searchedMovie.toLowerCase())
      );
      this.setState({ moviesList: filteredArray });
    }
  };

  handleDelete = (titleToDelete) => {
    const filteredMovies = this.state.originalList.filter(
      (movie) => movie.title !== titleToDelete
    );
    this.setState({ moviesList: filteredMovies, originalList: filteredMovies });
  };

  handleAdding = (title, overview) => {
    const newMovie = { title: title, overview: overview };
    const newList = [newMovie, ...this.state.moviesList];
    this.setState({ moviesList: newList });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <NewMovieForm handleAdding={this.handleAdding} />
          <TextInput
            name="searchedMovie"
            value={this.state.searchedMovie}
            id="searchedMovie"
            label="Search"
            onChange={this.handleChange}
          />
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