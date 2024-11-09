import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col justify-between xl:flex-row py-28 px-5 sm:px-20 bg-[#FFEFEC] gap-5'>
        <div>
          <h2 className='text-4xl text-center lg:text-start sm:text-[46px] font-semibold text-black'>Subscribe our newsletter</h2>
          <p className='text-base text-center lg:text-start py-5 font-light text-black'>Browse local restaurants and businesses for delivery by entering your address blow.</p>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-2'>
          <input type="text" placeholder='Enter your email address...' className='w-full xl:w-[470px] h-[62px] py-6 px-7 rounded-2xl text-sm font-light' />
          <button className="flex justify-center items-center right-[86px] text-center w-full sm:w-32 h-[62px] bg-[#FF5331] text-white px-5 rounded-2xl py-3">
            Send
          </button>
        </div>
    </div>
  )
}

export default Newsletter