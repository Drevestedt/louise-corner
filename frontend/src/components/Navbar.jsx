import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-amber-900 px-8 py-4">
      <h1 className="text-3xl text-stone-100 hover:text-red-300"><Link to="/">Louise´s Corner</Link></h1>
      <ul className="flex gap-4 text-lg text-stone-100">
        <li className="hover:text-red-300"><Link to="/">Home</Link></li>
        <li className="hover:text-red-300"><Link to="/menu">Menu</Link></li>
        <li className="hover:text-red-300"><Link to="/bookTable">Book Table</Link></li>
        <li className="hover:text-red-300"><Link to="/about">About</Link></li>
        <li className="hover:text-red-300"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;