import React from 'react'

import logo from '../../assets/images/logo.svg';
import BookImage from '../../assets/images/book-image.png';
import HeroImage from '../../assets/images/hero-image.jpg';

import Chairman1 from '../../assets/images/chairman-1.png';
import Chairman2 from '../../assets/images/chairman-2.png';
import Chairman3 from '../../assets/images/chairman-3.png';
import Signature from '../../assets/images/signature.png';
import Activities from '../../assets/images/activities.png';



import { DownOutlined, RightOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';

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
    <div className=' w-full h-full px-[3.75rem] py-11'>
      <div className='flex justify-between  '>
        <div>
          <img src={logo} className='h-11' alt='logo' />
        </div>
        <div className='flex gap-6 text-xl font-semibold items-center'>
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
      <div className='w-full h-[53.125rem] pt-11 '>
        <img className='w-full h-max rounded-3xl'
          src={HeroImage}
          // src='https://res.cloudinary.com/noi/image/upload/f_auto,q_auto/pwebcfhpc8v2mokypv1z'
          alt='hero section'
        />
      </div>
    </div>
  )
}

const CultureSection = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center text-center gap-6 py-24'>
      <div className='text-7xl font-bold flex flex-col items-center justify-center gap-3 '>
        <div>
          <span>새로운 문화 나눔을 만들어갑니다.</span>
        </div>
        <div className='flex gap-2 items-center'>
          <span>우리는</span>
          <img src={BookImage} alt='book' className='h-[5.875rem] w-[17.5rem] rounded-[6.25rem]' />
        </div>
        <div>
          <span>
            사색의향기입니다.
          </span>
        </div>
      </div>
      <div className='w-[70ch] font-normal text-[1.25rem]'>
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
        <div className='col-span-8 text-left flex flex-col gap-2 pl-40'>
          <span className='text-bold text-6xl text-[#111111] font-gowun-batang'>
            이사장 인사말.
          </span>
          <div className='text-[#4C4C4C] text-xl flex flex-col gap-1 pt-6'>
            <span>안녕하세요, 사색의향기 이사장 오덕균 입니다.</span>
            <span>사색의향기는 ‘행복한 문화 나눔’을 통해 더 나은 사회를 만들어가고자
              노력해왔습니다. 앞으로도 문학과 인문학의 가치를 공유하며, 열린 커뮤니티로서 함께 성장하겠습니다.</span>
            <span>
              많은 관심과 응원 부탁드립니다. 감사합니다.
            </span>
          </div>
          <div className='flex gap-2 items-center'>
            <span className='text-[#111111] font-gowun-batang'>
              사단법인 사색의향기  이사장 오덕균
            </span>
            <img
              src={Signature} alt='signature'
              className='h-[4.9375rem] w-[11.6875rem]'
            />
          </div>
          <div>
            <button className=' cursor-pointer inline-flex gap-1.5 items-center font-[500] text-[1.125rem]'>
              <span>인터뷰 더 보기</span>
              <RightOutlined size={4} />
            </button>
          </div>
        </div>
        <div className='col-span-4 flex flex-col gap-2 pl10 relative items-end justify-end'>
          <div className='h-[75%] w-full bg-[#D0DEF0] rounded-l-full'>
          </div>
          <img
            src={Chairman1} alt='person 1'
            className='absolute left-[16%] w-[16.875rem] h-[90%] mb-0.5  object-contain scale-x-[-1]'
          />
        </div>
      </div>
      <div className='flex pt-22 gap-6 text-2xl font-bold w-full items-center justify-center'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <img
            src={Chairman1} alt='person 1'
            className=' rounded-full w-[16.875rem] h-[16.875rem] pt-9 bg-contain bg-[#BBBBBB]'
          />
          <span>
            오덕균 이사장
          </span>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <img
            src={Chairman2} alt='person 2'
            className=' rounded-full w-[16.875rem] h-[16.875rem] object-scale-down bg-[#BBBBBB]'
          />
          <span>
            정준호 이사
          </span>
        </div>
        <div className='flex flex-col gap-8 items-center justify-center'>
          <img
            src={Chairman3} alt='person 3'
            className=' rounded-full w-[16.875rem] h-[16.875rem] pt-9   object-contain scale-x-[-1]   bg-[#BBBBBB]'
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
    <div className='w-full flex items-center justify-center py-16'>
      <img 
        src={Activities} alt='activities'
        className=' object-contain '
      />
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
    </>
  )
}

export default Home