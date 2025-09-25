import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BookingDetail = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5001/api/bookings/${id}`)
      .then((res) => setBooking(res.data))
      .catch(() => setError("Failed to fetch booking"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!booking) return <p>No booking found</p>;

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h2>Booking Details</h2>
      <p><strong>Customer:</strong> {booking.customerName}</p>
      <p><strong>Date:</strong> {new Date(booking.date).toLocaleString()}</p>
      <p><strong>Make:</strong> {booking.make || "N/A"}</p>
      <p><strong>Model:</strong> {booking.model || "N/A"}</p>
      <p><strong>Year:</strong> {booking.year || "N/A"}</p>
      <Link to={`/edit/${booking._id}`}>
        <button>Edit Booking</button>
      </Link>
      <Link to="/">
        <button>Back to Homepage</button>
      </Link>
    </div>
  );
};

export default BookingDetail;
