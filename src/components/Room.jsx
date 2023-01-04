import React from 'react'

const Room = () => {
  return (
    <div className='max-w-[1100px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='font-bold text-2xl'>Fine Interior Rooms</h3>
        <p className='pt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima, aperiam fugit obcaecati aliquam accusamus!</p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img className='object-cover w-full h-[300px]' src='https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' /> 
        <img className='object-cover w-full h-[300px]' src='https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' />
        <img className='object-cover w-full h-[300px]' src='https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' />
        <img className='object-cover w-full h-[300px]' src='https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&w=800' alt='/' />
      </div>
      
    </div>
  )
}

export default Room;
