import React, { Component } from "react";
import { Row,Col,Spinner } from "react-bootstrap";
import SingleCard from "./SingleCard"; 

class MyHome extends Component {
  state = {
    films: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount() {
    fetch('https://www.omdbapi.com/?apikey=ee9ad7d1&s=mars')
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
      <div id="home1" className="text-center">
        {this.state.isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : this.state.isError ? (
          <div className="custom-alert">Errore nella fetch</div>
        ) : (
          <div>
            <h1>Film sul Marte</h1>
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
    );
  }
}

export default MyHome;