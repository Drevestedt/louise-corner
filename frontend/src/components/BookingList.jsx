import React, {useEffect, useState} from "react";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/bookings")
    .then((res) => res.json())
    .then((data) => setBookings(data))
    .catch((err) => console.error("Error fetching bookings:", err))
  }, []);

  return (
    <section className="flex flex-col items-center pt-10 font-[Playfair]">
      <h2 className="text-3xl mb-5 text-amber-700">Booking List:</h2>
      <table className="w-5/6 border-collapse border border-amber-400">
        <thead>
          <tr className="bg-amber-100">
            <th className="border border-amber-400 px-4 py-2">Name</th>
            <th className="border border-amber-400 px-4 py-2">Email</th>
            <th className="border border-amber-400 px-4 py-2">Date</th>
            <th className="border border-amber-400 px-4 py-2">Time</th>
            <th className="border border-amber-400 px-4 py-2">Guests</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="border border-amber-400 px-4 py-2">{booking.name}</td> {/* #TODO: Add delete function */}
              <td className="border border-amber-400 px-4 py-2">{booking.email}</td>
              <td className="border border-amber-400 px-4 py-2">{booking.date}</td>
              <td className="border border-amber-400 px-4 py-2">{booking.time}</td>
              <td className="border border-amber-400 px-4 py-2">{booking.guests}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}