import React from "react";
import { Link } from "react-router-dom";

const BookingCard = ({ booking }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "250px" }}>
      <h3>Customer: {booking.customerName}</h3>
      <p>Date: {new Date(booking.date).toLocaleString()}</p>
      <p>Make: {booking.make || "N/A"}</p>
      <p>Model: {booking.model || "N/A"}</p>
      <p>Year: {booking.year || "N/A"}</p>
      <Link to={`/booking/${booking._id}`}>
        <button>View Details</button>
      </Link>
      <Link to={`/edit/${booking._id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default BookingCard;
