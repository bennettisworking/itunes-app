import React from 'react';
//import logo from './logo.svg';
import ItunesChart from './components/ItunesChart';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <h1 className="page-header__heading">PayCertify Music</h1>
      </header>
      <ItunesChart/>
      <footer className="footer">
      </footer>
    </div>
  );
}

export default App;