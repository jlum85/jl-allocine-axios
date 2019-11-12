import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import CatMovie from "./components/CatMovie";
// import Pagination from "./components/Pagination";
import "./App.css";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [catMovies, setCattMovies] = useState(0);
  const [movies, setMovies] = useState([]);
  const [numPage, setNumPage] = useState(1);
  const [countPage, setCountPage] = useState(1);

  const getUrl = idx => {
    if (idx === 0) {
      return (
        "https://api-allocine.herokuapp.com/api/movies/popular?p=" + numPage
      );
    } else if (idx === 1) {
      return (
        "https://api-allocine.herokuapp.com/api/movies/upcoming?p=" + numPage
      );
    } else if (idx === 2) {
      return (
        "https://api-allocine.herokuapp.com/api/movies/top_rated?p=" + numPage
      );
    }
  };

  const onChangePage = step => {
    const newNum = numPage + step;
    if (newNum >= 0 && newNum <= countPage) {
      setNumPage(newNum);
    }
  };

  const fetchData = async () => {
    const response = await axios.get(getUrl(catMovies));
    setCountPage(response.data.total_pages);

    setMovies(response.data.results);
    setIsLoading(false);
  };
  // A la création
  useEffect(() => {
    fetchData();
  }, []);

  // quand on change de catégorie
  useEffect(() => {
    setIsLoading(true);
    setNumPage(1);
    fetchData();
  }, [catMovies]);

  // quand on change de page
  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [numPage]);

  const onClickBar = idx => {
    setCattMovies(idx);
  };

  return (
    <div className="App">
      <Header />
      <CatMovie cat={catMovies} onClickBar={onClickBar} />

      <div className="container">
        {isLoading ? (
          <p className="loading">Chargement en cours...</p>
        ) : (
          <Container movies={movies} />
        )}
      </div>

      <>
        {isLoading ? (
          <></>
        ) : (
          <Footer
            numPage={numPage}
            countPage={countPage}
            onChangePage={onChangePage}
          />
        )}
      </>
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
