import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BuyTickets from "./pages/BuyTickets";
import SelectSeats from "./pages/SelectSeats";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buytickets" element={<BuyTickets />} />
          <Route path="/selectseats" element={<SelectSeats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
