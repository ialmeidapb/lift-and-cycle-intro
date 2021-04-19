import React, { Component } from "react";

import TextInput from "./TextInput";

class NewMovieForm extends Component {
  state = {
    title: "",
    overview: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="container my-5">
        <TextInput
          id="movieTitle"
          label="Title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <TextInput
          id="movieOverview"
          label="Overview"
          name="overview"
          value={this.state.overview}
          onChange={this.handleChange}
        />
        <button
          onClick={
            () => this.props.handleAdding(this.state.title, this.state.overview)
            // this.props.handleAdding({title: this.state.title, overview: this.state.overview})
          }
          className="btn btn-primary"
        >
          Add new Movie
        </button>
      </div>
    );
  }
}

export default NewMovieForm;
