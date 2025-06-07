import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

let db;

connectDB().then(database => {
  db = database;
  app.post("/api/bookings", async (req, res) => {
    const { name, email, date, time, guests } = req.body
    try {
      await db.run(
        `INSERT INTO bookings (name, email, date, time, guests)
        VALUES (?, ?, ?, ?, ?)`,
        [name, email, date, time, guests]
      );
      res.status(201).json({ message: "Booking saved successfully." });
    } catch (error) {
      res.status(500).json({ error: "Database error." });
    }
  });

  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await db.all('SELECT * FROM bookings');
      res.json(bookings);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch bookings." });
    }
  })

  app.listen(3001, () => {
    console.log("Server is running on: http://localhost:3001");
  });
});