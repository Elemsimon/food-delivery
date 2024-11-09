import Image from "next/image"

const DishGrid = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-evenly ml-0 xl:ml-40 px-8 lg:px-20 py-10 gap-5 ">
      <div className="flex flex-col justify-evenly sm:flex-row gap-5">
        <div className="flex flex-col rounded-3xl justify-center items-center px-7 mb-4 sm:mb-0 bg-[#FAFAFA] text-white w-full h-[232px]">
          <div className="flex justify-center items-center bg-white rounded-full w-[108px] h-[108px] cursor-pointer">
            <p className="text-[54px]">🍕</p>
          </div>
            <p className="text-[24px] font-medium text-[#191720] pt-6">Pizza</p>
        </div>
        <div className="flex flex-col rounded-3xl justify-center items-center px-7 mb-4 sm:mb-0 bg-[#FAFAFA] text-white w-full h-[232px]">
          <div className="flex justify-center items-center bg-white rounded-full w-[108px] h-[108px] cursor-pointer">
            <p className="text-[54px]">🍔</p>
          </div>
          <p className="text-[24px] font-medium text-[#191720] pt-6">Burger</p>
        </div>
        <div className="flex flex-col rounded-3xl justify-center items-center px-7 mb-4 sm:mb-0 bg-[#FAFAFA] text-white w-full h-[232px]">
          <div className="flex justify-center items-center bg-white rounded-full w-[108px] h-[108px] cursor-pointer">
            <p className="text-[54px]">🍣</p>
          </div>
          <p className="text-[24px] font-medium text-[#191720] pt-6">Sushi</p>
        </div>
      </div>
      <div className="flex flex-col rounded-3xl pb-60 sm:pb-10 pt-10 px-10 bg-[#FAFAFA] text-black w-full h-[232px]">
        <p className="gap-1 text-[24px] font-semibold">
          Find <span className="text-[#FF5331]">deals</span>, <span className="text-[#009B00]">free delivery</span>, and more from our restaurant partners.
        </p>
        <div className="flex justify-end items-end pt-0 lg:pt-2 xl:pt-0">
          <Image
            src="/bike.svg"
            alt="apple"
            width={192}
            height={116}
            className="flex justify-end items-end"
          />
        </div>
      </div>
    </div>
  )
}

export default DishGrid