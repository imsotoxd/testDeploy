'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function PricingSection() {
  const swiperProps: SwiperOptions = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    modules: [Navigation, Pagination, Scrollbar],
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    }
  };
  return (
    <section id='pricing' className='flex flex-col justify-between items-center'>
      <h3 className='text-3xl text-primary font-bold text-center m-4'>
        Precios de los planes de Stockify
      </h3>

      <div className='flex flex-row items-center justify-center w-full  p-12 sm:pb-32 gap-10'>

      <Swiper {...swiperProps} className='w-full p-4'>
                <SwiperSlide>
                  <>
          <div className='flex flex-col justify-between items-center max-w-[640px] p-8 my-4 bg-white rounded-lg shadow-md w-full h-[540px] border-2 border-primary text-center'>
            <h3 className='font-bold text-primary text-4xl'>Free</h3>
            <h3 className='font-bold text-primary text-5xl'>$0.00</h3>
            <ul className='list-disc list-inside text-left py-12'>
              <li className='text-textPrimary text-2xl'>Un solo usuario</li>
              <li className='text-textPrimary text-2xl'>Visualización de reportes</li>
              <li className='text-textPrimary text-2xl'>Válido por 15 días</li>
            </ul>
          </div>
          <div className="flex justify-center w-full mb-8">
  <button className='px-4 py-2 bg-primary text-white rounded-2xl w-1/2'>
    Adquirir plan
  </button>
</div>                  </>
        </SwiperSlide>
        <SwiperSlide>
          <>
          <div className='flex flex-col justify-between items-center max-w-[640px] p-8 my-4 bg-white rounded-lg shadow-md w-full h-[540px] border-2 border-primary text-center'>
            <h3 className='font-bold text-primary text-4xl'>Standard</h3>
            <h3 className='font-bold text-primary text-5xl'>$20.00</h3>
            <p className='text-textPrimary text-2xl'>Mensual</p>
            <ul className='list-disc list-inside text-left'>
              <li className='text-textPrimary text-2xl'>5 usuarios</li>
              <li className='text-textPrimary text-2xl'>Personalización de Dashboard</li>
              <li className='text-textPrimary text-2xl'>Alertas automáticas</li>
            </ul>
          </div>
          <div className="flex justify-center w-full mb-8">
  <button className='px-4 py-2 bg-primary text-white rounded-2xl w-1/2'>
  Proximamente
  </button>
</div>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
          <div className='flex flex-col justify-between items-center max-w-[640px] p-8 my-4 bg-white rounded-lg shadow-md w-full h-[540px] border-2 border-primary text-center'>
            <h3 className='font-bold text-primary text-4xl'>Profesional</h3>
            <h3 className='font-bold text-primary text-5xl'>$40.00</h3>
            <p className='text-textPrimary text-2xl'>Mensual</p>
            <ul className='list-disc list-inside text-left'>
              <li className='text-textPrimary text-2xl'>10 usuarios</li>
              <li className='text-textPrimary text-2xl'>Personalización de Dashboard</li>
              <li className='text-textPrimary text-2xl'>Alertas automáticas</li>
              <li className='text-textPrimary text-2xl'>Cuentas integradas de pago</li>
            </ul>
          </div>
          <div className="flex justify-center w-full mb-8">
  <button className='px-4 py-2 bg-primary text-white rounded-2xl w-1/2 '>
  Proximamente
  </button>
</div>
          </>
</SwiperSlide>
      </Swiper>
        </div>
    </section>
  );
}

export default PricingSection;