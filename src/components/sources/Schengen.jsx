import React from 'react'
import border_code from '../../assets/images/webp/border-code.webp'
import COMMON_BUTTON from '../common/Commonbtn'
const Schengen = () => {
  return (
    <>
      <div className='pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-28'>
        <div className='max-w-[1290px] px-4 sm:px-6 md:px-8 mx-auto'>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className='lg:w-6/12 md:w-6/12 w-full px-4 '>
             <div className='relative'>
             <img
                src={border_code}
                alt="border-code"
                className='w-full max-w-[700px] lg:max-w-[650px] md:max-w-[600px] absolute lg:right-[80x] lg:top-0 md:right-4 md:top-0 right-[90px] flex justify-end items-end'
              />
             </div>
            </div>
            <div className='lg:w-6/12 md:w-6/12 w-full px-4 lg:pl-8'>
              <div className='flex flex-col max-w-full lg:max-w-[473px]'>
                <h2 className='text-black font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-snug sm:leading-normal md:leading-tight lg:leading-tight mb-4'>
                  Schengen Borders <span className='text-orange'>Code</span>
                </h2>
                <p className='text-sm sm:text-base md:text-base lg:text-base font-lato font-normal text-gray pt-2 sm:pt-4 md:pt-4 lg:pt-4 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed'>
                  As part of the Schengen Area, Germany adheres to this code for border control. Herbert's knowledge of the Schengener Grenzkodex covers:
                  <br />• Short-term stay regulations
                  <br />• Entry requirements for the Schengen Area
                  <br />• Border crossing procedures
                </p>
              </div>
                <div className='pt-8'>
                  <COMMON_BUTTON text={"Learn more"} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Schengen
