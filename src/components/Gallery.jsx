import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import images from '../data/GalleryImage';

function Gallery() {
   useEffect(() => {
            AOS.init({duration : 1000});
          }, [])
  return (
    <div id="gallery" className="flex mb-20 flex-col items-center gap-5 mt-[80px]">
      <h1 className="md:text-4xl text-2xl font-bold font-serif">
        <span className="text-yellow-700">Our</span> Gallery
      </h1>
      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="overflow-hidden w-full px-5">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={5} // عرض 4 شرائح افتراضيًا
          breakpoints={{
            320: { slidesPerView: 1 },  // على الشاشات الصغيرة: شريحة واحدة
            640: { slidesPerView: 2 },  // على الشاشات المتوسطة: شريحتان
            1024: { slidesPerView: 4 }, // على الشاشات الكبيرة: 4 شرائح
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
         
          {images.map((image , index) => (
            <SwiperSlide key={index}>
              <img
                src= {image.img}
                className="w-[200px] h-[200px] object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Gallery;
