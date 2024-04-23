import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.sass';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

export default function Slider({ data }) {
  const navigate = useNavigate();

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="swiper__text-container">
                <button
                  type="button"
                  className="swiper__website-button"
                  onClick={() => navigate('one', { replace: false })}
                >
                  Сайты
                </button>
                <h2 className="swiper__title">{item.title}</h2>
                <p className="swiper__description">{item.description}</p>
                {item.date && <p className="swiper__date">{item.date}</p>}
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="swiper__image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
