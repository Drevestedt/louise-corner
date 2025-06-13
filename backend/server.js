import express from 'express';
import cors from 'cors';
import { connectDB, query } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

let db;

connectDB().then(database => {
  db = database;
  app.post("/api/bookings", async (req, res) => {
    const { name, email, date, time, guests } = req.body
    try {
      if (process.env.NODE_ENV === 'production') {
        await query(
          `INSERT INTO bookings (name, email, date, time, guests)
            VALUES ($1, $2, $3, $4, $5)`,
          [name, email, date, time, guests]
        );
      } else {
        await db.run(
          `INSERT INTO bookings (name, email, date, time, guests)
        VALUES (?, ?, ?, ?, ?)`,
          [name, email, date, time, guests]
        );
      }
      res.status(201).json({ message: "Booking saved successfully." });
    } catch (error) {
      res.status(500).json({ error: "Database error." });
    }
  });

  app.get("/api/bookings", async (req, res) => {
    try {
      let bookings

      if (process.env.NODE_ENV === 'production') {
        const result = await query('SELECT * FROM bookings');
        bookings = result.rows;
      } else {
        bookings = await db.all('SELECT * FROM bookings');
      }
      res.json(bookings);

    } catch (err) {
      res.status(500).json({ error: "Failed to fetch bookings." });
    }
  });

  const PORT = process.env.PORT || 3001;

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});