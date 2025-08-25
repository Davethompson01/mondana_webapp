import twitter from '../assets/twitter.svg'
import discord from '../assets/discord.svg'
import { useState } from 'react';

function Nav() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
     <nav className="flex justify-between items-center px-6 bg-[#1e1e1e] text-[#f5f5f5] w-full h-[100px] relative shadow-md">

<div className="font-Akaya text-2xl font-bold">
  <h1>MONDANA</h1>
</div>

{isHidden && (
  <div
    className="gap-2 grid md:hidden cursor-pointer"
    onClick={() => setIsHidden(false)}
  >
    <div className="w-6 h-[2px] bg-white"></div>
    <div className="w-6 h-[2px] bg-white"></div>
    <div className="w-6 h-[2px] bg-white"></div>
  </div>
)}

<div className="hidden md:flex items-center gap-10">
  <ul className="flex gap-8 text-xl font-Akaya">
    <li className="cursor-pointer hover:text-[#a855f7] transition">About</li>
    <li className="cursor-pointer hover:text-[#a855f7] transition">Team</li>
    <li className="cursor-pointer hover:text-[#a855f7] transition">Collection</li>
  </ul>

  <div className="flex gap-4">
    <a href="https://x.com/mondanabaddies" aria-label="Twitter">
      <img src={twitter} alt="Twitter" width={24} height={24} />
    </a>
    <a href="https://discord.gg/mondanahq" aria-label="Discord">
      <img src={discord} alt="Discord" width={24} height={24} />
    </a>
  </div>
</div>

{/* Mobile Menu */}
<div
  className={`fixed top-0 right-0 h-full w-3/4 bg-[#2a2a2a] text-white shadow-lg transform transition-transform duration-500 ease-in-out z-50 md:hidden 
    ${isHidden ? "translate-x-full" : "translate-x-0"}`}
>
  
  <div
    className="absolute top-6 right-6 cursor-pointer"
    onClick={() => setIsHidden(true)}
  >
    <div className="relative w-6 h-6">
      <span className="absolute w-6 h-[2px] bg-white rotate-45 top-3"></span>
      <span className="absolute w-6 h-[2px] bg-white -rotate-45 top-3"></span>
    </div>
  </div>

  <ul className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-Akaya">
    <li className="cursor-pointer hover:text-[#a855f7] transition">About</li>
    <li className="cursor-pointer hover:text-[#a855f7] transition">Team</li>
    <li className="cursor-pointer hover:text-[#a855f7] transition">Collection</li>
  </ul>

  <div className="flex gap-6 justify-center mt-8">
    <a href="https://twitter.com/Mondana" aria-label="Twitter">
      <img src={twitter} alt="Twitter" width={28} height={28} />
    </a>
    <a href="https://discord.gg/mondanahq" aria-label="Discord">

      <img src={discord} alt="Discord" width={28} height={28} />
    </a>
  </div>
</div>
</nav>

    </>
  );
}

export default Nav;
