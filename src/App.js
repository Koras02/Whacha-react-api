import React from 'react';
import './App.css';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';
import Banner from './Banner'

function App() {
  return (
    <div className="app">
      <Nav />
      <br />
      <Banner />
      <Row title="최고 인기 시리즈" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="혼자보기 아쉬울때.같이 봐요 우리!" fetchUrl={requests.fetchTrending} />
      <Row title="왓챠 최고 인기작" fetchUrl={requests.fetchTopRated} />
      <Row title="액션 영화" fetchUrl={requests.fetchActionMovies} />
    </div>
  );
}

export default App;
