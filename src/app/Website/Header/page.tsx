import Image from "next/image"
import Link from "next/link"
import { FaPhoneAlt } from "react-icons/fa";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function HeaderPage(){


    return(
        <div className=" h-[144px] bg-[#374151]">
            <div className="w-[225.625px] h-[64px] border flex flex-row items-center justify-beetwen ">
                 <span>
                     <Image src={'/Images/logo/Logo.svg'} width={56} height={56} alt="logo"  className="w-[56px] h-[56px]"/>
                 </span>
                 <span className="text-[#FFFFFF] ml-3 text-[24px] ">
                     <Link href={'/Website'}> 
                        Chef's <br />
                         Kitchen
                       </Link>
                 </span>
            </div>

            <div>
                  
                     <span className="w-[171px] h-[58px] flex flex-row border items-center justify-between text-[#FFFFFF] text-xl "> 
                        <FaPhoneAlt className="w-auto h-[30px] text-[#DF6853] mb-6 " />
                          <span className="ml-2"> +1(909) 235-9814 </span>
                     </span>

                
                  <div className="">
                      
                        <Sheet>
                             <SheetTrigger> 
                                 
                             </SheetTrigger>
                        </Sheet>


                  </div>
            </div>
          
        </div>
    )
}