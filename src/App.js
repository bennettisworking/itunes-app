import React from 'react';
//import logo from './logo.svg';
import ItunesChart from './components/ItunesChart';
import './App.scss';

function App() {
    return (
        <div className="App">
          <header className="page-header row ml-0 mr-0">
          <div className="col-2">
            <a href="http://paycertify.com" target="_blank">
            <svg viewBox="0 0 1263 249" xmlns="http://www.w3.org/2000/svg" class="page-header__logo">
                  <path d="M14.1 4.8 14.1 13.9c0 9.2-7.1 14-14.1 14M248.2 124.1c0 68.5-55.6 124.1-124.1 124.1S0 192.6 0 124.1 55.6 0 124.1 0s124.1 55.6 124.1 124.1" fill="#FCBD00"></path>
                  <path fill="#FFF" d="M70.34 169.992l104.58-104.58 27.93 27.93-104.58 104.58z"></path>
                  <path fill="#FFF" d="M29.192 129.063l27.931-27.93 69.013 69.012-27.93 27.93z"></path>
                  <path d="M232.6 63.5c-6.5-11.7-15-22-24.8-31L175 65.4l27.9 27.9 44.6 44.7c.5-4.6.8-9.4.8-14.2-.1-21.9-5.8-42.4-15.7-60.3M70.3 170.2L2 101.9c-1.3 7.1-2 14.5-2 22 0 32.3 12.2 61.9 32.5 83.9 9 9.8 19.5 18.2 31.2 24.7l34.6-34.4-28-27.9z" fill="#A6A8AB"></path>
                </svg>
                </a>
          </div>
          <div class="col-8">
            <h1 className="page-header__heading">
            <svg viewBox="0 0 1263 249" xmlns="http://www.w3.org/2000/svg" class="page-header__logo--big">
                  <path d="M317.5 189.2V49.8h1.6c10.4 0 21 0 31.5-.1 10.6 0 21.1-.1 31.5-.1 34.5 0 50.4 25.2 50.4 48.6.1 23.5-15.7 48.9-50.4 49.1h-39.6v41.8l-25 .1zm64.6-65.1c7.8 0 14.4-2.8 19-7.9 4.1-4.6 6.3-10.9 6.3-17.6 0-12.4-7.9-25.7-25.3-25.7h-39.6v51.2h39.6zM486.5 191.7c-14.5 0-26.9-4.7-35.9-13.6-9.5-9.3-14.4-22.7-14.4-38.6 0-30.9 20.6-51.6 51.2-51.6 12.6 0 24.4 5.3 31.3 13.9L519 90h22.6v99.1h-22.2l-.8-12.1c-7.7 10.1-21 14.6-31.8 14.6l-.5-1.6.2 1.7zm2.4-82.3c-17.4 0-29.5 12.4-29.5 30.1 0 17.8 12.1 30.3 29.5 30.3 9.1 0 16.8-3.2 22.1-9.4 4.8-5.5 7.4-12.9 7.4-20.8-.1-14.5-9.3-30.2-29.5-30.2zM571.2 233.7l20.5-47.5-38.9-96.1h26.8l17 46.3 8 23.1 8.8-22.7 19.5-46.7h25.9l-61.9 143.6z" fill="#FCBD00"></path>
                  <path d="M739.4 191.9c-53.9 0-73.2-38.5-73.4-71.4-.1-20.4 7.3-39.7 20.5-52.8 13.1-13.2 31.4-20.2 52.9-20.2 19.2 0 37.3 7.5 50.9 21.1l1.2 1.2L774.6 86l-1.1-1.1c-8.9-8.7-21-13.5-34.1-13.5-14.3 0-26.4 4.6-35 13.2-8.7 8.8-13.7 21.8-13.6 35.7.2 22.1 13 48 48.6 48 12.6 0 25.9-5.4 34.8-14.1l2.1-2.1.6 2.9c1.5 7.3 4.1 14.2 7.7 20.4l.7 1.2-1.2.9c-12.5 9.4-28 14.4-44.7 14.4M843.5 191.5c-32.4 0-53.4-20.6-53.4-52.4 0-30.4 21.4-51.6 52-51.6 16.2 0 29.4 5.1 38.2 14.7 9.4 10.4 13.5 25.9 11.7 45l-.1 1.5h-77.4c2.4 12.9 13.5 20.9 29.4 20.9 8.9 0 20.9-3.4 26.6-9.8l1.1-1.3 15.4 14.9-1.1 1.2c-9.5 10.5-25.7 16.9-42.4 16.9zm25.8-62.9c-1.7-12.7-11.3-19.9-26.6-19.9-14.1 0-24.3 7.4-27.7 19.9h54.3zM906.9 189.2V90.1h21.8l1 9.6c8-10.4 19.1-11.8 27.1-11.8 9.4 0 18.9 3.3 24.8 8.6l.9.8-10.6 20.4-1.5-1.2c-4.9-3.9-9.4-5.5-15.9-5.5-11.2 0-24.2 6.4-24.2 24.6v53.6h-23.4zM1025.3 190.4c-20.9 0-32.8-12.9-32.8-35.5V66.1l23.5-2.5v26.7h21.5v20.5h-21.7v44.1c0 9.5 4 14.1 12.2 14.1 3.3 0 7.5-1.1 11.5-3.1l1.7-.8 6.9 20.3-1.4.6c-6.9 3.1-13.1 4.4-19.9 4.4h-1.5zM1060 89.7h23.3v99.5H1060zM1102 189.2V85.8c0-23.1 14.2-38 36.2-38 8.4 0 16.8 2.7 24.4 7.9l1.2.8-9.3 17.9-1.5-1c-5.1-3.4-9.2-4.8-13.7-4.8-9 0-13.9 6.1-13.9 17.2v5.4h14.2l8.5 20.9h-22.7v77l-23.4.1zM1174.6 233.7l20.5-47.5-38.9-96.1h26.9l16.9 46.3 8.1 23.1 8.7-22.7 19.5-46.7h25.9l-61.9 143.6z" fill="#A6A8AB"></path>
                 </svg>
                Music</h1>
          </div>
          <div className="col-2"></div>
          </header>
          <ItunesChart/>
          <footer className="footer">
      </footer>
    </div>
  );
}

export default App;