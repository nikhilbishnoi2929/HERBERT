import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/svg/herberLogo.svg';
import COMMON_BUTTON from '../common/Commonbtn';
import { NAVBAR_LOGO } from '../common/Icon';
import plusCircle from '../../assets/images/svg/plusCircle.svg';
import { HERO_TEXT } from './Helper';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    gsap.fromTo(
      '.head',
      { y: -50, opacity: 0, duration: 0.5, },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
        delay: 0.3,
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.head',
          start: 'top center',
          end: 'bottom 50%',
        },
      }
    );
    gsap.fromTo(
      '.logo',
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
        scrollTrigger: {
          trigger: '.logo',
          start: 'top 20%',
          end: 'bottom 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    document.body.style.overflow = data ? 'hidden' : 'visible';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [data]);
  const VIEW = () => {
    setData(prevData => !prevData);
  };
  return (
    <div>
      <div className='container max-w-[1164px] mx-auto px-3'>
        <nav>
          <div className='py-[23px] max-md:py-[14px] flex justify-between items-center'>
            <img className='z-[100] cursor-pointer max-sm:max-w-[117px] logo' src={logo} alt="logo" />
            <div className={`flex items-center ${data ? 'right-0' : 'right-[-100%]'} items-center text-center justify-between z-[50] max-md:fixed max-md:bg-white max-md:w-full max-md:h-full
             max-xl:top-0 max-md:flex-col max-md:justify-start max-md:pt-[108px] duration-300`}>
              <ul className='flex w-full max-md:px-[24px] gap-11 max-md:gap-6 text-center items-center z-[50] max-md:flex-col max-md:justify-center'>
                {HERO_TEXT.map((obj, index) => (
                  <li className='head max-md:border-b max-md:border-[#00000029] max-md:pb-6 flex w-full justify-center max-w-[327px]' key={index}>
                    <Link
                      to={obj.path}
                      onClick={() => setData(false)}
                      className='font-lato text-nowrap font-normal text-base leading-6 text-gray sm:text-base sm:leading-6 hover:text-black duration-300 ease-linear after:absolute after:bg-black after:h-[3px] after:w-0 after:left-[50%]
                       after:translate-x-[-50%] hover:after:w-[31px] after:bottom-[-5px] after:rounded after:duration-300 after:ease-linear after:mx-auto relative'
                    >
                      {obj.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='flex md:hidden justify-center pt-8'>
                <COMMON_BUTTON className='md:hidden' text={"Start your conversation with Herbert"} />
              </div>
            </div>
            <div onClick={VIEW} className="md:hidden cursor-pointer block z-50">
              <span className='block'>
                {data ? <img src={plusCircle} alt="Close Menu" /> : <NAVBAR_LOGO />}
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Hero;
