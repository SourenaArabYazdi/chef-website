import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";


export default function BodyBottom(){



    return(
        <div className="h-[2457.33px] bg-[#000000] text-[#FFFFFF] flex flex-col items-center  ">

          
             <div className="flex flex-col items-center justify-center mt-19 ">
                 <h2 className="text-[#DF6853] text-[24px]   ">OUR GALLERY</h2>
                 <h1 className="text-[32px] text-[#FFFFFF] font-bold">Gallery of our cooked food. </h1>
             </div>
        

           
               <div className="relative w-[436px] overflow-hidden group">
                 <Image src={"/Gallery/foodone.jpg"} width={436} height={844} alt="foodone" className="rounded-2xl mt-14 object-cover w-full h-full" />
                 <div className="absolute inset-0 bg-black  opacity-50 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 
                  to-transparent  transform  translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-600">

                 </div>
               </div>




               <Image src={"/Gallery/foodtwo.jpg"} width={436} height={844} alt="foodone" className="rounded-2xl mt-8" />
               <Image src={"/Gallery/foodthree.jpg"} width={436} height={844} alt="foodone" className="rounded-2xl mt-8" />
               <Image src={"/Gallery/foodfour.jpg"} width={436} height={844} alt="foodone" className="rounded-2xl mt-8" />



               <div className="bg-[#DF6853] text-[#FFFFFF] h-[292px] mt-30 w-full rounded-tr-full flex space-y-3 items-center flex-col  ">
                   <h3 className="text-xl mr-71 mt-3">NEWSLETTER</h3>
                   <h3 className="text-3xl font-bold mr-49 mb-3 ">Subscribe our  <br /> newsletter</h3>

                   <div className="flex items-centerrounded-full bg-[#3B3B3B] p-2 flex-row justify-center items-center mr-32 rounded-full space-x-2">
                      <Input placeholder="@ enter your email address" className="bg-[#3B3B3B] p-2 focus:ring-0 focus:outline-none border-none w-[80%] rounded-full h-[60px] "  />
                      <Button className="rounded-full  cursor-pointer ">
                        <FaArrowRight />
                      </Button>
                   </div>

               </div>
            
          
        </div>
    )
}