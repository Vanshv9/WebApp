import React from 'react'

const Front = () => {
  return (
    <div className='w-full h-screen '>
      <img 
      className='top-0 left-0 w-full h-screen object-cover'
       src='https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
      <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
          <div className='md: left-{10%} max-w-{1100px} m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
          <p className='max-w-{600px} drop-shadow-2xl py-2 text-xl'>My Beaches Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis, corrupti earum eos, dolorum possimus officia quibusdam vero iste voluptas facere. </p>
          <button className='bg-white text-black cursor-pointer'>Reserve Now</button>
          </div>
        </div>
    </div>
  )
}

export default Front;
