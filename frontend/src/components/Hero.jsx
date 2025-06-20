import React from "react";
import heroImage from "../assets/hero.png";
import { Link } from "react-router-dom";

export default function Hero() {

  return (
    <section className="relative flex flex-col items-center justify-center bg-cover bg-center min-h-screen text-center" style={{ backgroundImage: `url(${heroImage})` }}>
      {/* Transparent overlay over bg image */}
      <div className="absolute inset-0 bg-black/50"></div>

      <h1 className="relative font-[Playfair] text-6xl font-bold text-amber-500 mt-4 px-2">Welcome to Louise's Corner</h1>
      <p className="relative font-[Playfair] text-orange-400 text-3xl mt-8">Where grilled perfection meets rustic charm</p>

      <div className="relative flex mt-12 gap-12">
        <Link to="/menu" className="bg-amber-900 hover:bg-amber-800 text-amber-400 hover:text-amber-300 hover:shadow-lg font-[Playfair] text-2xl px-6 py-3 rounded-lg border-2 border-amber-600">
          See Menu
        </Link>
        <Link to="/book-table" className="bg-amber-900 hover:bg-amber-800 text-amber-400 hover:text-amber-300 hover:shadow-lg font-[Playfair] text-2xl px-6 py-3 rounded-lg border-2 border-amber-600">
          Book a Table
        </Link>
      </div>
    </section>
  )
}