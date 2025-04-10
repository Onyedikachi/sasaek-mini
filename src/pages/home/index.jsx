import React from 'react'

import logo from '../../assets/logo.svg';

const HeaderSection = () => {

  return (
  <div className=' w-full'>
    <div className='flex justify-between'>
      <div>
        <img src={logo} className='h-10' alt='logo' />
        </div>
      <div></div>
    </div>
    <div></div>

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
      <HeaderSection/>
      <CultureSection/>
    </>
  )
}

export default Home