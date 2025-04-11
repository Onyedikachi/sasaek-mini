import React from 'react'

import logo from '../../assets/images/logo.svg';
import LogoWhite from '../../assets/images/logo-white.svg';

import BookImage from '../../assets/images/book-image.png';
import HeroImage from '../../assets/images/hero-image.jpg';

import Chairman1 from '../../assets/images/chairman-1.png';
import Chairman2 from '../../assets/images/chairman-2.png';
import Chairman3 from '../../assets/images/chairman-3.png';
import Signature from '../../assets/images/signature.png';
import Activities from '../../assets/images/activities.png';
import AppScreenShot from '../../assets/images/app-screenshot.png';


import HeartIcon from '../../assets/images/heart.svg';
import AppIcon from '../../assets/images/app-icon.svg';
import DownloadIcon from '../../assets/images/download.svg';


import { ArrowRightOutlined, DownOutlined, RightOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import Slider from '../../components/Slider';
import Carousel from '../../components/Carousel';

const HeaderSection = () => {

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Korea
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          China
        </a>
      ),
      // icon: <SmileOutlined />,
      // disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Japan
        </a>
      ),
      // disabled: true,
    },
    {
      key: '4',
      // danger: true,
      label: 'Taiwan',
    },
  ];
  return (
    <div className=' w-full h-full  lg:px-[3.75rem] px-3 py-3 lg:py-11'>
      <div className='flex justify-between  '>
        <div>
          <img src={logo} className='h-6 lg:h-11' alt='logo' />
        </div>
        <div className='hidden lg:flex gap-6 text-xl font-semibold items-center '>
          <a href="/#" className='text-[#8C5947]'>소개</a>
          <a href="/#">소소담담 APP</a>
          <a href="/#">활동</a>

          <Dropdown menu={{ items }} trigger={['click']}>
            <button onClick={e => e.preventDefault()} className='bg-[#4C4C4C] flex items-center px-4 py-1.5 rounded-2xl text-sm text-white gap-2 uppercase'>
              <span>Kor</span>
              <DownOutlined size='10' />
            </button>
          </Dropdown>
        </div>
      </div>
      <div className='w-full h-full pt-5 lg:pt-11 '>
        <Slider />
      </div>
    </div>
  )
}

const CultureSection = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center text-center gap-6 py-6 lg:py-24 font-pretendard'>
      <div className='text-3xl lg:text-7xl font-bold flex flex-col items-center justify-center gap-3 '>
        <div>
          <span>새로운 문화 나눔을 만들어갑니다.</span>
        </div>
        <div className='flex gap-4 items-center'>
          <span>우리는</span>
          <img src={BookImage} alt='book' className='lg:h-[5.875rem] w-[5.4rem] lg:w-[17.5rem] rounded-[6.25rem]' />
        </div>
        <div>
          <span>
            사색의향기입니다.
          </span>
        </div>
      </div>
      <div className=' w-[50ch] lg:w-[60ch] font-normal text-[0.75rem] lg:text-[1.25rem]'>
        <span className=''>
          사색의향기는 문학인들의 커뮤니티로서 “행복한 문화 나눔"을 통한 사회 공헌과 선진적이고
          건전한 사회 문화를 만들어나가기 위해 노력하는 비영리 단체입니다.
        </span>
      </div>

    </div>
  )
}

const ChairmanSection = () => {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-12'>
        <div className='col-span-6 lg:col-span-8 text-left flex flex-col gap-1 lg:gap-2 pl-3 lg:pl-40'>
          <span className='text-bold text-2xl lg:text-6xl text-[#111111] font-gowun-batang'>
            이사장 인사말.
          </span>
          <div className=' text-[0.625rem] lg:text-xl flex flex-col gap-1 pt-3 lg:pt-6'>
            <span>안녕하세요, 사색의향기 이사장 오덕균 입니다.</span>
            <span>사색의향기는 ‘행복한 문화 나눔’을 통해 더 나은 사회를 만들어가고자
              노력해왔습니다. 앞으로도 문학과 인문학의 가치를 공유하며, 열린 커뮤니티로서 함께 성장하겠습니다.</span>
            <span>
              많은 관심과 응원 부탁드립니다. 감사합니다.
            </span>
          </div>
          <div className='flex gap-2 items-center'>
            <span className='text-[#111111] text-[0.6rem] lg:text-2xl font-gowun-batang'>
              사단법인 사색의향기  이사장 오덕균
            </span>
            <img
              src={Signature} alt='signature'
              className='h-[2.5rem] lg:h-[4.9375rem] w-[5.5rem] lg:w-[11.6875rem]'
            />
          </div>
          <div>
            <button className=' cursor-pointer inline-flex gap-1.5 items-center font-[500] text-[0.625rem] lg:text-[1.125rem]'>
              <span>인터뷰 더 보기</span>
              <RightOutlined size={4} />
            </button>
          </div>
        </div>
        <div className='col-span-6 lg:col-span-4 flex flex-col gap-2 pl-10 relative items-end justify-end'>
          <div className='h-[75%] w-full bg-[#D0DEF0] rounded-l-full'>
          </div>
          <img
            src={Chairman1} alt='person 1'
            className='absolute left-[32%] lg:left-[16%] w-[9.875rem] lg:w-[16.875rem] lg:h-[90%] mb-0.5  object-contain scale-x-[-1]'
          />
        </div>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap pt-6 lg:pt-22 gap-6 text-sm lg:text-2xl font-bold w-full items-center justify-center'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <img
            src={Chairman1} alt='person 1'
            className=' rounded-full w-[8.4375rem] h-[8.4375rem] lg:w-[16.875rem] lg:h-[16.875rem] lg:pt-9 bg-contain bg-[#BBBBBB]'
          />
          <span>
            오덕균 이사장
          </span>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <img
            src={Chairman2} alt='person 2'
            className=' rounded-full w-[8.4375rem] h-[8.4375rem] lg:w-[16.875rem] lg:h-[16.875rem] object-scale-down bg-[#BBBBBB]'
          />
          <span>
            정준호 이사
          </span>
        </div>
        <div className='flex flex-col gap-8 items-center justify-center'>
          <img
            src={Chairman3} alt='person 3'
            className=' rounded-full w-[8.4375rem] h-[8.4375rem] lg:w-[16.875rem] lg:h-[16.875rem] pt-9   object-contain scale-x-[-1]   bg-[#BBBBBB]'
          />
          <span>
            권혁준 고문
          </span>
        </div>
      </div>
    </div>
  )
}

const ActivitiesSection = () => {

  return (
    <div className='w-full flex items-center justify-center py-3 lg:py-16'>
      <img
        src={Activities} alt='activities'
        className=' object-contain '
      />
    </div>
  )
}

const DonationSection = () => {
  return (
    <div className='w-full flex flex-col gap-3  justify-center items-center text-center py-6 lg:py-11 bg-[#F8F4F3]'>
      <div>
        <span className=' text-base lg:text-[2.5rem]  font-gowun-batang font-bold'>
          기부를 통해 따뜻한 마음을 보내고 싶다면,
        </span>
      </div>
      <div className='flex flex-col gap-1 font-gowun-batang font-bold'>
        <span>후원계좌 안내</span>
        <span>국민 924501-01-351204 / 사단법인 사색의향기</span>
      </div>
      <div className='flex gap-2 text-xs lg:text-lg'>
        <button
          className='inline-flex items-center gap-2 h-full px-3.5 py-1 border-[#111111] border-[1px] rounded-l-full rounded-r-full'
        >
          <img
            src={HeartIcon} alt='Heart Icon'
            className='w-3 h-3 lg:w-6 lg:h-6'
          />
          <span className=' font-pretendard font-[500]'>정기 후원</span>
        </button>
        <button
          className='inline-flex items-center gap-2 h-full px-3.5 py-1 border-[#111111] border-[1px] rounded-l-full rounded-r-full'
        >
          <span className='font-pretendard font-[500]'>일시 후원</span>
        </button>

      </div>
    </div>
  )
}

const AppSection = () => {
  return (
    <div className='w-full px-3 lg:px-36'>
      <div className='w-full grid grid-cols-12 px-3 lg:px-4 py-6 lg:py-32'>
        <div className='col-span-12 lg:col-span-6 flex flex-col gap-4 lg:gap-8'>
          <div className='w-full flex flex-col gap-2 lg:gap-4'>
            <img src={AppIcon} alt='app icon' className='w-12 lg:w-24 h-12 lg:h-24' />
            <div className='w-[15ch] font-gowun-batang font-bold text-2xl lg:text-6xl text-left'>
              <span>더 나은 세상을
                만들어 가기 위한 노력.</span>
            </div>

          </div>
          <div className='w-full flex flex-col gap-2 text-sm lg:text-lg text-[#4C4C4C] text-left font-pretendard'>
            <span>
              바른 인성과 성품을 고양하며 함께 나누는 활동을 통해 세대와 나라를 초월한 커뮤니티를 만들어나가려고 노력하고 있습니다.
              작은 담소와 삶의 지혜가 필요하신 모든 분들을 환영합니다.
            </span>
            <span>
              삶의 어려운 고충이 있으신 분들에게 작은 도움을 드립니다. 법률적이거나 개인적으로 해결하기 어려운 문제들이 있으시다면 소담 서포터즈에게 도움을 요청해주세요.
            </span>
          </div>
          <div className=' text-xs lg:text-xl flex gap-2 font-bold font-gowun-batang'>
            <span>
              2025. 6. 출시 예정
            </span>
            <span className='text-[#8C5947]'>
              커뮤니티 APP ‘소소담담’
            </span>
          </div>
          <div className='font-pretendard'>
            <button className=' border-[1px] rounded-r-full rounded-l-full px-3.5 py-1 border-[#111111] cursor-pointer inline-flex gap-1.5 items-center font-[500] text-sm lg:text-[1.125rem]'>
              <span>인터뷰 더 보기</span>
              <img
                src={DownloadIcon} alt='download icon'
                className='w-4 h-4  lg:w-6 lg:h-6'
              />
            </button>
          </div>
          <div></div>
        </div>
        <div className='col-span-12 lg:col-span-6 flex justify-center lg:justify-end'>
          <img
            src={AppScreenShot} alt='app screenshot'
            className='h-full max-h-[35rem]'
          />
        </div>
      </div>

    </div>
  )
}
const AppSection2 = () => {
  return (
    <div className='w-full px-3 lg:px-40'>
      <Carousel />
    </div>
  )
}
const Footer = () => {
  return (
    <div className='w-full px-6 lg:px-40 bg-[#222222] py-6 lg:py-20'>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 lg:col-span-8 flex flex-col items-center lg:items-start gap-4 lg:pr-3'>
          <div>
            <img
              src={LogoWhite} alt='logo'
              className='w-[8rem] lg:w-[14.375rem]'
            />
          </div>
          <div className='flex flex-col gap-6 justify-center'>
            <div className='text-base font-pretendard font-semibold text-white flex flex-wrap gap-4'>
              <span className='shrink-0'>개인정보 처리방침</span>
              <span className='shrink-0'>이용약관</span>
              <span className='text-[#7C7C7C] font-normal shrink-0'>고객센터 평일 08:00~19:00 (주말 및 공휴일 휴무)</span>
            </div>
            <div className='flex flex-col gap-2 text-xs text-white'>
              <div className='flex gap-5'>
                <span>사단법인 사색의향기</span>
                <span>
                  <span className='text-[#7C7C7C]'>이사장</span>&nbsp;<span>오덕균</span>
                </span>
                <span>
                  <span className='text-[#7C7C7C]'>고유번호</span>&nbsp;<span>355-82-00129</span>
                </span>
              </div>
              <div className='flex gap-3 flex-wrap'>
                <span className='shrink-0'>
                  <span className='text-[#7C7C7C]'>주소</span>&nbsp;<span>서울시 강남구 테헤란로 19길 28 이림빌딩3층(역삼동)</span>
                </span>
                <span className='shrink-0'>
                  <span className='text-[#7C7C7C]'>전화</span>&nbsp;<span>02-539-5101</span>
                </span>
                <span className='shrink-0'>
                  <span className='text-[#7C7C7C]'>팩스</span>&nbsp;<span>070-8668-5091</span>
                </span>
                <span className='shrink-0'>
                  <span className='text-[#7C7C7C]'>이메일</span>&nbsp;<span>culppy@culppy.com</span>
                </span>
              </div>
              <div>
                <span>Copyright ⓒ 2025 사색의향기. All Rights Reserved</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-12 py-6 lg:pt-0 lg:col-span-4 text-white flex flex-col gap-8'>
          <div className='flex flex-col gap-3 text-left w-full'>
            <span className='font-semibold text-lg lg:text-2xl'>뉴스레터 구독하기</span>
            <span className='text-xs lg:text-base font-normal'>이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을
              빠르게 받아보실 수 있습니다.</span>
          </div>
          <div className='w-full'>
            <button className=' cursor-pointer inline-flex justify-between items-center font-[500] text-xs lg:text-base text-white border-white border-2 rounded-r-full rounded-l-full px-4 py-2  w-full'>
              <span>이메일 구독신청</span>
              <ArrowRightOutlined size={4} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <HeaderSection />
      <CultureSection />
      <ChairmanSection />
      <ActivitiesSection />
      <DonationSection />
      <AppSection />
      <AppSection2 />
      <Footer />
    </>
  )
}

export default Home