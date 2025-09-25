# 🚗 Car Washing Booking – MERN Stack Project

## 📌 Project Overview
This is a MERN stack web application for **Car Washing Booking Management**.  
It allows users to **create, view, update, and delete bookings** for car wash services.  
The project also supports **searching, filtering, and responsive UI**.  

Just to let you know, no authentication is implemented according to the assignment requirement.

---

## ✨ Features
- **Booking Management (CRUD)**  
  - Create, read, update, and delete bookings.  
- **Search & Filter**  
  - Search by customer name and car details.  
  - Filter by service type, car type, status, and date range.  
- **Responsive UI**  
  - Works on desktop and mobile.  
- **Booking Details Page**  
  - View complete details of a single booking.  
- **Optional Features (if implemented)**  
  - Rating system for services.  
  - Sorting (newest, price, duration, status).  
  - Add-ons like interior cleaning and polishing.  

---

## 🛠️ Tech Stack
- **Frontend:** React, Axios, React Router, Tailwind/Bootstrap (choose your styling)  
- **Backend:** Node.js, Express.js, Mongoose  
- **Database:** MongoDB (local or Atlas)  

---

## 🚀 Setup Instructions

### 🔹 Clone the Repository

git clone https://github.com/Tannishtha-Ghosh/CarWashBooking
cd carwashingbooking


🔹 Backend Setup
cd backend
npm install
npm start


Backend runs on: http://localhost:5001

🔹 Frontend Setup
cd frontend
npm install
npm start


Frontend runs on: http://localhost:3000

📂 Project Structure
car-washing-booking/
│── carwash-backend/   # Node.js + Express + MongoDB
│   ├── models/Booking.js
│   ├── routes/bookingRoutes.js
│   ├── server.js
│── carwash-frontend/  # React
│   ├── src/components/
│   │   ├── BookingCard.js
│   │   ├── BookingDetail.js
│   │   ├── AddEditBooking.js
│   │   ├── FilterSidebar.js
│   │   ├── SearchBar.js
│   ├── src/App.js
│── README.md
│── .gitignore


📸 Screenshots
🏠 Homepage (Bookings List)
<img width="2802" height="1548" alt="image" src="https://github.com/user-attachments/assets/fa4eaa13-852f-4ddb-83f6-a91be5b189ab" />

📄 Booking Detail Page
<img width="2802" height="1548" alt="image" src="https://github.com/user-attachments/assets/e81d74a4-7544-4c63-a5bc-2dd5963f37f7" />


➕ Add/Edit Booking Form

ADD~

<img width="1724" height="778" alt="image" src="https://github.com/user-attachments/assets/bcc35905-6427-48c2-9840-9daa031bbd8e" />
<img width="1968" height="1008" alt="image" src="https://github.com/user-attachments/assets/52a3f206-371e-4997-8a36-ab871136b8d3" />
<img width="3082" height="1596" alt="image" src="https://github.com/user-attachments/assets/22234e40-d870-4ea9-8bd7-1030adb4fca0" />

EDIT~

<img width="2750" height="914" alt="image" src="https://github.com/user-attachments/assets/3ecfdf1f-d70f-4d3d-a5b6-972b1a95b0f3" />
<img width="2450" height="900" alt="image" src="https://github.com/user-attachments/assets/810208c3-7c21-49f2-bb69-46a7ba77efbd" />
<img width="3232" height="1592" alt="image" src="https://github.com/user-attachments/assets/08458349-1fe7-4ef7-bc16-b89e8fb4a4e4" />


🔍 Search Results

<img width="1520" height="926" alt="image" src="https://github.com/user-attachments/assets/1402db34-e5d5-470b-b646-52d80e03472b" />


📱 Mobile Views

<img width="2454" height="1742" alt="image" src="https://github.com/user-attachments/assets/c0112edf-0986-483b-bbe5-bc20090f965b" />
<img width="2468" height="1710" alt="image" src="https://github.com/user-attachments/assets/852e9961-9acb-4c5e-bd54-63a590f71c04" />


⚠️ Known Limitations

1️⃣ Backend Limitations
No authentication/authorization – Anyone can add, edit, or delete bookings.
No input validation or sanitization – Risk of bad data being saved in the database.
No error handling for DB failures – If MongoDB is down, the app might crash.
No pagination or filtering in APIs – If bookings grow large, fetching all at once is inefficient.
No rate limiting or security features – APIs are exposed to potential abuse.

2️⃣ Frontend Limitations
No form validation – Users might enter invalid data.
No user login or roles – All users see the same functionality.
Static styling – Limited responsiveness or UI polish.
No offline handling – App won’t work without internet.
Limited search/filter functionality – Only basic search, no advanced filtering or sorting.

3️⃣ Full-Stack Limitations
Tightly coupled frontend and backend – Hard to scale or replace one part.
No real-time updates – Changes in the backend aren’t reflected live in the frontend.
No testing – Backend APIs and frontend components may have bugs that go unnoticed.
Single database design – Not optimized for complex queries or multi-branch car wash operations.

4️⃣ Deployment/Scalability
Not production-ready – No deployment setup, environment config, or logging.
Performance issues – For a large number of bookings, the app may slow down.
No cloud storage for images/files – If you plan to upload photos of cars.

👩‍💻 Author
Your Name:
GitHub: @Tannishtha-Ghosh
