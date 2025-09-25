import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddEditBooking from "./pages/AddEditBooking";
import BookingDetail from "./pages/BookingDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddEditBooking />} />
        <Route path="/edit/:id" element={<AddEditBooking />} />
        <Route path="/booking/:id" element={<BookingDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
