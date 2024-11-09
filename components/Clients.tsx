import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <div className='flex flex-col justify-center items-center pb-32 px-5'>
        <h1 className='text-4xl sm:text-[44px] text-center font-semibold'>
          Our Clients Feedback
        </h1>
        <p className='text-wrap text-center text-base font-light w-full sm:w-[532px] pt-4'>
          The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep.
        </p>
        <div className='py-8 sm:py-16'>
          <Image
            src="/vector.svg"
            alt="apple"
            width={60}
            height={55}
          />
        </div>
        <p className='text-wrap text-center text-2xl w-full sm:w-[737px] italic'>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”
        </p>
        <div className='flex flex-col justify-center items-center py-5 gap-1'>
          <h4 className='text-lg font-semibold'>
            Mitchell Marsh
          </h4>
          <p className='text-sm text-[#616161] font-normal'>
            CEO, Bexon Agency
          </p>
        </div>
        <div className='flex flex-row gap-6'>
          <Image
            src="/leftArrow.svg"
            alt="apple"
            width={36}
            height={36}
          />
          <Image
            src="/rightArrow.svg"
            alt="apple"
            width={36}
            height={36}
          />
        </div>
    </div>
  )
}

export default Clients