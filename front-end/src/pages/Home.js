import React, { useState, useRef, useEffect } from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import "../css/style.css";
import "../css/header.css";
import "../css/footer.css";

function Home() {
  const [filterPopupVisible, setFilterPopupVisible] = useState(false);
  const [filter, setFilter] = useState("by-name");
  const filterPopupRef = useRef(null);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const applyFilters = () => {
    console.log("Selected filter:", filter);
    closePopup();
  };

  const togglePopup = () => {
    setFilterPopupVisible(true);
  };

  const closePopup = () => {
    setFilterPopupVisible(false);
  };

  const handleBodyClick = (event) => {
    if (
      filterPopupRef.current &&
      filterPopupVisible &&
      !filterPopupRef.current.contains(event.target)
    ) {
      closePopup();
    }
  };

  useEffect(() => {
    document.body.addEventListener("mousedown", handleBodyClick);
    return () => {
      document.body.removeEventListener("mousedown", handleBodyClick);
    };
  }, [filterPopupVisible]);

  return (
    <div>
      <Header />

      <div className="featured-image-container">
        <img src="img/featured-img.jpg" alt="featured-image" />
        <div className="featured-info">
          <div className="featured-title">Interstellar (English)</div>
          <div className="featured-buttons">
            <a href="#" className="ticket-btn">
              <div className="btn-text">buy ticket</div>
              <div className="icon">
                <i className="fa-solid fa-ticket"></i>
              </div>
            </a>
            <a href="#" className="trailer-btn">
              <div className="btn-text">watch trailer</div>
              <div className="icon">
                <i className="fa-solid fa-play"></i>
              </div>
            </a>
          </div>
        </div>
      </div>

      <section className="filter-field">
        <div className="select-wrapper">
          <select name="filter" className="dropdown-filter" id="filterSelect">
            <option value="by-name">By Movie Name</option>
            <option value="by-latest">By Latest</option>
            <option value="by-date">By Date</option>
          </select>
          <span className="chevron-down">
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>

        <div className="search-wrapper">
          <div className="icon" id="filter-icon" onClick={togglePopup}>
            <i className="ri-equalizer-line"></i>
          </div>
          <div className="search-bar">
            <input
              type="text"
              className="search"
              name="search"
              placeholder="Search for Movie and Event"
            />
          </div>
        </div>

        <button className="search-btn">
          <span>Search</span>
        </button>
      </section>

      <div
        className="filter-popup"
        id="filterPopup"
        style={{ display: filterPopupVisible ? "flex" : "none" }}
        ref={filterPopupRef}
      >
        <div className="close" onClick={closePopup}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <span className="filter-title">Filter</span>
        <label className="container">
          By Name
          <input
            type="radio"
            name="radio"
            value="by-name"
            checked={filter === "by-name"}
            onChange={handleFilterChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          By Latest
          <input
            type="radio"
            name="radio"
            value="by-latest"
            checked={filter === "by-latest"}
            onChange={handleFilterChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          By Date
          <input
            type="radio"
            name="radio"
            value="by-date"
            checked={filter === "by-date"}
            onChange={handleFilterChange}
          />
          <span className="checkmark"></span>
        </label>

        <button className="apply-filters">Apply</button>
      </div>

      <section className="container-name">now showing</section>
      <section className="movie-container">
        <div className="movie-card">
          <div className="image-container">
            <img src="img/featured-img.jpg" alt="" />
          </div>
          <div className="movie-info">
            <span className="name">Interstellar</span>
            <span className="language">(English)</span>
          </div>
          <button className="ticket-btn">buy ticket</button>
        </div>
        <div className="movie-card">
          <div className="image-container">
            <img src="img/kung-fu-panda.jpg" alt="" />
          </div>
          <div className="movie-info">
            <span className="name">Kung fu panda 4</span>
            <span className="language">(English)</span>
          </div>
          <button className="ticket-btn">buy ticket</button>
        </div>
        <div className="movie-card">
          <div className="image-container">
            <img src="img/avatar.jpg" alt="" />
          </div>
          <div className="movie-info">
            <span className="name">Interstellar</span>
            <span className="language">(English)</span>
          </div>
          <button className="ticket-btn">buy ticket</button>
        </div>
        <div className="movie-card">
          <div className="image-container">
            <img src="img/arq.jpg" alt="" />
          </div>
          <div className="movie-info">
            <span className="name">Interstellar</span>
            <span className="language">(English)</span>
          </div>
          <button className="ticket-btn">buy ticket</button>
        </div>
      </section>

      <section className="container-name">upcoming movies</section>
      <section className="movie-container">
        <div className="movie-card">
          <div className="image-container">
            <img src="img/featured-img.jpg" alt="" />
          </div>
          <div className="movie-info">
            <span className="name">Interstellar</span>
            <span className="language">(English)</span>
          </div>
          <button className="ticket-btn">buy ticket</button>
        </div>
        <div className="movie-card">
          <div className="image-container">
            <img src="img/kung-fu-panda.jpg" alt="" />
          </div>
          <div className="movie-info">
            <span className="name">Kung fu panda 4</span>
            <span className="language">(English)</span>
          </div>
          <button className="ticket-btn">buy ticket</button>
        </div>
        <div className="movie-card">
          <div className="image-container">
            <img src="img/avatar.jpg" alt="" />
          </div>
          <div className="movie-info">
            <span className="name">Interstellar</span>
            <span className="language">(English)</span>
          </div>
          <button className="ticket-btn">buy ticket</button>
        </div>
        <div className="movie-card">
          <div className="image-container">
            <img src="img/arq.jpg" alt="" />
          </div>
          <div className="movie-info">
            <span className="name">Interstellar</span>
            <span className="language">(English)</span>
          </div>
          <button className="ticket-btn">buy ticket</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
