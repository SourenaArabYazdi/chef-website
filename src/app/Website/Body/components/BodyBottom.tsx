

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function BodyBottom() {
    return (
        <div className="bg-[#000000] text-[#FFFFFF] flex flex-col items-center pb-0">
            {/* Gallery Section */}
            <div className="w-full max-w-7xl mx-auto px-4 md:space-y-22 ">
                {/* Gallery Header */}
                <div className="flex flex-col items-center justify-center py-12">
                    <h2 className="text-[#DF6853] text-[24px] mb-2">OUR GALLERY</h2>
                    <h1 className="text-[32px] text-[#FFFFFF] font-bold text-center">Gallery of our cooked food.</h1>
                </div>

              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-0 ">
                    {/* Food Item 1 */}
                    <div className="relative w-full overflow-hidden group md:h-[461px]">
                        <Image 
                            src={"/Gallery/foodone.jpg"} 
                            width={436} 
                            height={844} 
                            alt="Caesar Salad" 
                            className="rounded-2xl object-cover w-full h-full" 
                        />
                        <div className="absolute inset-0 bg-black opacity-70 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-600 space-y-2">
                            <h1 className="text-2xl">Name : Caesar Salad (187kcal)</h1>
                            <h1 className="font-bold text-2xl">Price: <span className="font-normal">$35</span></h1>
                            <Button className="bg-[#DF6853] text-[#FFFFFF]">
                                Learn More
                            </Button>
                        </div>
                    </div>

                   
                    <div className="relative w-full overflow-hidden group md:h-[216px]">
                        <Image 
                            src={"/Gallery/foodtwo.jpg"} 
                            width={436} 
                            height={844} 
                            alt="Christmas Salad" 
                            className="rounded-2xl object-cover w-full h-full" 
                        />
                        <div className="absolute inset-0 bg-black opacity-70 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-600 space-y-2">
                            <h1 className="text-2xl">Name : Christmas Salad (118kcal)</h1>
                            <h1 className="font-bold text-2xl">Price: <span className="font-normal">$17</span></h1>
                            <Button className="bg-[#DF6853] text-[#FFFFFF]">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Food Item 3 */}
                    <div className="relative w-full overflow-hidden group md:h-[231px]">
                        <Image 
                            src={"/Gallery/foodthree.jpg"} 
                            width={436} 
                            height={844} 
                            alt="Sauteed mushrooms" 
                            className="rounded-2xl object-cover w-full h-full" 
                        />
                        <div className="absolute inset-0 bg-black opacity-70 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-600 space-y-2">
                            <h1 className="text-2xl">Name : Sauteed mushrooms with pumpkin and sweet pepper(238 kcal)</h1>
                            <h1 className="font-bold text-2xl">Price: <span className="font-normal">$45</span></h1>
                            <Button className="bg-[#DF6853] text-[#FFFFFF]">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Food Item 4 */}
                    <div className="relative w-full overflow-hidden group md:h-[522px] md:bottom-64 ">
                        <Image 
                            src={"/Gallery/foodfour.jpg"} 
                            width={436} 
                            height={844} 
                            alt="BBQ Chicken Pizza" 
                            className="rounded-2xl object-cover w-full h-full" 
                        />
                        <div className="absolute inset-0 bg-black opacity-70 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80  to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-600 space-y-2">
                            <h1 className="text-2xl">Name : BBQ Chicken Feast Pizza(272 kcal)</h1>
                            <h1 className="font-bold text-2xl">Price: <span className="font-normal">$27</span></h1>
                            <Button className="bg-[#DF6853] text-[#FFFFFF]">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-[#DF6853] text-[#FFFFFF] w-full rounded-tr-full flex flex-col items-center py-12 px-4 ">
                <h3 className="text-xl mb-2">NEWSLETTER</h3>
                <h3 className="text-3xl font-bold mb-6 text-center md:text-5xl">
                    Subscribe our <br /> newsletter
                </h3>

                <div className="flex items-center bg-[#3B3B3B] p-2 rounded-full space-x-2 max-w-md w-full">
                    <Input 
                        placeholder="@ enter your email address" 
                        className="bg-[#3B3B3B] p-2 focus:ring-0 focus:outline-none border-none flex-1 rounded-full h-[60px] md:h-[70px]" 
                    />
                    <Button className="rounded-full cursor-pointer">
                        <FaArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}