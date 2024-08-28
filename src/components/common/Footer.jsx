import React, { useEffect } from 'react'
import page_Logo from '../../assets/images/svg/pageLogo.svg'
import { FACEBOOK, INSTAGRAM, LINKDIN } from './Icon'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
    useEffect(() => {
        gsap.fromTo(
            '.footerHerbert', {
            duration: 2,
            opacity: 0,
            x: -100,
        }, {
            duration: 2,
            x: 0,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.footerHerbert',
                start: 'top bottom',
                end: 'bottom top',
            }
        }
        )
        gsap.fromTo(
            '.footerFollow', {
            duration: 2,
            opacity: 0,
            x: 100,
        }, {
            duration: 2,
            x: 0,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.footerFollow',
                start: 'top bottom',
                end: 'bottom top',
            }
        }
        )
    }, []);
    const year = new Date().getFullYear()
    return (
        <div className='bg-footerBg'>
            <div className=' container max-w-[1164px] mx-auto px-3 pt-[212px]'>
                <div className=' row flex flex-row flex-wrap -mx-3 pb-[50px] max-sm:pb-[42px]'>
                    <div className='z-20 footerHerbert w-6/12 max-lg:w-full px-3'>
                        <a href=""> <img className=' pointer-events-none max-w-[326px] max-sm:max-w-[210px]' src={page_Logo} alt="page_Logo" /></a>
                        <p className='font-lato font-normal text-base max-sm:text-sm max-sm:leading-5 leading-6 text-gray max-w-[408px] max-sm:pt-3 pt-4'>Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae velit mi sed mattis tempor tristique. Purus sed phasellus metus lectus auctor.</p>
                    </div>
                    <div className='z-20 pt-4 footerHerbert w-2/12 px-3 max-lg:w-4/12 max-sm:w-6/12 max-lg:justify-start max-lg:pt-8 flex justify-center'>
                        <ul>
                            <li><a href="" className=' font-lato font-medium text-base leading-5 text-black opacity-[90%]'>Quick Links</a></li>
                            <li className='pt-4'><a href="" className=' font-lato font-normal text-base leading-6 text-gray  hover:text-black duration-300 ease-linear after:absolute after:bg-black after:h-[3px] after:w-0 after:left-[50%] after:translate-x-[-50%] hover:after:w-[31px] after:bottom-[-5px] after:rounded after:duration-300 after:ease-linear after:mx-auto relative'>Services</a></li>
                            <li className='pt-2'><a href="" className=' font-lato font-normal text-base leading-6 text-gray  hover:text-black duration-300 ease-linear after:absolute after:bg-black after:h-[3px] after:w-0 after:left-[50%] after:translate-x-[-50%] hover:after:w-[31px] after:bottom-[-5px] after:rounded after:duration-300 after:ease-linear after:mx-auto relative'>About Us</a></li>
                            <li className='pt-2'><a href="" className=' font-lato font-normal text-base leading-6 text-gray  hover:text-black duration-300 ease-linear after:absolute after:bg-black after:h-[3px] after:w-0 after:left-[50%] after:translate-x-[-50%] hover:after:w-[31px] after:bottom-[-5px] after:rounded after:duration-300 after:ease-linear after:mx-auto relative'>Features</a></li>
                            <li className='pt-2'><a href="" className=' font-lato font-normal text-base leading-6 text-gray  hover:text-black duration-300 ease-linear after:absolute after:bg-black after:h-[3px] after:w-0 after:left-[50%] after:translate-x-[-50%] hover:after:w-[31px] after:bottom-[-5px] after:rounded after:duration-300 after:ease-linear after:mx-auto relative'>Plans</a></li>
                        </ul>
                    </div>
                    <div className='z-20 pt-4 footerFollow w-2/12 px-3 max-lg:w-4/12 max-sm:w-6/12 max-lg:justify-start max-lg:pt-8 flex justify-center'>
                        <ul>
                            <li><a href="" className=' font-lato font-medium text-base leading-5 text-black opacity-[90%]'>Support</a></li>
                            <li className='pt-4'><a href="" className=' font-lato font-normal text-base leading-6 text-gray  hover:text-black duration-300 ease-linear after:absolute after:bg-black after:h-[3px] after:w-0 after:left-[50%] after:translate-x-[-50%] hover:after:w-[31px] after:bottom-[-5px] after:rounded after:duration-300 after:ease-linear after:mx-auto relative'>Help Center</a></li>
                            <li className='pt-2'><a href="" className=' font-lato font-normal text-base leading-6 text-gray  hover:text-black duration-300 ease-linear after:absolute after:bg-black after:h-[3px] after:w-0 after:left-[50%] after:translate-x-[-50%] hover:after:w-[31px] after:bottom-[-5px] after:rounded after:duration-300 after:ease-linear after:mx-auto relative'>Term & Conditions</a></li>
                            <li className='pt-2'><a href="" className=' font-lato font-normal text-base leading-6 text-gray hover:text-black duration-300 ease-linear after:absolute after:bg-black after:h-[3px] after:w-0 after:left-[50%] after:translate-x-[-50%] hover:after:w-[31px] after:bottom-[-5px] after:rounded after:duration-300 after:ease-linear after:mx-auto relative'>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className='z-20 pt-4 footerFollow w-2/12 px-3 max-lg:w-4/12 max-sm:w-6/12 max-lg:justify-start max-lg:pt-8 flex justify-end'>
                        <div className=' flex flex-col'>
                            <a href="" className='z-20 font-lato font-medium text-base leading-5 text-black opacity-[90%]'>Follow Us</a>
                            <div className='z-20 flex gap-3 pt-4'>
                                <a href="https://www.facebook.com" target='black' className=' hover_Effect custom_Duration'> <FACEBOOK /></a>
                                <a href="https://www.instagram.com" target='black' className=' hover_Effect custom_Duration'> <INSTAGRAM /></a>
                                <a href="https://www.linkedin.com" target='black' className=' hover_Effect custom_Duration'> <LINKDIN /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='z-20 w-full relative h-[1px] bg-[#00000029] '></div>
            <div className='py-4 flex justify-center'>
                <h3 className='z-20 font-lato font-normal text-base max-sm:text-sm leading-6 text-gray '>Copyright © {year} herbert, All rights reserved</h3>
            </div>
        </div>
    )
}
export default Footer
