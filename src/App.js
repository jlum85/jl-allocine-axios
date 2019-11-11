import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
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
    console.log(" onChangePage , current : " + numPage + " , step : " + step);
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

  const getMoviesBar = () => {
    // const tabCat = ["Popular Movies", "Upcoming Movies", "Top Rated Movies"];
    // const elements = tabCat.map((item, index) => {
    //   return <span onClick={() => onClickBar({ index })}>{tabCat[index]}</span>;
    // });
    return (
      <div className="headerBar">
        {/* {elements} */}
        <span
          className={catMovies === 0 ? "activeMenu" : ""}
          onClick={() => onClickBar(0)}
        >
          Popular Movies
        </span>
        <span
          className={catMovies === 1 ? "activeMenu" : ""}
          onClick={() => onClickBar(1)}
        >
          Upcoming Movies
        </span>
        <span
          className={catMovies === 2 ? "activeMenu" : ""}
          onClick={() => onClickBar(2)}
        >
          Top Rated Movies
        </span>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      {getMoviesBar()}

      <div className="container">
        {isLoading ? (
          <p>Chargement en cours...</p>
        ) : (
          <Container movies={movies}></Container>
        )}
      </div>

      <Footer
        numPage={numPage}
        countPage={countPage}
        onChangePage={onChangePage}
      ></Footer>
    </div>
  );
}

export default App;
