import React from 'react'

import COMMON_BUTTON from '../common/Commonbtn'
import black_tick from '../../assets/images/svg/blackHole.svg'
import { pricingPlans } from '../common/Helper'

const Friendly = () => {
  return (
    <>
      <div className='py-16 sm:py-[40px] md:py-[56px] lg:py-[80px] bg-[#FFF8F2]'>
        <div className='max-w-[1164px] px-6 mx-auto'>
          <div className='flex flex-col justify-center items-center  '>
            <h3 className='max-w-[592px] text-3xl leading-8 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-[56px] font-semibold text-black text-center pb-4'>
              Friendly Pricing <span className='text-orange'>Plans</span></h3>

            <p className='max-w-[515px] font-lato font-normal leading-6 text-center text-gray'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
          </div>

          <div className='flex flex-row flex-wrap pt-[56px] pb-[80px] -mx-6 justify-center'>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={` w-full md:w-6/12 lg:w-4/12 border-[#D6D0CB] px-6 justify-center lg:justify-start flex ${index === 0 ? "md:border-r  " : ""} ${index === 1 ? " !justify-center lg:border-r max-md:border-t border-[#D6D0CB]" : ""} ${index === 2 ? " lg:justify-end !border-r-0 max-md:border-t border-[#D6D0CB]" : ""}`}>
                <div className={`max-w-[308px]  w-full ${index === 2 ? "":""} `}>
                  <div className='flex items-center justify-between'>
                    <h2 className={`font-semibold text-10xl leading-[52px] text-black  ${index === 1 ? "max-md:mt-5" : ""} ${index === 2 ? "max-lg:mt-5 " : ""}`}>{plan.price}</h2>
                    <button className={`${plan.buttonBgColor} max-w-[79px] h-[34px] w-full ${plan.textColor} rounded-[6px] text-xs leading-[24px]`}>{plan.buttonText}</button>
                  </div>
                  <div className='flex flex-col justify-center items-center mt-4'>
                    <p className='max-w-[308px] font-lato font-normal text-base leading-6 text-gray '>{plan.textContent}</p>
                  </div>
                  <div className='mt-6 max-w-[308px]'>
                    <h2 className='max-w-[308px] font-lato font-bold text-xs leading-[22px] pb-6'>What’s included?</h2>
                    <div className='flex gap-2'>
                      <img src={black_tick} alt="black_tick" className='w-fit' />
                      <p className='max-w-[90px] font-lato font-normal text-xs leading-6 text-gray'>{plan.messageCount}</p>
                    </div>
                  </div>
                  <div className='flex flex-col text-center w-full font-semibold text-xs leading-5 mt-[32px] mb-[32px]'>
                    <COMMON_BUTTON className={`w-full`} text={"Upgrade to Basic"}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Friendly
