const mongoose = require("mongoose");
const Booking = require("./models/Booking");
const bookings = require("./sampleBookings.json");

mongoose.connect("mongodb://127.0.0.1:27017/carwash", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log("MongoDB connected");

  await Booking.deleteMany(); // clear existing bookings
  await Booking.insertMany(bookings);

  console.log("Sample bookings inserted");
  mongoose.disconnect();
})
.catch(err => console.error(err));
