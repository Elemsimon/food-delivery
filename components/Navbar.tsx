import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative w-full z-10">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center lg:flex-row lg:justify-between px-5 lg:px-20 py-5 lg:py-10">
        
        {/* Logo Section - Top of the Navbar on Mobile */}
        <div className="flex justify-center lg:justify-start">
          <p className="text-[42px]">🍕</p>
        </div>
        
        {/* Links Section - Hidden on Mobile */}
        <div className="hidden lg:flex lg:gap-12">
          <ul className="flex gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link href={link.href} className="regular-16 text-black cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Buttons Section - Hidden on Mobile */}
        <div className="hidden lg:flex lg:gap-4">
          <button className="text-black">
            Login
          </button>
          <button className="bg-[#FF5331] text-white px-5 rounded-3xl py-3">
            Sign Up
          </button>
        </div>

        {/* Menu Icon - Bottom of the Navbar on Mobile */}
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer mt-4 lg:hidden"
        />
      </div>
    </nav>
  );
}

export default Navbar;
