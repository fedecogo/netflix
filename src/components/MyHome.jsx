import React, { Component } from "react";
import { Row,Spinner } from "react-bootstrap";
import SingleCard from "./SingleCard"; 

class MyHome extends Component {
  state = {
    films: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount() {
    fetch('https://www.omdbapi.com/?apikey=ee9ad7d1&s=harry%20potter')
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
       <div id="home1" className="text-center ">
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
            <h1>Film di Harry Potter:</h1>
            <Row>
              {this.state.films.map(film => (
                <SingleCard key={film.imdbID} title={film.Title} poster={film.Poster} />
              ))}
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default MyHome;
