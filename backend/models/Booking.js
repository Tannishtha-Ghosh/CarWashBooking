import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  date: { type: Date, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
