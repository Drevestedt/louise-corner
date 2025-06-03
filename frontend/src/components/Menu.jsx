import React from 'react';

export default function Menu() {

  return (
    <section className="pt-24 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-50 min-h-screen">
      <h1 className="text-center font-[Playfair] text-5xl text-amber-700">
        Explore our Dishes and Drinks</h1>

      <h2 className="font-[Playfair] text-4xl text-amber-700 text-center mt-10 underline">Menu</h2>
      
      <div className="flex flex-col items-center px-4 pb-24 mt-10">
        <section className="flex flex-col items-start mt-10">

          <h3 className="font-[Playfair] text-3xl text-amber-700">Starters:
            <ul className="flex flex-row gap-10 mt-2">
            <li className="text-2xl">Grilled Chorizo Skewers: <span className="text-amber-800 mx-1">$12</span></li>
            <li className="text-2xl">Beef Carpaccio: <span className="text-amber-800 mx-1">$14</span></li>
            <li className="text-2xl">Smoked Pork Belly Bites: <span className="text-amber-800 mx-1">$11</span></li>
          </ul>
          </h3>

          <h3 className="font-[Playfair] text-3xl text-amber-700 mt-6">Main Courses:
            <ul className="flex flex-row gap-10 mt-2">
              <li className="text-2xl">Grilled Ribeye Steak: <span className="text-amber-800 mx-1">$30</span></li>
              <li className="text-2xl">Roasted Chicken with Herbs: <span className="text-amber-800 mx-1">$25</span></li>
              <li className="text-2xl">Vegetable Paella: <span className="text-amber-800 mx-1">$22</span></li>
            </ul>
          </h3>

          <h3 className="font-[Playfair] text-3xl text-amber-700 mt-6">Sides:
            <ul className="flex flex-row gap-10 mt-2">
              <li className="text-2xl">Garlic Mashed Potatoes: <span className="text-amber-800 mx-1">$8</span></li>
              <li className="text-2xl">Grilled Asparagus: <span className="text-amber-800 mx-1">$9</span></li>
              <li className="text-2xl">Mixed Green Salad: <span className="text-amber-800 mx-1">$7</span></li>
            </ul>
          </h3>

          <h3 className="font-[Playfair] text-3xl text-amber-700 mt-6">Desserts:
            <ul className="flex flex-row gap-10 mt-2">
              <li className="text-2xl">Chocolate Lava Cake: <span className="text-amber-800 mx-1">$9</span></li>
              <li className="text-2xl">Cheesecake with Berry Compote: <span className="text-amber-800 mx-1">$8</span></li>
              <li className="text-2xl">Tiramisu: <span className="text-amber-800 mx-1">$7</span></li>
            </ul>
          </h3>

          <h3 className="font-[Playfair] text-3xl text-amber-700 mt-6">Drinks:
            <ul className="flex flex-row gap-10 mt-2">
              <li className="text-2xl">Red Wine: <span className="text-amber-800 mx-1">$12</span></li>
              <li className="text-2xl">White Wine: <span className="text-amber-800 mx-1">$12</span></li>
              <li className="text-2xl">Craft Beer: <span className="text-amber-800 mx-1">$8</span></li>
              <li className="text-2xl">Soda Cola Max: <span className="text-amber-800 mx-1">$5</span></li>
            </ul>
          </h3>
        </section>
      </div>
    </section>
  );
}