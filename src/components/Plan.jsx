import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] px-4 py-16 m-auto grid lg:grid-cols-2 gap-4'>
      {/* left side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' />
        <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' />
        <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' />
        <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/3355732/pexels-photo-3355732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' />
        <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/127160/pexels-photo-127160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' />
      </div>
      {/* right side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='font-bold text-4xl md:text-6xl'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p className='pb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dicta nihil sapiente numquam, ea fugiat.</p>
        <div>
      <button className='border-black mr-4 hover:bg-black hover:text-white hover:shadow-xl'>Learn More</button>
      <button className='border-black mr-4 bg-black text-white hover:shadow-xl'>Book Your Trip</button>
     </div>
      </div>
    </div>
  )
}

export default Plan;
