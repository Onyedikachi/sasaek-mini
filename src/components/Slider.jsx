import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

import HeroImage from '../assets/images/hero-image.jpg';
import LineImage from '../assets/images/line.svg';

export default function Slider() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-black",
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Slider with controls inside --> */}
      <div className="relative w-full glide-01">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 gap-4">
            <li className="relative">
              <div className="w-full bg-gradient-to-t  from-gray-300  to-gray-300  rounded-4xl ">
                <img className='w-full max-w-full max-h-[12rem] lg:max-h-[35rem] xl:max-h-[36rem]  2xl:max-h-[56rem]  rounded-4xl  mix-blend-darken object-fill'
                  src={HeroImage}
                  alt='hero section'
                />
              </div>
              <span className="absolute  w-full flex flex-col text-white gap-2 lg:gap-6 text-center items-center justify-center font-gowun-batang font-bold top-1/3 lg:top-1/5 z-[100]">
                <span className="text-xs lg:text-[2rem]">특별한 나눔</span>
                <span>
                  <img
                    src={LineImage} alt="line"
                    className="w-6 lg:w-10"
                  />
                </span>
                <span className="text-xl lg:text-7xl">
                  함께하는 마음이 만드는 소중한 변화
                </span>
                <span className="text-sm lg:text-2xl font-normal">
                  즐거움과 나눔이 있는 감동의 순간
                </span>
              </span>
            </li>
            <li>
              <img
                alt="slide 1"
                src="https://Tailwindmix.b-cdn.net/image-01.jpg"
                className="w-full max-w-full max-h-full m-auto rounded-4xl"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute right-0 bottom-0 flex gap-4 items-center justify-between px-3 lg:px-6 py-2 bg-white  rounded-tl-2xl  "
        >
          <div
            className="flex items-center justify-center w-full gap-3"
          >
            <span className="">1</span>
            <div
              className="flex items-center justify-center w-full gap-0"
              data-glide-el="controls[nav]"
            >
              <button
                className=" group border-0 border-none"
                data-glide-dir="=0"
                aria-label="goto slide 1"
              >
                <span className="block  transition-colors duration-300 h-[1px] w-4 bg-gray-200 focus:outline-none"></span>
              </button>
              <button
                className=" group border-0 border-none"
                data-glide-dir="=1"
                aria-label="goto slide 2"
              >
                <span className="block h-[1px] w-4 transition-colors duration-300 rounded-full bg-gray-200  focus:outline-none"></span>
              </button>
            </div>
            <span className="">2</span>
          </div>
          <div className="flex gap-3"
            data-glide-el="controls"
          >
            <button
              className="inline-flex items-center justify-center w-5 h-5 lg:h-12 lg:w-12 transition duration-300 border rounded-full border-slate-700 bg-[#111111] text-white hover:text-slate-700 hover:border-slate-900 hover:bg-white focus-visible:outline-none "
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3 lg:w-5 lg:h-5"
                
              >
                <title>prev slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              className="inline-flex items-center justify-center w-5 h-5 lg:h-12 lg:w-12 transition duration-300 border rounded-full border-slate-700 bg-[#111111] text-white hover:text-slate-700 hover:border-slate-900 hover:bg-white focus-visible:outline-none "
              data-glide-dir=">"
              aria-label="next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3 lg:w-5 lg:h-5"
              >
                <title>next slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div >
      {/*<!-- End Slider with controls inside --> */}
    </>
  )
}
