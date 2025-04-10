import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

import AppOne from '../assets/images/app-one.png';
import AppTwo from '../assets/images/app-two.png';
import AppThree from '../assets/images/app-three.png';
import AppFour from '../assets/images/app-four.png';


export default function Carousel() {
    useEffect(() => {
        const slider = new Glide(".glide-05", {
            type: "carousel",
            focusAt: "center",
            perView: 3,
            autoplay: 3500,
            animationDuration: 700,
            gap: 24,
            classNames: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])

    return (
        <>
            {/*<!-- Component: Carousel with controls outside --> */}
            <div className="w-full grid grid-cols-12 glide-05 pb-3 lg:pb-32">
                {/*    <!-- Controls --> */}
                <div className="col-span-12 lg:col-span-3 flex flex-col lg:justify-between items-center pt-3 lg:pt-10">
                    <div className="font-gowun-batang font-bold text-3xl lg:text-6xl text-left">
                        <span>
                            함께하는
                            이들
                        </span>
                    </div>
                    <div
                        className="flex w-full items-center justify-center lg:justify-left gap-2 p-2 lg:p-4"
                        data-glide-el="controls"
                    >   
                        <button
                            className="inline-flex h-8 w-8 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-slate-700 bg-[#111111] text-white transition duration-300 hover:border-slate-900 hover:bg-white hover:text-[#111111] focus-visible:outline-none "
                            data-glide-dir="<"
                            aria-label="prev slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-3 lg:h-5 w-3 lg:w-5 "
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
                            className="inline-flex h-8 w-8 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-slate-700 bg-[#111111] text-white transition duration-300 hover:border-slate-900 hover:bg-white hover:text-[#111111] focus-visible:outline-none"
                            data-glide-dir=">"
                            aria-label="next slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-3 lg:h-5 w-3 lg:w-5 "

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

                <div className=" col-span-12 lg:col-span-9 relative w-full">
                    {/*    <!-- Slides --> */}
                    <div className="overflow-hidden" data-glide-el="track">
                        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 font-pretendard ">
                            <li className="w-[9rem] lg:w-[19.25rem] h-[10.5rem] lg:h-[20.625rem] flex flex-col justify-between pt-4 lg:pt-10">
                                <img
                                    src={AppOne}
                                    alt="app one"
                                    className="w-15 lg:w-20 mx-auto"
                                />
                                <span className="flex flex-col text-center">
                                    <span className=" font-semibold text-sm lg:text-2xl">
                                        (주)행복한사람들
                                    </span>
                                    <span className="text-xs lg:text-lg font-normal">
                                        행복한 날, 행복한 사람들과 함께하는 특별한 날을 선사합니다.
                                    </span>
                                </span>
                            </li>
                            <li className="w-[9rem] lg:w-[19.25rem] h-[10.5rem] lg:h-[20.625rem] flex flex-col justify-between">
                                <img
                                    src={AppTwo}
                                    alt="app two"
                                    className="m-auto w-[4rem] lg:w-[6.5rem]"
                                />
                                <span className="flex flex-col text-center">
                                    <span className=" font-semibold text-sm lg:text-2xl">
                                        바른댓글 실천연대
                                    </span>
                                    <span className="text-xs lg:text-lg font-normal">
                                        바른댓글 정착으로 아름다운 사회를 만들어갑니다.
                                    </span>
                                </span>
                            </li>
                            <li className="w-[9rem] lg:w-[19.25rem] h-[10.5rem] lg:h-[20.625rem] flex flex-col justify-between">
                                <img
                                    src={AppThree}
                                    alt="app three"
                                    className="m-auto w-30 lg:w-40"
                                />
                                <span className="flex flex-col text-center">
                                    <span className=" font-semibold text-sm lg:text-2xl">
                                        아트리안
                                    </span>
                                    <span className="text-xs lg:text-lg font-normal">
                                        생활미술시장의 뉴 패러다임을 제안하는 상설 아트갤러리 프로젝트.
                                    </span>
                                </span>
                            </li>
                            <li className="w-[9rem] lg:w-[19.25rem] h-[10.5rem] lg:h-[20.625rem] flex flex-col justify-between">
                                <img
                                    src={AppFour}
                                    alt="app four"
                                    className="m-auto w-[8rem] lg:w-[13.75rem]"
                                />
                                <span className="flex flex-col text-center">
                                    <span className=" font-semibold text-sm lg:text-2xl">
                                        대한민국위멘위원회
                                    </span>
                                    <span className="text-xs lg:text-lg font-normal">
                                        어린이를 위한 위대한 멘토, 위멘이
                                        함께 합니다.
                                    </span>
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>

            {/*<!-- End Carousel with controls outside --> */}
        </>
    )
}