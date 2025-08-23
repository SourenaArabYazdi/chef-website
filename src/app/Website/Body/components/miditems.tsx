import Image from "next/image"
import Link from "next/link"

// ... Items array is the same ...

type ItemsProps = {
    id : number , 
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


export const ItemComponent = () => {
    return (
        <div className="min-h-[485px]  bg-[#000000]  flex flex-col justify-center items-center gap-12 p-2 sm:grid sm:grid-cols-2 sm:grid-rows-2 ">
            {Items.map((item) => (
                <div key={item.id} className="flex flex-col  items-center text-center p-15">
                    
                  
                 
                        <Image
                            src={item.image}
                            width={260} 
                            height={260} 
                           
                            className="w-full h-full   object-cover " 
                            alt={item.title}
                        />
                    

                    {/* Text Content */}
                    <div className="flex items-center justify-center flex-col">
                      <h1 className="text-white text-xl font-bold mb-2">{item.title}</h1>
                      <p className="text-gray-300 w-3/4 mb-4">{item.desc}</p>
                      <h2 className="text-[#DF6853] hover:underline">
                          <Link href={'#'}>Learn More</Link>
                      </h2>
                    </div>
                </div>
            ))}
        </div>
    )
}