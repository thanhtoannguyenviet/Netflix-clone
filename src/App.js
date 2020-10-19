import React from 'react';
import './App.css';
import Row from './Component/Row';
import Banner from './Component/Banner';
import request from './request'
import Nav from './Component/Nav'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>

        <Row title="NETFLIX ORGINAL" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true}></Row>
        <Row title="TRENDING NOW" fetchUrl={request.fetchTrending}></Row>
        <Row title="TOP RATING" fetchUrl={request.fetchTopRated}></Row>
        <Row title="ACTION MOVIE" fetchUrl={request.fetchActionMovies}></Row>
        <Row title="COMEDY MOVIE" fetchUrl={request.fetchComedyMovies}></Row>
        <Row title="HORROW MOVIE" fetchUrl={request.fetchHorrorMovies}></Row>
        <Row title="ROMANCE MOVIE" fetchUrl={request.fetchRomanceMovies}></Row>
        <Row title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
