import Image from "next/image"

const DishGrid2 = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-evenly mr-0 xl:mr-48 px-8 lg:px-20 pt-5 sm:pt-0 pb-10 gap-5 xl:gap-1 ">
      <div className="flex flex-col">
        <div className="">
          <Image
            src="/vector2.svg"
            alt="image"
            width={61}
            height={50}
            className="flex justify-end items-end"
          />
        </div>
        <div className="flex flex-col rounded-3xl pt-10 px-0 text-black w-full ">
          <p className="text-[24px] font-light">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-evenly sm:flex-row gap-5">
        <div className="flex flex-col rounded-3xl justify-center items-center px-7 mb-4 sm:mb-0 bg-[#FAFAFA] text-white w-full h-[232px]">
          <div className="flex justify-center items-center bg-white rounded-full w-[108px] h-[108px] cursor-pointer">
            <p className="text-[54px]">🍝</p>
          </div>
            <p className="text-[24px] font-medium text-[#191720] pt-6">Pasta</p>
        </div>
        <div className="flex flex-col rounded-3xl justify-center items-center px-7 mb-4 sm:mb-0 bg-[#FAFAFA] text-white w-full h-[232px]">
          <div className="flex justify-center items-center bg-white rounded-full w-[108px] h-[108px] cursor-pointer">
            <p className="text-[54px]">🥗</p>
          </div>
          <p className="text-[24px] font-medium text-[#191720] pt-6">Salad</p>
        </div>
        <div className="flex flex-col rounded-3xl justify-center items-center px-7 mb-4 sm:mb-0 bg-[#FAFAFA] text-white w-full h-[232px]">
          <div className="flex justify-center items-center bg-white rounded-full w-[108px] h-[108px] cursor-pointer">
            <p className="text-[54px]">🍰</p>
          </div>
          <p className="text-[24px] font-medium text-[#191720] pt-6">Desserts</p>
        </div>
      </div>
      
    </div>
  )
}

export default DishGrid2