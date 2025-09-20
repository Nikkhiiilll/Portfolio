import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow fixed w-full top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Nikhil Ronad</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#certifications" className="hover:underline">Certifications</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
