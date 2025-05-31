import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 flex items-center justify-between bg-amber-900 px-8 py-4">
      <h1 className="font-[Playfair] text-4xl text-stone-100 hover:text-red-300"><Link to="/">Louise´s Corner</Link></h1> 

      {/* Hamburger icon for mobile */}
      <button className="md:hidden text-stone-100 hover:text-red-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-4 font-[Playfair] text-xl text-stone-100">
        <li className="hover:text-red-300"><Link to="/">Home</Link></li>
        <li className="hover:text-red-300"><Link to="/menu">Menu</Link></li>
        <li className="hover:text-red-300"><Link to="/bookTable">Book Table</Link></li>
        <li className="hover:text-red-300"><Link to="/about">About</Link></li>
        <li className="hover:text-red-300"><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Mobile menu */}
      <div className={`fixed top-12 right-0 h-half w-1/3 mt-3 max-w-xs bg-amber-900 text-stone-100 text-center transform transition-transform duration-300 ease-in-out z-50
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-2 text-lg text-stone-100">
          <li className="hover:text-red-300"><Link to="/" onClick={() => setIsMenuOpen(false)} >Home</Link></li>
          <li className="hover:text-red-300"><Link to="/menu" onClick={() => setIsMenuOpen(false)} >Menu</Link></li>
          <li className="hover:text-red-300"><Link to="/bookTable" onClick={() => setIsMenuOpen(false)} >Book Table</Link></li>
          <li className="hover:text-red-300"><Link to="/about" onClick={() => setIsMenuOpen(false)} >About</Link></li>
          <li className="hover:text-red-300 mb-3"><Link to="/contact" onClick={() => setIsMenuOpen(false)} >Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
