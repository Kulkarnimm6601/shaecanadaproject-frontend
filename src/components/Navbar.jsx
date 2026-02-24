import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/0 backdrop-blur-xl">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <img
          src={logo}
          alt="Shae Logo"
          className="h-12 w-auto object-contain"
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-green-950 font-medium">
          <li><a href="#home" className="hover:text-green-600 transition">Home</a></li>
          <li><a href="#technology" className="hover:text-green-600 transition">Technology</a></li>
          <li><a href="#shaecoins" className="hover:text-green-600 transition">Shae Coins</a></li>
          <li><a href="#exchange" className="hover:text-green-600 transition">Exchange</a></li>
          <li><a href="#brands" className="hover:text-green-600 transition">For Brands</a></li>
          <li><a href="#investors" className="hover:text-green-600 transition">Investors</a></li>
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/join-ico"
          className="hidden md:block px-5 py-2 rounded-xl text-white font-semibold
                     bg-green/10 hover:bg-green-800
                     transition duration-300"
        >
          Join ICO
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl px-6 pb-6 space-y-4 text-center text-green-400 font-medium">
          <a href="#home" onClick={() => setIsOpen(false)} className="block">Home</a>
          <a href="#technology" onClick={() => setIsOpen(false)} className="block">Technology</a>
          <a href="#shaecoins" onClick={() => setIsOpen(false)} className="block">Shae Coins</a>
          <a href="#exchange" onClick={() => setIsOpen(false)} className="block">Exchange</a>
          <a href="#brands" onClick={() => setIsOpen(false)} className="block">For Brands</a>
          <a href="#investors" onClick={() => setIsOpen(false)} className="block">Investors</a>

          <Link
            to="/join-ico"
            onClick={() => setIsOpen(false)}
            className="block bg-green-600 text-white py-3 rounded-lg mt-4"
          >
            Join ICO
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



// import React from "react";
// import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="fixed w-full top-0 z-50 
//       bg-transparent 
//       backdrop-blur-2xl ">
      
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="Shae Logo"
//             className="h-15 w-auto object-contain"
//           />
//         </div>

//         {/* Links */}
//         <ul className="hidden md:flex items-center gap-8 text-green-600 font-medium">
//           <li><a href="#home" className="hover:text-green-500 transition duration-300">Home</a></li>
//           <li><a href="#technology" className="hover:text-green-500 transition duration-300">Technology</a></li>
//           <li><a href="#shaecoins" className="hover:text-green-500 transition duration-300">Shae Coins</a></li>
//           <li><a href="#exchange" className="hover:text-green-500 transition duration-300">Exchange</a></li>
//           <li><a href="#brands" className="hover:text-green-500 transition duration-300">For Brands</a></li>
//           <li><a href="#investors" className="hover:text-green-500 transition duration-300">Investors</a></li>
//         </ul>

//         {/* CTA Button */}
//         <Link
//   to="/join-ico"
//   className="
//     hidden md:block
//     px-5 py-2 rounded-lg
//     text-white font-semibold
//     bg-transparent
//     hover:bg-green-500
//     hover:shadow-lg hover:shadow-green-500/30
//     transition-all duration-300
//   "
// >
//   Join ICO
// </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
