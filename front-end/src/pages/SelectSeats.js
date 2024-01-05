import React, { useEffect, useState } from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
// import "../css/style.css";
import "../css/buytickets.css";

export default function SelectSeats() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const ticketPrice = 2000;

  const handleSeatClick = (event) => {
    const clickedSeat = event.target;

    // Check if the clicked element is a seat (has an id attribute)
    if (clickedSeat.tagName === "TD" && clickedSeat.id) {
      const seatId = clickedSeat.id;

      // Check if the seat is unavailable or reserved
      if (
        clickedSeat.classList.contains("unavailable") ||
        clickedSeat.classList.contains("reserved")
      ) {
        return; // Do nothing for unavailable or reserved seats
      }

      setSelectedSeats((prevSelectedSeats) => {
        if (prevSelectedSeats.includes(seatId)) {
          return prevSelectedSeats.filter((id) => id !== seatId);
        } else {
          return [...prevSelectedSeats, seatId];
        }
      });
    }
  };

  const updateTicketsStatus = () => {
    const numSelectedSeats = selectedSeats.length;
    return numSelectedSeats === 0
      ? "0 tickets selected. Please select attendees."
      : `${numSelectedSeats} attendee(s) selected.`;
  };

  const updateTotal = () => {
    const totalPrice = selectedSeats.length * ticketPrice;
    return `Rs.${totalPrice}`;
  };

  return (
    <div>
      <Header />
      <main id="main" classNameName="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ol>
                  <li>
                    <a className="directory" href="/">Home</a>
                  </li>
                  <li>Select Seats</li>
                </ol>
                <h2>Select Seats</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="inner-page pt-4 pb-4">
          <div className="container">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <h3>BAHUBALI(HINDI)</h3>
                  <div className="col-12 details-slot">
                    <span>
                      <i className="bi bi-geo-alt"></i> Ticket Book - Hall C3
                    </span>
                    <span>
                      <i className="bi bi-calendar-week"></i> Thu,04,Jun
                    </span>
                    <span>GOLD CLASS</span>
                    <hr />
                  </div>
                  <div className="col-12 showtime-btn">
                    <span>Show Time</span>
                    <div className="row">
                      <button>7.30AM</button>
                      <button>10.30AM</button>
                      <button>2.30PM</button>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <div
                    className="col-6 d-flex justify-content-center seat-table"
                    onClick={handleSeatClick}
                  >
                    <table>
                      <tr>
                        <td
                          className={`seat ${
                            selectedSeats.includes("A1") ? "selected" : ""
                          }`}
                          id="A1"
                        >
                          A1
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("A2") ? "selected" : ""
                          }`}
                          id="A2"
                        >
                          A2
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("A3")
                              ? "selected"
                              : "unavailable"
                          }`}
                          id="A3"
                        >
                          A3
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("A4") ? "selected" : ""
                          }`}
                          id="A4"
                        >
                          A4
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("A5") ? "selected" : ""
                          }`}
                          id="A5"
                        >
                          A5
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("A6")
                              ? "selected"
                              : "reserved"
                          }`}
                          id="A6"
                        >
                          A6
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("A7") ? "selected" : ""
                          }`}
                          id="A7"
                        >
                          A7
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={`seat ${
                            selectedSeats.includes("B1") ? "selected" : ""
                          }`}
                          id="B1"
                        >
                          B1
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("B2") ? "selected" : ""
                          }`}
                          id="B2"
                        >
                          B2
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("B3") ? "selected" : ""
                          }`}
                          id="B3"
                        >
                          B3
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("B4") ? "selected" : "hide"
                          }`}
                          id="B4"
                        >
                          B4
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("B5") ? "selected" : ""
                          }`}
                          id="B5"
                        >
                          B5
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("B6")
                              ? "selected"
                              : "unavailable"
                          }`}
                          id="B6"
                        >
                          B6
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("B7") ? "selected" : ""
                          }`}
                          id="B7"
                        >
                          B7
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={`seat ${
                            selectedSeats.includes("C1") ? "selected" : ""
                          }`}
                          id="C1"
                        >
                          C1
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("C2") ? "selected" : ""
                          }`}
                          id="C2"
                        >
                          C2
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("C3") ? "selected" : ""
                          }`}
                          id="C3"
                        >
                          C3
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("C4") ? "selected" : "hide"
                          }`}
                          id="C4"
                        >
                          C4
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("C5") ? "selected" : ""
                          }`}
                          id="C5"
                        >
                          C5
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("C6") ? "selected" : ""
                          }`}
                          id="C6"
                        >
                          C6
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("C7")
                              ? "selected"
                              : "reserved"
                          }`}
                          id="C7"
                        >
                          C7
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={`seat ${
                            selectedSeats.includes("D1") ? "selected" : ""
                          }`}
                          id="D1"
                        >
                          D1
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("D2") ? "selected" : ""
                          }`}
                          id="D2"
                        >
                          D2
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("D3") ? "selected" : ""
                          }`}
                          id="D3"
                        >
                          D3
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("D4") ? "selected" : "hide"
                          }`}
                          id="D4"
                        >
                          D4
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("D5") ? "selected" : ""
                          }`}
                          id="D5"
                        >
                          D5
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("D6") ? "selected" : ""
                          }`}
                          id="D6"
                        >
                          D6
                        </td>
                        <td
                          className={`seat ${
                            selectedSeats.includes("D7") ? "selected" : ""
                          }`}
                          id="D7"
                        >
                          D7
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="col-12 text-center mt-3 fw-bold">
                  <span>LAYOUT</span>
                </div>
                <div
                  className="col-12 text-center d-flex justify-content-center table-info"
                  style={{ fontSize: "15px" }}
                >
                  <span>
                    <div className="selected-box"></div> Selected
                  </span>
                  <span>
                    <div className="available-box"></div> Available
                  </span>
                  <span>
                    <div className="reserved-box"></div> Reserved
                  </span>
                  <span>
                    <div className="unavailable-box"></div> Unavailable
                  </span>
                </div>
                <hr />
                <div className="col-12 text-center mt-3 mb-5">
                  <span id="tickets-status" style={{ fontSize: "15px" }}>
                    {updateTicketsStatus()}
                  </span>
                  <div className="col-12 mt-4">
                    <div className="col-12 text-center">
                      <span className="fw-bold" style={{ fontSize: "20px" }}>
                        TICKET PRICE
                      </span>
                      <br />
                      <span
                        id="ticket-price"
                        style={{ fontSize: "15px" }}
                      >{`Rs.${ticketPrice}`}</span>
                    </div>
                    <div className="col-12 text-center mt-3">
                      <span className="fw-bold" style={{ fontSize: "25px" }}>
                        Total
                      </span>
                      <br />
                      <span id="tickets-total" style={{ fontSize: "15px" }}>
                        {updateTotal()}
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="col-12">
                  <div className="row justify-content-center gap-3">
                    <button
                      className="col-3 back-btn"
                      style={{ fontSize: "15px" }}
                    >
                      Back
                    </button>
                    <button
                      className="col-3 con-btn"
                      style={{ fontSize: "15px" }}
                    >
                      Continue
                    </button>
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
