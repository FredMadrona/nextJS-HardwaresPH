import { useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Image from 'next/image';

const ImageSliderForProduct = ({ images }) => {



  return (
    <div className="relative block border border-black  md:hidden">
     <Image
     src={images}
     height={100}
     width={100}
     alt='productImage'   
     />
    </div>
  );
};

export default ImageSliderForProduct;
