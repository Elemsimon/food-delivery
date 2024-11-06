import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute w-full z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center lg:flex-row lg:justify-between max-container padding-container py-10">
        
        {/* Logo Section */}
        <div className="flex justify-center lg:justify-start mb-4 lg:mb-0">
          <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>
        </div>
        
        {/* Links Section */}
        <div className="mb-4 lg:mb-0">
          <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link href={link.href} className="regular-16 text-black cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Buttons Section */}
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-4">
          <button className="text-black">
            Login
          </button>
          <button className="bg-red-600 text-white px-5 rounded-3xl py-3">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden mt-4"
        />
      </div>
    </nav>
  );
}

export default Navbar;