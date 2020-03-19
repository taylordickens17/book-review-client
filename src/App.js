import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './components/site/Footer';
import Index from './components/site/Index';

const App = () => {
  const [sessionToken, setSessionToken] = useState(undefined)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }

  return (
    <div>
      <Index token={sessionToken} setSessionToken={setSessionToken} updateToken={updateToken} logout={clearToken} />
      <Footer />
    </div>
  );
}

export default App;