import React, { Component } from "react";
import { Col,Row ,Spinner} from "react-bootstrap";
import SingleCard from "./SingleCard";

class MyHome extends Component {
  state = {
    films: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    fetch('https://www.omdbapi.com/?apikey=ee9ad7d1&s=Kill Bill')
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
    const numberOfFilmsToShow = 6;
    const filmsToShow = this.state.films.slice(0, numberOfFilmsToShow);

    return (
      <>
      <div className="mt-3">ciao</div>
        <div id="home2-5" className="d-flex justify-content-between mt-5 ">
          <div className="d-flex ">
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
              <h1>Kill Bill</h1>
              <Row className="ms-1 me-1">
              {filmsToShow.map((film) => (
                <Col key={film.imdbID} md={2} className="mb-2 text-center px-1">
                  <SingleCard poster={film.Poster} />
                </Col>
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
