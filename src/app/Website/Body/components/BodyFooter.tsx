import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";



export default function BodyFooter(){




    return(

        <div className="h-[1049px] bg-[#000000] text-[#FFFFFF] ">

              <div className="flex flex-row items-center space-x-4 ml-2 mt-20">

                  <Image src={"/Images/logo/Logo.svg"} height={56} width={56} alt="logo" />
                  <h1 className="text-2xl font-bold">Chef's Kitchen</h1> 
                 
              </div>
              <p className="text-gray-400 text-xs mt-3 p-2 ml-1">Open an account in minutes, <br /> get
              full financial control for much longer.</p>


              <div className="space-x-5  mt-10 p-2 ml-1 ">
                  <Button className="bg-[#FFFFFF] text-[#000000] rounded-full hover:bg-[#DF6853] hover:text-[#FFFFFF] cursor-pointer " >
                    <FaFacebookF className="" />

                  </Button>

                   <Button className="bg-[#FFFFFF] text-[#000000] rounded-full  hover:bg-[#DF6853] hover:text-[#FFFFFF] cursor-pointer ">

                    <FaInstagram />

                  </Button>

                  <Button className="bg-[#FFFFFF] text-[#000000] rounded-full  hover:bg-[#DF6853] hover:text-[#FFFFFF] cursor-pointer ">
                     
                     <FaXTwitter />

                  </Button>        
              </div>


              <div className="grid grid-rows-2 grid-cols-2  mt-4">
                  

                   <div className="grid grid-cols-1 grid-rows-5 space-y-5 p-5 " >
                    <h1 className="font-bold text-xl  ">Company</h1>

                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100 ">About</Link>
                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100">Careers</Link>
                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100">Mobile</Link>
                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100">Blog</Link>
                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100">How we work ?</Link>

                   </div>

                   <div className="grid grid-cols-1 grid-rows-5 space-y-5 p-5 " >
                    <h1 className="font-bold text-xl  ">Information</h1>

                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100 ">Help/FAQ</Link>
                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100">Press</Link>
                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100">Affiliates</Link>
                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100">Hotel owners</Link>
                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100">Partners</Link>

                   </div>

                   <div className="grid grid-cols-1 grid-rows-5 space-y-5 p-5 " >
                    <h1 className="font-bold text-xl  ">More</h1>

                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100 ">Home</Link>
                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100">About Us</Link>
                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100">Recepie</Link>
                       <Link href={"#"} className="text-gray-400 hover:text-[#DF6853] transition-colors duration-100">Gallery</Link>
                       

                   </div>
              </div>


                <div className="border-t border-gray-600 w-[95%] flex ml-3 mt-10" />


                <p className="text-xs text-gray-400 p-5 mt-2">
                @2025 - Chef's kitchen. Distributed By <br /> ThemeWagon and Developed by <br /> GetNextjsTemplates & SourenaArabYazdi
                </p>

               
               
            
        </div>
    )
}