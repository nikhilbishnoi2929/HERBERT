import React from 'react'
import Tourism_Man from '../../assets/images/webp/Tourism_Man.webp'
const Features = () => {
  return (
    <div className='lg:py-[120px]'>
      <div className='max-w-[1164px] px-3 mx-auto'>
        <div className='flex flex-col items-center justify-center max-w-[640px] mx-auto'>
          <h2 className='text-black max-w-[640px] text-2xl leading-7 sm:text-3xl sm:leading-8 md:text-4xl md:leading-10 lg:text-5xl lg:leading-[56px] font-semibold text-center pb-4'>
            Herbert Main <span className='text-orange'>Features</span></h2>

          <p className='text-gray max-w-[556px] font-lato font-normal text-base leading-[24px] text-center'>Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed.</p>
        </div>
      
        <div className="flex flex-col items-center lg:flex-col xl:flex-row xl:flex-wrap xl:justify-between pt-[56px]">
          <div className="xl:w-1/2 xl:flex xl:justify-around xl:items-center items-center">
            <div className="flex flex-col justify-around w-full xl:w-1/2">


              <div className="flex items-center mb-4 xl:mb-6">
                <div className="bg-btnOrange text-white rounded-full h-10 min-w-10 flex items-center justify-center font-bold mr-4">
                  1
                </div>


                <p className="max-w-[325px] font-lato font-medium leading-[24px] text-black text-sm">
                  Find out which visa you might want


                </p>

              </div>
              <div className="flex items-center mb-4 xl:mb-6">
                <div className="bg-btnOrange text-white rounded-full h-10 min-w-10 flex items-center justify-center font-medium mr-4">
                  2
                </div>
                <p className="max-w-[325px] font-lato font-medium leading-[24px] text-black text-sm">
                  Receive a checklist with all necessary documents
                </p>
              </div>
              <div className="flex items-center mb-4 xl:mb-6">
                <div className="bg-btnOrange text-white rounded-full h-10 min-w-10 flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <p className="max-w-[325px] font-lato font-medium leading-[24px] text-black text-sm">
                  Write your CV / Motivation Letter with Herbert
                </p>
              </div>
            </div>
            <div className="flex justify-center py-5 items-center xl:w-1/2">
              <img
                src={Tourism_Man}
                alt="Herbert guiding"
                className="max-h-96 w-auto xl:h-auto xl:w-2/3"
              />
            </div>
          </div>
          <div className="flex flex-col justify-around w-full xl:w-1/2 xl:pl-8">
            <div className="flex items-center mb-4 xl:mb-6">
              <div className="bg-btnOrange text-white rounded-full h-10 min-w-10 flex items-center justify-center font-bold mr-4">
                4
              </div>
              <p className="max-w-[325px] font-lato font-medium leading-[24px] text-black text-sm">
                Help prepare for your visa interview
              </p>
            </div>
            <div className="flex items-center mb-4 xl:mb-6">
              <div className="bg-btnOrange text-white rounded-full h-10 min-w-10 flex items-center justify-center font-bold mr-4">
                5
              </div>
              <p className="max-w-[325px] font-lato font-medium leading-[24px] text-black text-sm">
                Practice your German interactively with Herbert
              </p>
            </div>
            <div className="flex items-center mb-4 xl:mb-6">
              <div className="bg-btnOrange text-white rounded-full h-10 min-w-10 flex items-center justify-center font-medium mr-4">
                6
              </div>
              <p className="max-w-[325px] font-lato font-medium leading-[24px] text-black text-sm">
                Let Herbert guide you through your fresh start in Germany once you get there
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>

  )
}

export default Features
