import React, { useState } from "react";

export default function Booking() {

  //Send form input to backend
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(console.log(`${import.meta.env.VITE_BACKEND_URL}/api/bookings`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();

      if (response.ok) {
        alert("Booking successfull.");
        setFormData({ name: "", email: "", date: "", time: "", guests: "" });
      } else {
        alert("Booking failed.", data.error);
      }
    }
    catch (err) {
      alert("Server error.");
      console.error(err);
    }
  }

  return (
    <section className="pt-24 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-50 min-h-screen font-[Playfair]">
      <h1 className="text-5xl text-amber-700 text-center">Book a Table</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg space-y-6">
        <div>
          <label className="text-amber-700 text-xl" htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-amber-400 rounded px-4 py-2"
          />     
        </div>

        <div>
          <label className="text-amber-700 text-xl" htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-amber-400 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="text-amber-700 text-xl" htmlFor="date">Date:</label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-amber-400 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="text-amber-700 text-xl" htmlFor="time">Time:</label>
          <input
            id="time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-amber-400 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="text-amber-700 text-xl" htmlFor="guests">Number of Guests:</label>
          <input
            id="guests"
            name="guests"
            type="number"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            required
            className="w-full border border-amber-400 rounded px-4 py-2"
          />
        </div>

        <div className="flex justify-center">
          <button type="submit" className="bg-amber-700 text-white text-lg px-6 py-3 rounded-lg hover:bg-amber-800">Submit Booking</button>
        </div>
      </form>
    </section>
  );
}