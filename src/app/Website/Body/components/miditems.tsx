import Image from "next/image"
import Link from "next/link"


type ItemsProps = {
    id : number
    title : string , 
    desc : string , 
    image : string
}

export const Items  : ItemsProps[]= [
     { 
        id : 1 , 
        title : "Menu variations" , 
        desc : "Sed ut perspiciatis unde omnis iste natus error"  , 
        image : "/Images/Features/featureOne.svg"
     }

     ,

     {  
        id : 2 , 
        title : "Cooking warw" , 
        desc : "Sed ut perspiciatis unde omnis iste natus error"  , 
        image : "/Images/Features/featureTwo.svg"
     }

     ,

     { 
        id : 3 , 
        title : "Best chef" , 
        desc : "Sed ut perspiciatis unde omnis iste natus error"  , 
        image : "/Images/Features/featureThree.svg"
     }

     ,

     { 
        id : 4 , 
        title : "Fast food" , 
        desc : "Sed ut perspiciatis unde omnis iste natus error"  , 
        image : "/Images/Features/featureFour.svg"
     }
]


export const ItemComponent = () =>{


     return(
        <div className="min-h-[485px] bg-[#000000] flex flex-col justify-center items-center">
            {Items.map((item ) => (
                <div key={item.id} className="flex items-center justify-center flex-col">
                        <Image src = {item.image} width={75} height={35} className="border w-[200px] inline-block" alt="IMAGE"/>
                        <h1>{item.title}</h1>
                        <p className="text-gray-300"> {item.desc}</p>
                        <h2 className="text-[#DF6853]"><Link href={'#'}>Learn More</Link></h2>
                </div>
            ))}
              
        </div>

     )
}