import { useEffect } from 'react';

function ImageContainer() {
  useEffect(() => {
    const images = document.querySelectorAll('.random-image');

    images.forEach((image) => {
      const left = Math.random() * 80;
      const top = Math.random() * 80;

      image.style.left = `${left}%`;
      image.style.top = `${top}%`;
    });
  }, []);

  return (
  <>
        <div className=' w-full h-1/2 flex bg-slate-300 relative'>
          <img className='w-24 h-24 top-32 object-cover overflow-hidden absolute'src="https://img.icons8.com/?size=512&id=78098&format=png" alt="html" />
          <img className='w-24 h-24 object-cover overflow-hidden absolute ' src="https://img.icons8.com/?size=512&id=1044&format=png" alt="css" />
          <img className='w-24 h-24 object-cover overflow-hidden absolute' src="https://img.icons8.com/?size=512&id=108784&format=png" alt="javascript" />
          <img className='w-24 h-24 object-cover overflow-hidden absolute' src="https://img.icons8.com/?size=512&id=8g6WJkjf0vaP&format=png" alt="React" />
          <img className='w-24 h-24 object-cover overflow-hidden absolute' src="https://img.icons8.com/?size=512&id=54087&format=png" alt="Node js" />
          <img className='w-24 h-24 object-cover overflow-hidden absolute' src="https://img.icons8.com/?size=512&id=kg46nzoJrmTR&format=png" alt="Express js" />
          <img className='w-24 h-24 object-cover overflow-hidden absolute' src="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-5-1175140.png?f=avif&w=256" alt="Mongodb " />
          <img className='w-24 h-24 object-cover overflow-hidden absolute' src="https://img.icons8.com/?size=512&id=12599&format=png" alt="typescript " />
          <img className='w-24 h-24 object-cover overflow-hidden absolute' src="https://img.icons8.com/?size=512&id=EXZGX2xYvaYn&format=png" alt="Recoil" />
          <img className='w-24 h-24 object-cover overflow-hidden absolute' src="https://img.icons8.com/?size=512&id=10lIo9AfRXQs&format=png" alt="Github " />
        </div>
        <div>for text</div>
 </>
  );
}

export default ImageContainer