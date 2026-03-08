import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface CarouselProps {
  children: React.ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  effect?: 'slide' | 'coverflow';
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  slidesPerView = 3,
  spaceBetween = 30,
  autoplay = true,
  navigation = true,
  pagination = true,
  effect = 'slide',
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`carousel-container ${className}`}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={navigation}
        pagination={pagination ? { clickable: true } : false}
        autoplay={autoplay ? {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        } : false}
        effect={effect}
        coverflowEffect={effect === 'coverflow' ? {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        } : undefined}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: Math.min(2, slidesPerView),
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: slidesPerView,
            spaceBetween: spaceBetween,
          },
        }}
        className="professional-swiper"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {child}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .professional-swiper {
          padding: 20px 0 60px 0;
        }
        
        .professional-swiper .swiper-button-next,
        .professional-swiper .swiper-button-prev {
          color: #2563eb;
          background: rgba(255, 255, 255, 0.9);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .professional-swiper .swiper-button-next:hover,
        .professional-swiper .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .professional-swiper .swiper-button-next::after,
        .professional-swiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }
        
        .professional-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }
        
        .professional-swiper .swiper-pagination-bullet-active {
          background: #2563eb;
          transform: scale(1.2);
        }
        
        .dark .professional-swiper .swiper-button-next,
        .dark .professional-swiper .swiper-button-prev {
          color: #60a5fa;
          background: rgba(31, 41, 55, 0.9);
        }
        
        .dark .professional-swiper .swiper-button-next:hover,
        .dark .professional-swiper .swiper-button-prev:hover {
          background: rgba(31, 41, 55, 1);
        }
        
        .dark .professional-swiper .swiper-pagination-bullet {
          background: #4b5563;
        }
        
        .dark .professional-swiper .swiper-pagination-bullet-active {
          background: #60a5fa;
        }
      `}</style>
    </motion.div>
  );
};

export default Carousel;