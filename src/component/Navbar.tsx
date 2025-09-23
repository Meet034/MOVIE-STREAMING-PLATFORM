import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, TicketPlus } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/movies", label: "Movies" },
    { to: "/theatres", label: "Theatres" },
    { to: "/releases", label: "Releases" },
    { to: "/favourite", label: "Favourites" },
  ];

  return (
    <div className="bg-black  w-full relative">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between px-12 h-[80px] fixed top-0 left-0 w-full z-50">
        {/* Logo */}
     {/* Logo */}
<div>
  <Link to="/">
    <img src="/logo.svg" alt="logo" className="w-[120px] h-[50px] cursor-pointer" />
  </Link>
</div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 px-8 py-3 rounded-full 
                        border border-white/20 bg-black/40 backdrop-blur-xl 
                        shadow-[0_0_20px_rgba(0,255,200,0.3)] 
                        hover:shadow-[0_0_35px_rgba(0,255,200,0.5)] 
                        transition-all duration-500 ease-in-out">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-white text-lg font-medium transition-colors duration-200
                         hover:text-amber-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search + Login/User */}
        <div className="flex items-center gap-6">
          <Search className="text-white cursor-pointer" />
          {user ? (
  <UserButton>
    <UserButton.MenuItems>
      <UserButton.Action 
        label="My Bookings" 
        labelIcon={<TicketPlus width={15} />} 
        onClick={() => navigate("/my-bookings")} 
      />
    </UserButton.MenuItems>
  </UserButton>
) : (
            <button
              onClick={() => openSignIn()}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-red-500 
                         text-white font-semibold tracking-wide 
                         hover:from-amber-400 hover:to-red-400 
                         transition-all duration-300"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between w-full px-4 h-[80px] fixed top-0 left-0 md:hidden z-50">
        {/* Logo */}
       <div>
  <Link to="/">
    <img src="/logo.svg" alt="logo" className="w-[120px] h-[50px] cursor-pointer" />
  </Link>
</div>

        {/* Right: Login + Hamburger */}
        <div className="flex items-center gap-4">
        {user ? (
  <UserButton>
    <UserButton.MenuItems>
      <UserButton.Action 
        label="My Bookings" 
        labelIcon={<TicketPlus width={15} />} 
        onClick={() => navigate("/my-bookings")} 
      />
    </UserButton.MenuItems>
  </UserButton>
) : (
  <button
    onClick={() => openSignIn()}
    className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-red-500 
               text-white font-semibold tracking-wide 
               hover:from-amber-400 hover:to-red-400 
               transition-all duration-300"
  >
    Login
  </button>
)}


          <button
            className="p-2"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-7 h-7 text-white" />
          </button>
        </div>
      </div>

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
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(true)}
              className="text-white text-lg font-medium transition-colors duration-200
                         hover:text-amber-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
