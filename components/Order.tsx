import React from 'react'

const Order = () => {
  return (
    <div className='px-20 py-32 relative'>
      <h1 className='flex justify-center items-center text-center text-4xl sm:text-[46px] font-semibold'>How To Order</h1>

      <div className='flex flex-col xl:flex-row justify-center gap-5 sm:gap-20 xl:gap-20 py-12'>
        <div className='flex flex-col sm:flex-row gap-5 xl:gap-20 items-center justify-evenly'>
          <div>
            <h2 className='text-[44px] font-semibold text-[#FF5331] -mb-6'>01</h2>
            <div className="flex flex-col rounded-3xl justify-center items-center mb-4 sm:mb-0 bg-[#FAFAFA] text-white w-[214px] h-[232px] relative z-10">
              <div className="flex justify-center items-center bg-white rounded-full w-[108px] h-[108px]">
                <p className="text-[47px]">📍</p>
              </div>
                <p className="px-5 text-center text-[24px] font-normal text-[#191720] pt-6">Choose your location</p>
            </div>
          </div>
          <div>
            <h2 className='text-[44px] font-semibold text-[#FF5331] -mb-6'>02</h2>
            <div className="flex flex-col rounded-3xl justify-center items-center mb-4 sm:mb-0 bg-[#FAFAFA] text-white w-[214px] h-[232px] relative z-10">
              <div className="flex justify-center items-center bg-white rounded-full w-[108px] h-[108px]">
                <p className="text-[47px]">🙇🏻‍♂️</p>
              </div>
                <p className="px-5 text-center text-[24px] font-normal text-[#191720] pt-6">Choose what to eat</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 xl:gap-20 items-center justify-evenly">
          <div>
            <h2 className='text-[44px] font-semibold text-[#FF5331] -mb-6'>03</h2>
            <div className="flex flex-col rounded-3xl justify-center items-center mb-4 sm:mb-0 bg-[#FAFAFA] text-white w-[214px] h-[232px] relative z-10">
              <div className="flex justify-center items-center bg-white rounded-full w-[108px] h-[108px]">
                <p className="text-[47px]">🍔</p>
              </div>
                <p className="px-5 text-center text-[24px] font-normal text-[#191720] pt-6">May your first order</p>
            </div>
          </div>
          <div>
            <h2 className='text-[44px] font-semibold text-[#FF5331] -mb-6'>04</h2>
            <div className="flex flex-col rounded-3xl justify-center items-center mb-4 sm:mb-0 bg-[#FAFAFA] text-white w-[214px] h-[232px] relative z-10">
              <div className="flex justify-center items-center bg-white rounded-full w-[108px] h-[108px]">
                <p className="text-[47px]">🏠</p>
              </div>
                <p className="px-5 text-center text-[24px] font-normal text-[#191720] pt-6">Now! Your food in way</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order