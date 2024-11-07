import Image from 'next/image'
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-between flex-col gap-20 py-24 pb-32 lg:gap-28 lg:py-48 lg:flex-row px-5 sm:px-20">
     

      <div className="relative z-20 flex flex-1 text-start flex-col py-10">
        <h1 className="text-[40px] sm:text-[61px] leading-none font-bold">Your Favorite Food Delivery Partner</h1>
        <p className="text-[16px] sm:text-[18px] font-normal text-wrap mt-6 text-[#191720cc]">
          The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep. 
        </p>

        <div className="flex flex-row w-full gap-3 pt-10 sm:flex-row object-cover">
          <Image
            src="/apple.svg"
            alt="apple"
            width={187}
            height={68}
          />
          <Image
            src="/google.svg"
            alt="google"
            width={187}
            height={68}
          />
        </div>
      </div>

      <div className="relative flex justify-start items-start">
        <div className="relative z-20 flex flex-col gap-8 bg-[#F2EBDA] px-10 pt-10 rounded-3xl">
          <Image 
            src="/courier.svg" 
            alt="logo" 
            width={500} 
            height={452}
            className='object-conatin'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero