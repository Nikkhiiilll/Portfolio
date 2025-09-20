import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} Nikhil Ronad. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
