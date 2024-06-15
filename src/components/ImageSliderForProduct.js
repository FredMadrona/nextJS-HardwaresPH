import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const ImageSliderForProduct = ({ images }) => {
   const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
  <>
    {domLoaded && (
        <div className="md:hidden w-full  mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={images}
              alt="Product Image"
              height={500}
              width={500}
              className="mx-auto"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={images}
              alt="Product Image"
              height={500}
              width={500}
              className="mx-auto"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={images}
              alt="Product Image"
              height={500}
              width={500}
              className="mx-auto"
            ></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    )}
  </>
  );
};

export default ImageSliderForProduct;
