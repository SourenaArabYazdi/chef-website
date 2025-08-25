import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function BodyTopComponent(){


    return(
        <div className="h-[989.516px] bg-[#374151] text-[#FFFFFF]  space-y-14 lg:flex lg:h-[736.391px] lg:items-center lg:justify-center ">
             
             <div className="lg:h-[416px] lg:min-w-[536px]  lg:mt-20 lg:space-y-3">
                 <div className=" p-2 space-y-4   ">
                     <span className="text-[36px] font-bold flex justify-center items-center ml-5 lg:text-[52px]">Cook anything with the  experts</span>
                     <p className="ml-6 text-gray-300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                     accusantium doloremque laudantium, totam</p>
                 </div>


                 <div className="ml-3 space-y-5 md:flex md:flex-row md:justify-center md:space-x-3  ">
                      <Button className="bg-[#DF6853] text-white min-h-[70px] rounded-full text-[20px] p-7">Lets Cook</Button> <br />
                      <Button className="bg-[#374151] border border-[#DF6853] text-[#DF6853] w-full md:w-[30%] min-h-[70px] text-[20px] rounded-full mt-2 md:mt-0"> Explore now </Button>
                 </div>
             </div>


             <div>
                 <Image src={'/images/logo/banner-image.png'} width={758} height={702} alt="banner" className="lg:w-[1000px] " />
             </div>
        </div>
    )
}