import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import CityInfo from './CityInfo';
import MainMonument from './MainMonument';
import Monuments from './Monuments';
import AnotherPhotos from './AnotherPhotos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route>
          <Route path="/info" element={<CityInfo/>}></Route>
          <Route path="/main-monument" element={<MainMonument/>}></Route>
          <Route path="/monuments" element={<Monuments/>}></Route>
          <Route path="/other" element={<AnotherPhotos/>}></Route>
        </Route>
      </Routes>
    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
