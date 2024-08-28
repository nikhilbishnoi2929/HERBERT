import React, { useEffect } from 'react';
import cardFirst from '../../assets/images/svg/cardFirstVisa.svg';
import cardProcessing from '../../assets/images/svg/cardProcessing.svg';
import cardRequired from '../../assets/images/svg/cardRequired .svg';
import COMMON_BUTTON from '../common/Commonbtn';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const VisaCode = () => {
  useEffect(() => {
    gsap.fromTo(
      '.visa-application',
      { x: -150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        delay: 0.8,
        stagger: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.visa-application',
          start: 'top 70%',
          end: 'bottom bottom',
        }
      }
    );
    gsap.fromTo(
      '.top-card',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        delay: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.top-card',
          start: 'top 70%',
          end: 'bottom 20%',
        }
      }
    );
    gsap.fromTo(
      '.text-VisaCode',
      { opacity: 0, x: 100,duration: 3, },
      {
        opacity: 1,
        delay: 0.6,
        stagger: 0.4,
        x: 0,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.text-VisaCode',
          start: 'top bottom',
          end: 'bottom top',
        }
      }
    );
    gsap.fromTo(
      '.bottom-application',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.bottom-application',
          start: 'top 90%',
          end: 'bottom 30%',
        }
      }
    );
  }, []);
  return (
    <div className='bg-[#FFF8F2] z-20 relative'>
      <div className='container max-w-[1164px] mx-auto px-3 py-[100px] max-sm:py-[64px] max-md:py-[80px]'>
        <div className='flex flex-row flex-wrap -mx-auto items-center'>
          <div className='w-full lg:w-6/12 px-3'>
            <div className='flex flex-row flex-wrap -mx-3 items-center'>
              <div className='w-6/12 px-3 flex max-lg:justify-end'>
                <div className='visa-application max-w-[248px] rounded-[8px] bg-white py-[27px] max-sm:py-[17px] max-sm:px-[17px] px-[25px] justify-center'>
                  <div className='flex flex-col items-center text-center'>
                    <img className='max-w-[72px] max-sm:max-w-[48px]' src={cardFirst} alt="Visa Application Processes" />
                    <h2 className='font-lato pt-[14px] max-sm:text-base font-medium text-xl max-sm:leading-[18px] leading-6 text-gray max-w-[197px] max-sm:max-w-[118px]'>
                      Visa application processes
                    </h2>
                  </div>
                </div>
              </div>
              <div className='w-6/12 px-3'>
                <div className='top-card max-w-[248px] rounded-[8px] bg-white py-[27px] px-[25px] max-sm:py-[17px] max-sm:px-[17px] justify-center'>
                  <div className='flex flex-col items-center text-center'>
                    <img className='max-w-[72px] max-sm:max-w-[48px]' src={cardRequired} alt="Required Documentation" />
                    <h2 className='font-lato pt-[14px] max-sm:text-base font-medium text-xl max-sm:leading-[18px] leading-6 text-gray max-w-[197px] max-sm:max-w-[118px]'>
                      Required documentation
                    </h2>
                  </div>
                </div>
                <div className='max-w-[248px] bottom-application mt-9 max-sm:mt-6 rounded-[8px] bg-white py-[27px] px-[25px] max-sm:py-[17px] max-sm:px-[17px] justify-center'>
                  <div className='flex flex-col items-center text-center'>
                    <img className='max-w-[72px] max-sm:max-w-[48px]' src={cardProcessing} alt="Visa Fees and Processing Times" />
                    <h2 className='font-lato pt-[14px] max-sm:text-base font-medium text-xl max-sm:leading-[18px] leading-6 text-gray max-w-[197px] max-sm:max-w-[118px]'>
                      Visa fees and processing times
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full text-VisaCode lg:w-6/12 px-3 max-lg:pt-[56px] flex lg:justify-end justify-center'>
            <div className=' flex flex-col'>
            <h3 className='font-rubik font-semibold text-5xl max-md:text-3xl leading-[56px] text-black max-sm:text-2xl'>
              Visa <span className='text-orange'>Code</span>
            </h3>
            <p className='font-lato font-normal text-base leading-6 text-gray max-w-[473px] max-sm:text-sm pt-4 max-sm:pt-[14px]'>
              This code standardizes procedures for short-stay visas in the Schengen Area. Herbert's understanding of the Visa-Kodex ensures accurate information on:
            </p>
            <div className='mt-[44px] max-sm:mt-[32px]'>
              <COMMON_BUTTON text="Learn More" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VisaCode;
