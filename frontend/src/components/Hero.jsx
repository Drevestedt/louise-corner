import React from "react";
import heroImage from "../assets/hero.png";

export default function Hero() {

  return (
    <section className="flex flex-col items-center justify-center bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
      {/*<div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>*/}
      <h1 className="text-6xl font-bold text-amber-500 mt-4 ">Welcome to Louise's Corner</h1>
      <p className="text-red-300 text-3xl mt-8">Where grilled perfection meets rustic charm</p>
      <div className="flex mt-10 gap-12">
        <button className="bg-amber-900 text-amber-400 text-xl px-6 py-3 rounded-lg border-2 border-amber-600">
          See Menu
        </button>
        <button className="bg-amber-900 text-amber-400 text-xl px-6 py-3 rounded-lg border-2 border-amber-600">
          Book a Table
        </button>
      </div>
    </section>
  )
}