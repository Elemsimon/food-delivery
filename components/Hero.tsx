import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex justify-between flex-col gap-2 py-0 xl:gap-20 lg:py-20 xl:flex-row px-5 sm:px-20">

      <div className="relative z-20 flex flex-1 text-start flex-col py-10">
        <h1 className="text-[40px] sm:text-[61px] leading-none font-bold">Your Favorite Food Delivery Partner</h1>
        <p className="text-[16px] sm:text-[18px] font-normal text-wrap mt-6 text-[#191720cc]">
          The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep. 
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-between pt-5 gap-2'>
          <input type="text" placeholder='Enter your email address...' className='w-full h-[62px] bg-[#F6F6F6] py-6 px-7 rounded-2xl text-sm font-light'/>
          <button className="flex justify-center items-center text-center w-full sm:w-48 h-[62px] bg-[#FF5331] text-white px-7 rounded-2xl py-6">
            Order Now
          </button>
        </div>

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
            alt="courier" 
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