import React, { Component } from "react";
import { Row ,Spinner} from "react-bootstrap";
import SingleCard from "./SingleCard";

class MyHome extends Component {
  state = {
    films: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    fetch('https://www.omdbapi.com/?apikey=ee9ad7d1&s=killer')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        console.log(data);
        this.setState({ films: data.Search, isLoading: false });
      })
      .catch(error => {
        console.error(error);
        this.setState({ isError: true, isLoading: false });
      });
  }

  render() {
    return (
      <>
        <div id="home3" className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <button type="button" className="btn btn-secondary btn-sm dropdown-toggle rounded-0" data-bs-toggle="dropdown" aria-expanded="false">
                  Genres
                </button>
                <ul className="dropdown-menu">
                  <li><p className="dropdown-item">Comedy</p></li>
                  <li><p className="dropdown-item">Drama</p></li>
                  <li><p className="dropdown-item">Thriller</p></li>
                </ul>
              </div>
            </div>
          </div>
          <div >
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
        <div id="home3" className="text-center ">
          {this.state.isLoading ? (
          <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        ) : this.state.isError ? (
          <div className="custom-alert">
          Errore nella fetch
        </div>
      
        ): (
            <div>
              <h1>Film Sui Killer:</h1>
              <Row>
                {this.state.films.map(film => (
                  <SingleCard key={film.imdbID} title={film.Title} poster={film.Poster} />
                ))}
              </Row>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default MyHome;
