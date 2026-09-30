import { useState } from "react";
import logo from "../assets/logo-text.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-gray-800 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        
        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
        src={logo}
        alt="Dev Stack Logo"
        className=" rounded-lg object-contain"
          />

        
        </a>

        
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm transition-colors ${
                link.name === "Home"
                  ? "text-pink-600"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden text-sm text-gray-700 hover:text-pink-600 sm:block"
          >
            Sign In
          </button>

          <button
            type="button"
            className="brand-gradient rounded-full px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Sign Up
          </button>
        </div>
      </nav>

    
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-gray-700 transition hover:bg-pink-50 hover:text-pink-600"
              >
                {link.name}
              </a>
            ))}

            <button
              type="button"
              className="rounded-lg px-3 py-3 text-left text-sm text-gray-700 hover:bg-pink-50"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
