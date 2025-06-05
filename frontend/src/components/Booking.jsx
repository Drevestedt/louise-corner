import React, { useState } from "react";

export default function Booking() {

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

  return (
    <section className="pt-24 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-50 min-h-screen font-[Playfair]">
      <h1 className="text-5xl text-amber-700 text-center">Book a Table</h1>

      <form className="max-w-xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg space-y-6">
        <div>
          <label className="text-amber-700 text-xl" htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
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