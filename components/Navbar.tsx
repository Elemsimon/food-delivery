import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="absolute w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between  max-container padding-container py-10">
      <div className="flex justify-start pt-4">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
      </div>

      <div className="pt-4">
        <div className="flex justify-center">
          <ul className="hidden h-full gap-12 lg:flex">
              {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="regular-16 text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
              </Link>
              ))}
          </ul>
        </div>
        </div>

          <div className="flex justify-end gap-4 hidden lg:flex">
            <button className="">
              Login
            </button>
            <button className="bg-red-600 text-white px-5 rounded-3xl py-3">
              Sign Up
            </button>
          
        </div>
      <Image 
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
        />
    </div>
    </nav>
  )
}

export default Navbar