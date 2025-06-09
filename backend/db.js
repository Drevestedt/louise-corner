import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

// For Prod
const isProd = process.env.NODE_ENV === 'production';

let query;
let connectDB;

if (isProd) {
  // Postgresql (Neon)
  const { Pool } = pkg;

  const pool = new pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
  query = (text, params) => pool.query(text, params);
} else {
  /* For Dev #TODO: Continue adding DB for Dev
// Enable async/await support
sqlite3.verbose();

export async function connectDB() {
  const db = await open({
    filename: "./bookings.db",
    driver: sqlite3.Database
  })
  // Create the bookings table if it doesn't exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      date TEXT NOT NULL,
      time TEXT NOT NULL,
      guests INTEGER NOT NULL
    )
  `);
  return db;
}*/
}
