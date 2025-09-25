import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookingCard from "../components/BookingCard";
import FilterSidebar from "../components/FilterSidebar";
import axios from "axios";

const Homepage = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ make: "", model: "", year: "" });

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5001/api/bookings");
      setBookings(res.data);
      setFilteredBookings(res.data);
    } catch (err) {
      setError("Error fetching bookings");
    } finally {
      setLoading(false);
    }
  };

  // Filter based on search term and sidebar filters
  useEffect(() => {
    const filtered = bookings.filter((booking) => {
      const matchesSearch =
        booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (booking.make && booking.make.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (booking.model && booking.model.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesFilter =
        (filters.make ? booking.make?.toLowerCase().includes(filters.make.toLowerCase()) : true) &&
        (filters.model ? booking.model?.toLowerCase().includes(filters.model.toLowerCase()) : true) &&
        (filters.year ? booking.year === parseInt(filters.year) : true);

      return matchesSearch && matchesFilter;
    });

    setFilteredBookings(filtered);
  }, [searchTerm, filters, bookings]);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <FilterSidebar onFilter={setFilters} />
      <div style={{ flex: 1, marginLeft: "20px" }}>
        <h1>Car Wash Bookings</h1>
        <Link to="/add">
          <button>Add Booking</button>
        </Link>
        <input
          type="text"
          placeholder="Search by customer, make, or model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ margin: "10px 0", padding: "5px", width: "300px" }}
        />

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => <BookingCard key={booking._id} booking={booking} />)
          ) : (
            <p>No bookings found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
