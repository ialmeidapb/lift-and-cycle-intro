import React from "react";

function MovieCard(props) {
  return (
    <div>
      <h5 className="card-header">{props.title}</h5>
      <div className="card-body">
        <p className="card-text">{props.overview}</p>
        <button
          name={props.title}
          onClick={() => props.onClick(props.title)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
