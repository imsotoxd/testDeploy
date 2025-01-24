declare module 'swiper/react' {
    import { Swiper as SwiperType } from 'swiper';
    import { ReactElement } from 'react';
    
    export const Swiper: React.FC<SwiperType['props']>;
    export const SwiperSlide: React.FC<{ children: ReactElement }>;
  }