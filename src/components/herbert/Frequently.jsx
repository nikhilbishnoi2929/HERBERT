import React, { useEffect, useState } from 'react';
import { FAQS } from '../common/Helper';
import COMMON_BUTTON from '../common/Commonbtn';
import accordionBg from '../../assets/images/webp/accordionBg.webp';
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
      <div className='container max-w-[1164px] mx-auto px-3 -mb-[15px] max-sm:-mb-20 max-lg:-mb-[40px] max-md:-mb-[60px] pt-[125px]'>
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
                    <svg className={`${activeIndex === index ? "transform rotate-180 hidden" : ""} w-[24px] h-[24px]`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="#5F5F5F" />
                    </svg>
                    <svg className={`${activeIndex === index ? "block" : "hidden"} `} width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1.99805H13C13.2652 1.99805 13.5196 1.89269 13.7071 1.70515C13.8946 1.51762 14 1.26326 14 0.998047C14 0.73283 13.8946 0.478477 13.7071 0.29094C13.5196 0.103404 13.2652 -0.00195312 13 -0.00195312H7.69856H1C0.734784 -0.00195312 0.48043 0.103404 0.292893 0.29094C0.105357 0.478477 0 0.73283 0 0.998047C0 1.26326 0.105357 1.51762 0.292893 1.70515C0.48043 1.89269 0.734784 1.99805 1 1.99805H8Z" fill="#5F5F5F" />
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
      <img className=' absolute top-[255px] z-0 left-0 w-full h-[686px]' src={accordionBg} alt="accordionBg" />
    </div>
  );
};
export default Frequently;
