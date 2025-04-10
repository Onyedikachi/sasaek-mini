import React from 'react'

import logo from '../../assets/logo.svg';


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
    <></>
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