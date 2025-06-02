import React from "react";

export default function Menu() {

  return (
    <section className="pt-24 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-50 min-h-screen">
      <h1 className="flex flex-col justify-center items-center font-[Playfair] text-5xl text-amber-700">
        Explore our Dishes and Drinks</h1>

      <section className="flex flex-col items-center justify-center mt-12 gap-6">
        <h2 className="font-[Playfair] text-4xl text-amber-700">Menu</h2>
        <h3 className="font-[Playfair] text-2xl text-amber-700">Starters
          <ul>
            <li></li> { #TODO: Make menu a component instead}
            <li></li>
            <li></li>
          </ul>
        </h3>
        <h3 className="font-[Playfair] text-2xl text-amber-700">Main Courses</h3>
        <h3 className="font-[Playfair] text-2xl text-amber-700">Sides</h3>
        <h3 className="font-[Playfair] text-2xl text-amber-700">Desserts</h3>
        <h3 className="font-[Playfair] text-2xl text-amber-700">Drinks</h3>
      </section>
    </section>
  );
}