import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Home from "./pages/Home";
import News from "./pages/News";
import Quiz from "./pages/Quiz";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/news">News</Nav.Link>
              <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
