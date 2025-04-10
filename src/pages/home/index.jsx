import React from 'react'

import logo from '../../assets/logo.svg';
import BookImage from '../../assets/book-image.png';


import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

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
      <div className='w-full h-full pt-11'>
        <img className='w-full h-max'
          src='https://res.cloudinary.com/noi/image/upload/f_auto,q_auto/pwebcfhpc8v2mokypv1z'
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

const Home = () => {
  return (
    <>
      <HeaderSection />
      <CultureSection />
    </>
  )
}

export default Home