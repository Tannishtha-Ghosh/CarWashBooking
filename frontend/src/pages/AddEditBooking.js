import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddEditBooking = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    customerName: "",
    date: "",
    make: "",
    model: "",
    year: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`http://localhost:5001/api/bookings/${id}`)
        .then((res) => setFormData(res.data))
        .catch(() => setError("Failed to fetch booking"))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.customerName || !formData.date || !formData.make || !formData.model || !formData.year) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      if (id) {
        await axios.put(`http://localhost:5001/api/bookings/${id}`, formData);
        alert("Booking updated successfully");
      } else {
        await axios.post("http://localhost:5001/api/bookings", formData);
        alert("Booking added successfully");
      }
      navigate("/");
    } catch (err) {
      setError("Failed to save booking");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h2>{id ? "Edit Booking" : "Add Booking"}</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="customerName" placeholder="Customer Name" value={formData.customerName} onChange={handleChange} />
          <input type="datetime-local" name="date" value={formData.date ? formData.date.slice(0,16) : ""} onChange={handleChange} />
          <input type="text" name="make" placeholder="Car Make" value={formData.make} onChange={handleChange} />
          <input type="text" name="model" placeholder="Car Model" value={formData.model} onChange={handleChange} />
          <input type="number" name="year" placeholder="Car Year" value={formData.year} onChange={handleChange} />
          <button type="submit">{id ? "Update Booking" : "Add Booking"}</button>
        </form>
      )}
    </div>
  );
};

export default AddEditBooking;
