"use client"


import { ChefSlide } from "../SwiperSlider/Chef'sSlider"


export default function BodyMid3Component(){



    return(
        <div className="h-[731px] bg-[#21100C] text-[#FFFFFF] lg:h-[831px]">

            <div className="flex flex-col items-center mt-19 space-y-3">
                 <h1 className="text-[#DF6853] text-3xl ">EXPERCT CHEFS</h1>
                 <h2 className="text-[30px] font-bold">Let's meet the expert</h2>

             
                 < ChefSlide />
              
             
            </div>

        </div>
    )
}