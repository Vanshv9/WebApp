import React,{useState} from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';
import {RxDotFilled} from 'react-icons/rx';

const ImageSlider = () => {
  const slides = [
    {
      url:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title:'Pancake'
    },
    {
      url:'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title:'Burger'
    },
    {
      url:'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
      title:'Pizza'
    },
    {
      url:'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title:'Spagetti'
    },
    {
      url:'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title:'Baguette'
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
      const isFristSlide = currentIndex === 0;
      const newIndex = isFristSlide ? slides.length-1 : currentIndex - 1;
      setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1100px] h-[550px] w-full m-auto my-20 py-15 px-5 relative group'>
      <div 
      className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      style={{ backgroundImage:`url(${slides[currentIndex].url})`}}>
       
      </div>
      {/* leftarrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <AiOutlineArrowLeft onClick={prevSlide} />
      </div>
      {/* rightarrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <AiOutlineArrowRight onClick={nextSlide}/>
      </div>
      <div className='flex justify-center py-2 top-4'>
        {slides.map((slide , slideIndex) => (
          <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
          <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider;
