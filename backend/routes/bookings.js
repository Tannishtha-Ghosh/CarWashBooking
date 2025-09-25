import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// GET all bookings
router.get("/", async (req, res, next) => {
  try {
    const bookings = await Booking.find().sort({ date: 1 });
    res.json(bookings);
  } catch (err) {
    next(err);
  }
});

// GET single booking by ID
router.get("/:id", async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (err) {
    next(err);
  }
});

// POST new booking
router.post("/", async (req, res, next) => {
  try {
    const { customerName, date, make, model, year } = req.body;
    const newBooking = new Booking({ customerName, date, make, model, year });
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    next(err);
  }
});

// PUT update booking
router.put("/:id", async (req, res, next) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBooking) return res.status(404).json({ message: "Booking not found" });
    res.json(updatedBooking);
  } catch (err) {
    next(err);
  }
});

// DELETE booking
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) return res.status(404).json({ message: "Booking not found" });
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    next(err);
  }
});

export default router;
