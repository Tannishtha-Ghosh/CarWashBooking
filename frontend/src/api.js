import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AddEditBooking from "./pages/AddEditBooking";
import BookingDetail from "./pages/BookingDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<AddEditBooking />} />
        <Route path="/edit/:id" element={<AddEditBooking />} />
        <Route path="/booking/:id" element={<BookingDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
