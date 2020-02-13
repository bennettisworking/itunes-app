import React from 'react';
import logo from './logo.svg';
import ItunesChart from './components/ItunesChart';
import './App.css';

function App() {
  return (
    <div className="App">
    <div class="page-header">
  <h1>Albums Top 100</h1>
</div>
    <div class="jumbotron"></div>
     <ItunesChart/>
    </div>
  );
}

export default App;
