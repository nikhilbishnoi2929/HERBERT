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
                <div className={`max-w-[308px] h-[350px] max-md:h-[305px] w-full ${index === 2 ? "":""} `}>
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
                  <div className='flex flex-col text-center font-semibold text-xs leading-5 mt-[32px]'>
                    <button className='max-w-[307px] h-[47px] bg-btnOrange text-white rounded-[10px]'>Upgrade to Basic</button>
                  </div>
                </div>
              </div>
            ))}
          </div>





          {/* <div className="flex flex-wrap -mx-4 sm:-mx-6 pt-8 sm:pt-[32px] md:pt-[40px] lg:pt-[56px] pb-8 sm:pb-[32px] md:pb-[40px] lg:pb-[80px]">
            {PLANS_CARD.map((plan, index) => (
              <div key={index} className="w-full px-4 sm:px-6 md:px-8 lg:px-6 md:w-6/12 lg:w-4/12">
                <div
                  className={`max-w-[364px] ${index === 1
                      ? "flex justify-center"
                      : index === 2
                        ? "flex justify-end border-solid border-[1px] border-t-0 border-r-0 border-b-0 border-l-[1px] border-[#D6D0CB]"
                        : "border-solid border-r-[1px] border-[#D6D0CB]"
                    }`}
                >
                  <div className="max-w-[308px] p-4 sm:p-6 md:p-8 lg:p-6">
                    <div className="flex justify-between items-center">
                      <h1 className="font-rubik font-semibold text-custom_xl text-black-20">
                        {plan.heading}
                      </h1>
                      <div
                        className={`px-2 py-1 rounded-md ${plan.validation === "Basic"
                            ? "bg-black text-white"
                            : plan.validation === "Standard"
                              ? "bg-yellow-300 text-black-20"
                              : plan.validation === "Premium"
                                ? "bg-orange text-white"
                                : ""
                          }`}
                      >
                        {plan.validation}
                      </div>
                    </div>
                    <p className="text-black-10 pt-4">{plan.paragraph}</p>
                    <div className="font-bold text-black-20 pt-6">{plan.includeText}</div>
                    <div className="flex items-center gap-1 pt-6">
                      <div>{plan.rightTick}</div>
                      <p className="text-black-10">10 messages</p>
                    </div>
                    <button className="outline-none border-none py-[14px] w-full rounded-[8px] bg-btnOrange font-rubik font-semibold text-white mt-8">
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div> */}




        </div>
      </div>
    </>
  )
}

export default Friendly
