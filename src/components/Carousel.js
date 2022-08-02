import React, { useRef } from 'react';
import './style.css';

function Carousel({images}) {
  const carousel = useRef(null);

  const handleLeft = (e) => {
    e.preventDefault();
    
    carousel.current.scrollLeft -= carousel.current.offsetWidth; 
  }

  const handleRigth = (e) => {
    e.preventDefault();
    
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <div>
      <div className='carousel' ref={ carousel }>
        {
          images.map((image) => (
            <div className='item'>
              <img src={ image } alt="a..."/>
            </div>
          ))
        }
      </div>
      <div className='buttons'>
        <button
          className='button'
          onClick={ handleLeft }
        >
          { '<' }
        </button>
        <button
          className='button'
          onClick={ handleRigth }
        >
          { '>' }
        </button>
      </div>
      </div>
  )
}

export default Carousel;
