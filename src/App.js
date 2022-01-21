import React from "react";
import Footer from "./components/Footer/Footer";
import MoviesList from "./components/MoviesList/MoviesList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <MoviesList />
      <Footer />
    </div>
  );
}

export default App;
