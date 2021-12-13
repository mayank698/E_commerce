import React, { useEffect } from "react";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/layout/Footer/Footer";
import WebFont from "webfontloader";
import Home from "./component/Home/Home";
import './App.css'

function App() {
  useEffect(() => {
    WebFont.load({
      google: { families: ["Roboto", "Droid Sans", "Chilanka"] },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
