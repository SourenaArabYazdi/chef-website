
import {Swiper , SwiperSlide} from 'swiper/react';

import 'swiper/css'
import Image from 'next/image';



export const ChefSlide = () => {


    return(
       <div className='w-[470px] mt-14 flex items-center justify-center sm:w-[570px] '>
          <Swiper
          loop = {true}
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("Slide Change!")}
        onSwiper={(swiper) => console.log(swiper)} className='object-cover'
        
        >
               <SwiperSlide  className='w-[219px] h-[415px] '>

                  <Image src={"/Expert/boyone.svg"}  width={396} height={396} alt='1'/>
                  <h1 className='text-2xl font-bold'>Shoo Thar Mien</h1>
                  <h2 className='text-gray-400'>Junior Chef</h2>
               </SwiperSlide>
               <SwiperSlide  className='w-[219px] h-[415px] '>

              <Image src={"/Expert/boytwo.svg"}  width={396} height={396} alt='1'/>
              <h1 className='text-2xl font-bold'>Shoo Thar Mien</h1>
              <h2 className='text-gray-400'>Senior Chef</h2>
              </SwiperSlide>

              <SwiperSlide  className='w-[219px] h-[415px] '>

                 <Image src={"/Expert/girl.png"}  width={396} height={396} alt='1'/>
                 <h1 className='text-2xl font-bold'>Shoo Thar Mien</h1>
                 <h2 className='text-gray-400'>Senior Chef</h2>
                 </SwiperSlide>
      
   


        </Swiper>
       </div>
    )
}