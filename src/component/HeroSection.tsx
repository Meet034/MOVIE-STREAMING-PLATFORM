import { CalendarIcon, ClockIcon, Play, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen flex items-center 
                 bg-[url('/backgroundImage.png')] bg-cover bg-center"
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start gap-6 
                      px-6 md:px-16 lg:px-36 text-white max-w-3xl">
        
        {/* Logo */}
        <img src="/marvelLogo.svg" alt="Marvel Logo" className="w-32 md:w-48" />
        
        {/* Title */}
        <h1 className="text-5xl md:text-[70px] md:leading-[1.1] font-extrabold drop-shadow-lg">
          Guardians <br />of the Galaxy
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-300 text-lg">
          <span className="tracking-wide">Action | Adventure | Sci-fi</span>
          
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-amber-400" />
            <span>2018</span>
          </div>

          <div className="flex items-center gap-2">
            <ClockIcon className="w-5 h-5 text-amber-400" />
            <span>2h 8m</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full 
                             bg-amber-500 hover:bg-amber-400 text-black font-semibold 
                             shadow-lg shadow-amber-500/30 transition-all duration-300">
            <Play className="w-5 h-5" /> Watch Now
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full 
                             bg-white/20 hover:bg-white/30 text-white font-medium 
                             backdrop-blur-sm border border-white/30 transition-all duration-300">
            <Heart className="w-5 h-5" /> Add to Favourites
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
