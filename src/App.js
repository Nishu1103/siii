import React from 'react';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from "./component/home/home"

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
       <Home/>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
