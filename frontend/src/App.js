import React from "react";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./component/layout/Footer/Footer";

function App() {

  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
