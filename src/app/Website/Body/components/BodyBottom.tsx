import Image from "next/image";


export default function BodyFooter(){



    return(
        <div className="h-[2257.33px] bg-[#000000] text-[#FFFFFF] flex flex-col items-center ">

          
             <div className="flex flex-col items-center justify-center mt-19 ">
                 <h2 className="text-[#DF6853] text-[24px]   ">OUR GALLERY</h2>
                 <h1 className="text-[32px] text-[#FFFFFF] font-bold">Gallery of our cooked food. </h1>
             </div>
        

           
               <Image src={"/Gallery/foodone.jpg"} width={436} height={844} alt="foodone" className="rounded-2xl mt-14" />
               <Image src={"/Gallery/foodtwo.jpg"} width={436} height={844} alt="foodone" className="rounded-2xl mt-8" />
               <Image src={"/Gallery/foodthree.jpg"} width={436} height={844} alt="foodone" className="rounded-2xl mt-8" />
               <Image src={"/Gallery/foodfour.jpg"} width={436} height={844} alt="foodone" className="rounded-2xl mt-8" />
            
          
        </div>
    )
}