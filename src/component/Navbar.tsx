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
  return (


    <div className="bg-black min-h-screen w-full">
  {/* Navbar */}
  <div className="bg-black w-full h-[80px]">
  <div className="flex items-center justify-between px-8 h-full">
    {/* Left: Logo */}
    <div>
      <img src="/logo.svg" alt="logo" className="w-[120px] h-[50px]" />
    </div>

    {/* Middle: Nav Links */}
    <div className="flex gap-8">
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

    {/* Right: Login */}
    <div>
      <button className="border border-white px-4 py-2 rounded text-white hover:bg-amber-500 hover:text-black">
        Login
      </button>
    </div>
  </div>
</div>

</div>
  )
}
export default Navbar
