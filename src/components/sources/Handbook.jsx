import React, { useEffect } from 'react';
import man_Image from '../../assets/images/webp/helloMan.webp';
import COMMON_BUTTON from '../common/Commonbtn';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Handbook = () => {
  useEffect(() => {
    // GSAP Animation for .helloManTwo
    gsap.fromTo(
      '.hello_ManTwo',
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hello_ManTwo',
          start: 'top center',
          end: 'bottom 50%',
          // toggleActions: 'play none none reverse',
        }
      }
    );

    // GSAP Animation for .text_Animation
    gsap.fromTo(
      '.text_Animation',
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.6,
        stagger: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.text_Animation',
          start: 'top 70%',
          // markers:true,
          end: 'bottom 20%',
          // toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);
  return (
    <div>
      <div className='container max-w-[1164px] mx-auto px-3 pt-[120px] pb-[120px] max-md:pb-[80px] max-sm:pb-[64px] -mb-[134px] max-sm:-mb-[150px] max-sm:pt-20 max-md:pt-24'>
        <div className='row -mx-3 flex flex-wrap flex-row items-center pb-[64px] max-sm:pb-20'>
          <div className='w-full lg:w-6/12 px-3'>
            <h3 className='text_Animation font-semibold max-sm:text-2xl text-5xl leading-[56px] max-md:text-4xl text-black'>
              Visa <span className='text-orange'>Handbook</span>
            </h3>
            <p className='text_Animation max-w-[478px] pt-4 max-sm:pt-[14px] font-lato font-normal text-base leading-6 text-gray'>
              The Visumhandbuch is a comprehensive internal document used by the Federal Foreign Office and German embassies. Spanning approximately 1,000 pages, it provides detailed guidelines on visa issuance. Herbert's training on this resource offers:
            </p>
            <div className='text_Animation flex items-center gap-3 ps-[10px] pt-[10px]'>
              <div className='w-[8px] h-[8px] rounded-full bg-gray'></div>
              <h4 className='font-lato font-normal max-sm:text-sm text-base leading-6 text-gray max-w-[478px]'>
                In-depth insights into visa application assessment
              </h4>
            </div>
            <div className='text_Animation flex items-center gap-3 ps-[10px] pt-[10px]'>
              <div className='w-[8px] h-[8px] rounded-full bg-gray'></div>
              <h4 className='font-lato font-normal max-sm:text-sm text-base leading-6 text-gray max-w-[478px]'>
                Clarification on complex cases and exceptions
              </h4>
            </div>
            <div className='text_Animation flex items-center gap-3 ps-[10px] pt-[10px]'>
              <div className='w-[8px] h-[8px] rounded-full bg-gray'></div>
              <h4 className='font-lato font-normal max-sm:text-sm text-base leading-6 text-gray max-w-[478px]'>
                Nuanced interpretations of immigration laws and regulations
              </h4>
            </div>
          </div>
          <div className='hello_ManTwo w-full lg:w-6/12 px-3 flex max-sm:justify-center max-sm:pt-[56px] max-lg:pt-20'>
            <img src={man_Image} className=' pointer-events-none max-sm:max-w-[261px] max-w-[392px]' alt="man_Image" />
          </div>
        </div>
        <div className='max-w-[1140px] rounded-[8px] border-[1px] border-[#00000029] bg-white p-6 max-sm:p-4'>
          <p className='font-lato font-normal text-base leading-6 text-gray max-w-[1092px]'>
            By basing its knowledge on these official sources, Herbert provides you with accurate, up-to-date, & reliable information on German immigration processes. Our commitment to using these authoritative resources ensures that you receive guidance aligned with current German immigration laws & practices.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Handbook;
