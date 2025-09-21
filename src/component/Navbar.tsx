import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/movies", label: "Movies" },
    { to: "/theatres", label: "Theatres" },
    { to: "/releases", label: "Releases" },
    { to: "/favourite", label: "Favourites" },
  ];

  // Optional: Search click handler (placeholder)
  const handleSearchClick = () => {
    alert("Search clicked! (You can implement search logic here)");
  };

  return (
    <div className="bg-black min-h-screen w-full relative">
      {/* Navbar */}
      <div className="bg-black w-full h-[80px] fixed top-0 left-0 z-50">
        <div className="flex items-center justify-between px-8 h-full">
          {/* Left: Logo */}
          <div>
            <img src="/logo.svg" alt="logo" className="w-[120px] h-[50px]" />
          </div>

          {/* Middle: Nav Links (desktop only) */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="hover:text-amber-500 text-lg font-medium text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: Search + Login (desktop only) */}
          <div className="hidden md:flex items-center gap-6">
            <Search
              onClick={handleSearchClick}
              className="text-white cursor-pointer hover:text-amber-500"
            />
            <button className="border border-white px-4 py-2 rounded text-white hover:bg-amber-500 hover:text-black">
              Login
            </button>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden p-2"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-7 h-7 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {/* Mobile Menu Overlay */}
<div
  className={`fixed top-0 left-0 w-full h-full bg-black/90 z-50 flex flex-col items-center 
              px-8 pt-24 transition-transform duration-300 ease-in-out md:hidden
              ${open ? "translate-x-0" : "-translate-x-full"}`}
>
  {/* Close Button */}
  <button
    className="absolute top-6 right-6 p-2"
    onClick={() => setOpen(false)}
    aria-label="Close menu"
  >
    <X className="w-7 h-7 text-white" />
  </button>

  {/* Navigation Links */}
  <div className="flex flex-col items-center space-y-6">
    {navLinks.map((l) => (
      <Link
        key={l.label}
        to={l.to}
        onClick={() => setOpen(false)}
        className="text-white text-xl font-medium hover:text-amber-500"
      >
        {l.label}
      </Link>
    ))}

    {/* Login Button */}
    <button
      onClick={() => setOpen(false)}
      className="mt-4 border border-white px-6 py-2 rounded text-white hover:bg-amber-500 hover:text-black"
    >
      Login
    </button>
  </div>
</div>
    </div>
  )
}
    export default Navbar;
