import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
// import Footer from './components/site/Footer';
import Profile from './components/site/Profile';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/site/Navigation';


function App() {
  const [sessionToken, setSessionToken] = useState(undefined)

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     setSessionToken(localStorage.getItem('token'));
  //   }
  // }, [])

  // const updateToken = (newToken) => {
  //   localStorage.setItem('token', newToken);
  //   setSessionToken(newToken);
  //   console.log(sessionToken);
  // }


  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }

  // const protectedViews = () => {
  //   return (sessionToken === undefined ? <Header updateToken={updateToken} /> : <Profile token={sessionToken} />)
  // }

  return (
    <div>
      {/* <Router> */}
      <Navigation />
      {/* {protectedViews()} */}
      {/* </Router> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
