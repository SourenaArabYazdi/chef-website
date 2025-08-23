import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function BodyMid2Component(){

    


    return(
        <div className="h-[1122.41px] bg-[#000000] text-[#FFFFFF] mt-90 sm:mt-0 felx items-center justify-center sm:h-[1307.94px] sm:space-y-7 ">

            <Image src={'/cook.png'}  width={816} height={916} alt="Cook"/>

            <div className="flex p-4 min-h-[490px]  flex-col space-y-4">
                 <h1 className="text-[#DF6853] text-[18px]">COOK WITH US</h1>
                 <h2 className="text-[30px]">Cooking together with the expert.</h2>
                 <p className="text-gray-400 " >Sed ut perspiciatis unde omnis iste natus error sit volupta
                    tem accusantium doloremque laudantium, totam rem aperiam, ea
                    que ipsa quae ab illo inventore veritatis et quasi architecto
                     beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                      quia voluptas sit aspernatur aut odit aut fugit, sed quia c
                      onsequuntur magni dolores eos qui ratione voluptatem
                         Sed ut perspiciatis unde omnis iste natus error sit 
                         voluptatem accusantium doloremque laudantium....</p>

                         <Button className="bg-[#DF6853] text-white min-h-[70px] rounded-full text-[20px] sm:mt-4  w-[40%] mt-3 ">Learn more</Button>
            </div>


        </div>
    )
}