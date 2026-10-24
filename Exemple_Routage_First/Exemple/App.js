import React from "react";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Route, BrowserRouter,Routes } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
          <Header />
          <div className="main-route-place">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
