import React from "react";

const SingleCard = ({ poster }) => (
  <div className="col mb-2 text-center px-1">
    <img className="img-fluid" src={poster} alt="movie picture" />
  </div>
);

export default SingleCard;

