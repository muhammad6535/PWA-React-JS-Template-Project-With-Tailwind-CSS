import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material"; // Importing Material-UI components
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import useHomeStore from "./stores/HomeStore";
import useAboutStore from "./stores/AboutStore";

function App() {
  const {
    count: homeCount,
    increment: homeIncrement,
    decrement: homeDecrement,
  } = useHomeStore();
  const {
    count: aboutCount,
    increment: aboutIncrement,
    decrement: aboutDecrement,
  } = useAboutStore();

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  count={homeCount}
                  increment={homeIncrement}
                  decrement={homeDecrement}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  count={aboutCount}
                  increment={aboutIncrement}
                  decrement={aboutDecrement}
                />
              }
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
