import DishGrid from './DishGrid'
import DishGrid2 from './DishGrid2'


const Dishes = () => {
  return (
    <div>
      <div className='flex flex-col justify-center pt-20 px-10 sm:px-5 gap-2'>
        <h1 className='text-4xl text-center sm:text-[46px] font-semibold text-wrap'>More Than <span className='text-[#FF5331] font-bold gap-1'>10,000</span> Dishes To Order!</h1>
        <p className='text-[16px] text-center text-wrap  font-normal'>Welcome to The Biggest Network of Food Ordering & Delivery</p>
      </div>
      
      <DishGrid />
      <DishGrid2 />
    </div>
  )
}

export default Dishes