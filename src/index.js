import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './pages/style/main.css';
import Shop from './pages/Shop';
import Login from "./pages/Login";
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Header />
      <NavBar />
      
      <Router>
          <Routes>
              <Route exact path="/" element={<Shop />} />
              <Route path="/login" element={<Login />} />
          </Routes>
      </Router>

      <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
