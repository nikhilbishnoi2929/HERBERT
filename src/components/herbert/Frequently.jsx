import React, { useEffect, useState } from 'react';
import { FAQS } from '../common/Helper';
import COMMON_BUTTON from '../common/Commonbtn';
import accordion_Bg from '../../assets/images/webp/accordionBg.webp';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Frequently = () => {
  useEffect(() => {
    gsap.fromTo(
      '.frequentlyAccordion',
      { opacity: 0, y: -100, duration: 1, },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: 'power3.out',
        delay: 0.7,
        stagger: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.frequentlyAccordion',
          start: 'top bottom',
          end: 'bottom top',
          // toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      '.frequentlyAsked', {
      duration: 2,
      opacity: 0,
      x: -100,

    }, {
      duration: 2,
      x: 0,
      opacity: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.frequentlyAsked',
        start: 'top bottom',
        end: 'bottom top',
      }
    }
    )
    gsap.fromTo(
      '.paraHelp', {
        duration: 2,
        opacity: 0,
        x: 100,
  
      }, {
        duration: 2,
        x: 0,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.paraHelp',
          start: 'top bottom',
          end: 'bottom top',
        }
      }
    )
  }, []);
  const [activeIndex, ACCORDION_INDEX] = useState(null);
  const toggleAccordion = (index) => {
    ACCORDION_INDEX(activeIndex === index ? null : index);
  };
  return (
    <div className=' relative '>
      <div className='container max-w-[1164px] mx-auto px-3 -mb-[15px] max-sm:-mb-20 max-lg:-mb-[40px] max-md:-mb-[60px]'>
        <div className='flex justify-center'>
          <div className='flex flex-col items-center text-center pt-5'>
            <h2 className='z-20 frequentlyAsked font-semibold text-5xl leading-[56px] max-sm:text-2xl max-sm:leading-7 max-sm:max-w-[327px] text-black'>
              Frequently Asked <span className='text-orange'>Questions</span>
            </h2>
            <p className='max-w-[622px] paraHelp z-20 font-lato font-normal max-sm:pt-3 pt-4 max-sm:text-sm max-sm:leading-5 text-base leading-6 text-gray'>
              Help users find quick answers to common queries about Herbert, our AI-powered assistant for German visa and immigration processes.
            </p>
          </div>
        </div>

        <div className='row z-30 relative flex flex-wrap flex-row -mx-3 pt-10 max-sm:pt-[22px]'>
          {FAQS.map((faq, index) => (
            <div key={index} className='w-6/12 frequentlyAccordion max-lg:w-full px-3'>
              <div
                className={`overflow-hidden relative ease-linear z-20 rounded-[8px] ${activeIndex === index ? "z-30 border-transparent shadow-card_Shadow" : "border-[1px] border-[#00000029]"} mt-6 max-sm:mt-4`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`${activeIndex === index ? "p-[10px_10px_0px_10px] relative z-30 lg:p-[21px_20px_0px_20px] border-transparent" : "p-2 lg:p-[18px_24px] max-lg:p-[14px]"} w-full text-left bg-blur_black backdrop-blur-lg flex items-center justify-between border-[1px] border-[#FFFFFF4D] transition ease-in-out`}
                >
                  <span className="z-30 font-lato font-normal max-sm:text-sm relative max-sm:leading-5 text-base leading-6 text-black">{faq.question}</span>
                  <span className="float-right z-30">
                    <svg width="40" className={`${activeIndex === index ? "transform rotate-180 hidden" : ""} w-[32px] h-[32px] md:w-[40px] md:h-[40px]`} height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="19.5" stroke="white" />
                      <path d="M21 13C21 12.4477 20.5523 12 20 12C19.4477 12 19 12.4477 19 13V18.9999L13 18.9999C12.4477 18.9999 12 19.4476 12 19.9999C12 20.5522 12.4477 20.9999 13 20.9999L19 20.9999V27C19 27.5523 19.4477 28 20 28C20.5523 28 21 27.5523 21 27V20.9999L27 20.9999C27.5523 20.9999 28 20.5522 28 19.9999C28 19.4476 27.5523 18.9999 27 18.9999L21 18.9999V13Z" fill="black" />
                    </svg>
                    <svg className={`${activeIndex === index ? "block" : "hidden"} w-[32px] h-[32px] md:w-[40px] md:h-[40px]`} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="19.5" stroke="white" />
                      <path d="M13 19L19 19H21L27 19C27.5523 19 28 19.4477 28 20C28 20.5523 27.5523 21 27 21L21 21L19 21L13 21C12.4477 21 12 20.5523 12 20C12 19.4477 12.4477 19 13 19Z" fill="black" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden z-20 transition-max-height duration-400 ease-in-out ${activeIndex === index ? "max-h-[300px]" : "max-h-0"}`}
                >
                  <div className="font-normal relative font-lato z-20 text-sm max-sm:leading-5 leading-6 text-gray p-[2px_8px_8px_8px] lg:p-[12px_24px_18px_24px]">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center pt-12 max-sm:pt-8'>
          <COMMON_BUTTON className="z-20" text={"View All"} />
        </div>
      </div>
      <img className=' absolute top-[255px] z-0 left-0 w-full h-[686px]' src={accordion_Bg} alt="accordionBg" />
    </div>
  );
};
export default Frequently;
