import React from 'react'
import benefitsImg from '../../../public/assets/landing/benefits-img.jpg'

function BenefitsSection() {
  return (
    <section id='benefits' className='flex flex-col md:flex-row justify-between items-center'>
      <div className='flex flex-col items-start justify-center w-full md:w-1/2  p-4 sm:pb-32 gap-10' >
        <h3 className='text-3xl text-primary font-bold text-center m-4'>Beneficios de la gestión de stock y precios de Stockify </h3>

          <p className='text-center text-textPrimary'>Con Stockify, toda la información sobre tus productos está organizada en una única plataforma accesible, lo que reduce el desorden y mejora la eficiencia operativa.</p>
      </div>

        <div className='w-[350px] h-[450px] relative md:w-[500px] md:h-[600px]'>
          <img src={benefitsImg.src} alt="Imagen Beneficios"
            className="object-cover w-full h-full rounded-bl-3xl rounded-tl-3xl"
          />
      </div>
    </section>
  )
}

export default BenefitsSection
