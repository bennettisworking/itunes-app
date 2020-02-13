import React from 'react';
import logo from './logo.svg';
import ItunesChart from './components/ItunesChart';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page-header">
        <h1 className="page-header__heading">PayCertify Music</h1>
      </div>
     <ItunesChart/>
    </div>
  );
}

export default App;
