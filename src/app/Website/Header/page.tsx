import Image from "next/image"
import Link from "next/link"
import { FaPhoneAlt } from "react-icons/fa";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { IoIosMore } from "react-icons/io";
import { Button } from "@/components/ui/button";

export default function HeaderPage(){


    return(
        <div className=" h-[144px] bg-[#374151] flex  items-center justify-between lg:sticky lg:top-0 lg:z-50">
            <div className="w-[225.625px] h-[64px]  flex flex-row items-center justify-beetwen ">
                 <span>
                     <Image src={'/Images/logo/Logo.svg'} width={56} height={56} alt="logo"  className="w-[56px] h-[56px]"/>
                 </span>
                 <span className="text-[#FFFFFF] ml-3 text-[24px] ">
                     <Link href={'/Website'} className=""> 
                        Chef's <br className="md:hidden" />
                         Kitchen
                       </Link>
                 </span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8 text-[#FFFFFF] text-lg lg:space-x-10 xl:space-x-15 2xl:space-x-20">
                <Link href={'#home'}>Home</Link>
                <Link href={'#about'}>About Us</Link>
                <Link href={'#recipe'}>Recepie</Link>
                <Link href={'#gallery'}>Gallery</Link>
            </nav>

            <div className="flex items-center justify-between">
                  
                     <span className="w-[171px] h-[58px] flex flex-row  items-center justify-between text-[#FFFFFF] text-xl mr-8 "> 
                        <FaPhoneAlt className="w-auto h-[30px] text-[#DF6853] mb-6 " />
                          <span className="ml-2 "> +1(909) 235-9814 </span>
                     </span>


                     <span>
                        
                     </span>

                
                  <div className="lg:hidden">
                      
                        <Sheet >
                             <SheetTrigger className="w-[40px] h-[34px]"> <IoIosMore  className="text-white mr-2 cursor-pointer" size={34} /> </SheetTrigger>

                             <SheetContent className="bg-[#374151] space-y-2  ">
                                 <SheetHeader className="flex flex-row items-center mb-4 ">
                                     <SheetTitle className="flex space-x-4 items-center ">
                                     <span>
                                             <Image src={'/Images/logo/Logo.svg'} width={56} height={56} alt="logo"  className=""/>
                                         </span>
                                         <span className="text-[#FFFFFF] ml-3 text-[24px] ">
                                             <Link href={'/Website'}> 
                                                Chef's 
                                                 Kitchen
                                               </Link>
                                         </span>
                                     </SheetTitle>
                                 </SheetHeader>

                                 <div className="text-white ml-3 text-xl">
                                   <Link href={'#home'}>
                                     Home
                                    </Link>
                                 </div>

                                 <div className="text-white ml-3 text-xl">
                                   <Link href={'#about'}>
                                     About Us
                                    </Link>
                                 </div>

                                 <div className="text-white ml-3 text-xl">
                                   <Link href={'#recipe'}>
                                     Recepie
                                    </Link>
                                 </div>

                                  <div className="text-white ml-3 text-xl">
                                   <Link href={'#gallery'}>
                                     Gallery
                                    </Link>
                                 </div>


                                  <div className="flex flex-col  space-y-4 p-2 ">
                                      <Button className="bg-[#374151] border border-[#DF6853] text-[#DF6853]">
                                         Sign In
                                      </Button>

                                      <Button className="bg-[#DF6853] text-white">
                                         Sign Up
                                      </Button>

                                  </div>
                             </SheetContent>
                        </Sheet>


                  </div>
            </div>
          
        </div>
    )
}