import { useNavigate } from 'react-router-dom';
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import "../css/style.css";
import "../css/buytickets.css";

export default function BuyTickets() {
  const navigate = useNavigate();

  const navigateButtonClick = () => {
    navigate("/selectseats");
  };

  return (
    <div>
      <Header />
      <main id="main" className="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <ol>
                  <li>
                    <a className="directory" href="/">
                      Home
                    </a>
                  </li>
                  <li>Buy Tickets</li>
                </ol>
                <h2>Buy Tickets</h2>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <button className="fill-btn d-block d-lg-none">
                  <i className="bi bi-sliders2"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="inner-page pt-4 pb-4">
          <div className="container">
            <div className="col-12">
              <div className="row">
                <div className="col-3 d-none d-lg-block">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <div className="dropdown">
                        <button
                          className="btn col-12 text-start border-0 dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-geo-alt"></i> Locations
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Scope Cinemas
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Liberty
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="dropdown">
                        <button
                          className="btn col-12 text-start border-0 dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-calendar-week"></i> Date
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Thu,04,Jun
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Fri,05,Jun
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="dropdown">
                        <button
                          className="btn col-12 text-start border-0 dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-film"></i> Movie
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Wonka(2D)
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Wish(3D)
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="dropdown">
                        <button
                          className="btn col-12 text-start border-0 dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-eye"></i> Experiences
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Digital 2D
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Digital 3D
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 mt-3 mb-3 d-block d-lg-none">
                  <div className="row justify-content-center">
                    <div className="col-6 col-md-3">
                      <img
                        src="movie_covers\bahubali.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3">
                      <button className="watch-trailer-btn">Trailer</button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <h3>Interstellar (English)</h3>
                  <div className="col-12">
                    <hr />
                    <div className="col-12">
                      <div className="row">
                        <div className="col-4 col-md-3 d-flex flex-column">
                          <span>Digital 2D</span>
                          <button
                            className="time-btn"
                            onClick={navigateButtonClick}
                          >
                            7.30AM
                          </button>
                        </div>
                        <div className="col-4 col-md-3 d-flex flex-column">
                          <span>Digital 3D</span>
                          <button className="time-btn" onClick={navigateButtonClick}>10.30AM</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3 d-none d-lg-block">
                  <div className="col-12">
                    <div className="img-container">
                      <img
                        src="img/featured-img.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center mt-3">
                    <button className="watch-trailer-btn">Trailer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <Footer />
    </div>
  );
}
