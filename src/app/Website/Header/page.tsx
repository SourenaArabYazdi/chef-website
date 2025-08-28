import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { IoIosMore } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FaGoogle } from "react-icons/fa";
import { Input } from "@/components/ui/input";

export default function HeaderPage(){


    return(
        <div className=" h-[144px] bg-[#374151] flex  items-center justify-between lg:sticky lg:top-0 lg:z-50">
            <div className="w-[225.625px] h-[64px]  flex flex-row items-center justify-beetwen ">
                 <span>
                     <Image src={'/Images/logo/Logo.svg'} width={56} height={56} alt="logo"  className="w-[56px] h-[56px]"/>
                 </span>
                 <span className="text-[#FFFFFF] ml-3 text-[24px] ">
                     <Link href={'/Website'} className=""> 
                        Chef&apos;s <br className="md:hidden" />
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

                     <span className="hidden  lg:flex lg:mr-10 lg:space-x-5">
                      <Dialog >
                        <DialogTrigger className="border w-[100px] h-[50px] bg-[#374151] border-[#DF6853] hover:bg-[#DF6853] text-[#FFFFFF] rounded-full ">
                           Sign In
                        </DialogTrigger>

                        <DialogContent className="bg-[#374151]">
                          <DialogTitle></DialogTitle>
                            <Card className="bg-[#374151] border-none flex flex-col items-center w-full text-[#FFFFFF] ">
                                <CardHeader className="w-full items-center flex flex-row ml-40 ">
                                <span>
                                   <Image src={'/Images/logo/Logo.svg'} width={56} height={56} alt="logo"  className="w-[56px] h-[56px]"/>
                               </span>
                               <span className="text-[#FFFFFF] ml-3 text-[24px] font-bold  ">
                                   
                                      Chef&apos;s <br className="md:hidden" />
                                       Kitchen
                                    
                               </span>
                                </CardHeader>


                                <CardContent className="flex flex-col items-center justify-center space-y-3 w-full ">
                                    
                                    <div className="space-x-4">
                                       <Button className="bg-[#DF6853] text-[#FFFFFF]  text-[16px] p-3 w-[184px] h-[52px] rounded-xl">
                                         Sign In
                                         <FaGoogle className="text-xl"  />
                                           
                                        </Button>

                                        <Button className="bg-[#DF6853] text-[#FFFFFF]  text-[16px] p-3 w-[184px] h-[52px] rounded-xl">
                                         Sign In
                                         <FaGithub className="text-xl"  />
                                           
                                        </Button>
                                    </div>

                                     <span className="mt-10">OR</span>

                                     <div className="space-y-5">
                                         <div>
                                             <Input placeholder="Email" className="w-[400px] h-[50px]"/>
                                         </div>

                                         <div>
                                             <Input placeholder="Password" className="w-[400px] h-[50px]"/>
                                         </div>

                                         <div>
                                           <Button className="bg-[#DF6853] w-full h-[45px]" >
                                             Sign In
                                           </Button>
                                         </div>
                                     </div>
                                </CardContent>

                                <CardFooter className="flex flex-col items-center justify-center space-y-2 text-sm">
                                  <span >Forgot Password ? </span>
                                  <span>Not a member yet ? <span className="text-[#DF6853] cursor-pointer">Sign Up</span></span>
                                    
                                </CardFooter>
                            </Card>
                        </DialogContent>
                         
                      </Dialog>

                      <Dialog >
                        <DialogTrigger className=" w-[100px] h-[50px] bg-[#DF6853]  hover:bg-[#374151] text-[#FFFFFF] hover:border hover:border-[#FFFFFF] rounded-full ">
                           Sign Up
                        </DialogTrigger>

                        <DialogContent className="bg-[#374151]">
                          <DialogTitle></DialogTitle>
                            <Card className="bg-[#374151] border-none flex flex-col items-center w-full text-[#FFFFFF] ">
                                <CardHeader className="w-full items-center flex flex-row ml-40 ">
                                <span>
                                   <Image src={'/Images/logo/Logo.svg'} width={56} height={56} alt="logo"  className="w-[56px] h-[56px]"/>
                               </span>
                               <span className="text-[#FFFFFF] ml-3 text-[24px] font-bold  ">
                                   
                                      Chef&apos;s <br className="md:hidden" />
                                       Kitchen
                                    
                               </span>
                                </CardHeader>


                                <CardContent className="flex flex-col items-center justify-center space-y-3 w-full ">
                                    
                                    <div className="space-x-4">
                                       <Button className="bg-[#DF6853] text-[#FFFFFF]  text-[16px] p-3 w-[184px] h-[52px] rounded-xl">
                                         Sign Up
                                         <FaGoogle className="text-xl"  />
                                           
                                        </Button>

                                        <Button className="bg-[#DF6853] text-[#FFFFFF]  text-[16px] p-3 w-[184px] h-[52px] rounded-xl">
                                         Sign Up
                                         <FaGithub className="text-xl"  />
                                           
                                        </Button>
                                    </div>

                                     <span className="mt-10">OR</span>

                                     <div className="space-y-5">
                                         <div>
                                             <Input placeholder="Email" className="w-[400px] h-[50px]"/>
                                         </div>

                                         <div>
                                             <Input placeholder="Password" className="w-[400px] h-[50px]"/>
                                         </div>

                                         <div>
                                           <Button className="bg-[#DF6853] w-full h-[45px]" >
                                             Sign Up
                                           </Button>
                                         </div>
                                     </div>
                                </CardContent>

                                <CardFooter className="flex flex-col items-center justify-center space-y-2 text-sm">
                                  <span >By creating an account you are  agree with our <br /> <span className="text-[#DF6853]">Privacy and Policy</span> </span>
                                  <span>Already have an account?  <span className="text-[#DF6853] cursor-pointer">Sign In</span></span>
                                    
                                </CardFooter>
                            </Card>
                        </DialogContent>
                         
                      </Dialog>
                        
                     </span>

                  
                     <span className="w-[171px] h-[58px] flex flex-row  items-center justify-between text-[#FFFFFF] text-xl mr-8 "> 
                        <FaPhoneAlt className="w-auto h-[30px] text-[#DF6853] mb-6 " />
                          <span className="ml-2 "> +1(909) 235-9814 </span>
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
                                                Chef&apos;s 
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


                                  <div className="flex flex-row space-x-2  space-y-4 p-2 ">
                                       <Dialog >
                                         <DialogTrigger className="border w-[100px] h-[50px] bg-[#374151] border-[#DF6853] hover:bg-[#DF6853] text-[#FFFFFF] rounded-full ">
                                            Sign In
                                         </DialogTrigger>

                                         <DialogContent className="bg-[#374151]">
                                           <DialogTitle></DialogTitle>
                                             <Card className="bg-[#374151] border-none flex flex-col items-center w-full text-[#FFFFFF] ">
                                                 <CardHeader className="w-full items-center flex flex-row ml-40 ">
                                                 <span>
                                                    <Image src={'/Images/logo/Logo.svg'} width={56} height={56} alt="logo"  className="w-[56px] h-[56px]"/>
                                                </span>
                                                <span className="text-[#FFFFFF] ml-3 text-[24px] font-bold  ">
                                                    
                                                       Chef&apos;s <br className="md:hidden" />
                                                        Kitchen
                                                     
                                                </span>
                                                 </CardHeader>


                                                 <CardContent className="flex flex-col items-center justify-center space-y-3 w-full ">
                                                     
                                                     <div className="space-x-4">
                                                        <Button className="bg-[#DF6853] text-[#FFFFFF]  text-[16px] p-3 w-[184px] h-[52px] rounded-xl">
                                                          Sign In
                                                          <FaGoogle className="text-xl"  />
                                                            
                                                         </Button>

                                                         <Button className="bg-[#DF6853] text-[#FFFFFF]  text-[16px] p-3 w-[184px] h-[52px] rounded-xl">
                                                          Sign In
                                                          <FaGithub className="text-xl"  />
                                                            
                                                         </Button>
                                                     </div>

                                                      <span className="mt-10">OR</span>

                                                      <div className="space-y-5">
                                                          <div>
                                                              <Input placeholder="Email" className="w-[400px] h-[50px]"/>
                                                          </div>

                                                          <div>
                                                              <Input placeholder="Password" className="w-[400px] h-[50px]"/>
                                                          </div>

                                                          <div>
                                                            <Button className="bg-[#DF6853] w-full h-[45px]" >
                                                              Sign In
                                                            </Button>
                                                          </div>
                                                      </div>
                                                 </CardContent>

                                                 <CardFooter className="flex flex-col items-center justify-center space-y-2 text-sm">
                                                   <span >Forgot Password ? </span>
                                                   <span>Not a member yet ? <span className="text-[#DF6853] cursor-pointer">Sign Up</span></span>
                                                     
                                                 </CardFooter>
                                             </Card>
                                         </DialogContent>
                                          
                                       </Dialog>

                                       <Dialog >
                                        <DialogTrigger className=" w-[100px] h-[50px] bg-[#DF6853]  hover:bg-[#374151] text-[#FFFFFF] hover:border hover:border-[#FFFFFF] rounded-full ">
                                           Sign Up
                                        </DialogTrigger>

                                        <DialogContent className="bg-[#374151]">
                                            <Card className="bg-[#374151] border-none flex flex-col items-center w-full text-[#FFFFFF] ">
                                                <CardHeader className="w-full items-center flex flex-row ml-40 ">
                                                <span>
                                                   <Image src={'/Images/logo/Logo.svg'} width={56} height={56} alt="logo"  className="w-[56px] h-[56px]"/>
                                               </span>
                                               <span className="text-[#FFFFFF] ml-3 text-[24px] font-bold  ">
                                                   
                                                      Chef&apos;s <br className="md:hidden" />
                                                       Kitchen
                                                    
                                               </span>
                                                </CardHeader>


                                                <CardContent className="flex flex-col items-center justify-center space-y-3 w-full ">
                                                  <DialogTitle></DialogTitle>
                                                    
                                                    <div className="space-x-4">
                                                       <Button className="bg-[#DF6853] text-[#FFFFFF]  text-[16px] p-3 w-[184px] h-[52px] rounded-xl">
                                                         Sign Up
                                                         <FaGoogle className="text-xl"  />
                                                           
                                                        </Button>

                                                        <Button className="bg-[#DF6853] text-[#FFFFFF]  text-[16px] p-3 w-[184px] h-[52px] rounded-xl">
                                                         Sign Up
                                                         <FaGithub className="text-xl"  />
                                                           
                                                        </Button>
                                                    </div>

                                                     <span className="mt-10">OR</span>

                                                     <div className="space-y-5">
                                                         <div>
                                                             <Input placeholder="Email" className="w-[400px] h-[50px]"/>
                                                         </div>

                                                         <div>
                                                             <Input placeholder="Password" className="w-[400px] h-[50px]"/>
                                                         </div>

                                                         <div>
                                                           <Button className="bg-[#DF6853] w-full h-[45px]" >
                                                             Sign Up
                                                           </Button>
                                                         </div>
                                                     </div>
                                                </CardContent>

                                                <CardFooter className="flex flex-col items-center justify-center space-y-2 text-sm">
                                                  <span >By creating an account you are  agree with our <br /> <span className="text-[#DF6853]">Privacy and Policy</span> </span>
                                                  <span>Already have an account?  <span className="text-[#DF6853] cursor-pointer">Sign In</span></span>
                                                    
                                                </CardFooter>
                                            </Card>
                                        </DialogContent>
                                         
                                      </Dialog>

                                  </div>
                             </SheetContent>
                        </Sheet>


                  </div>
            </div>
          
        </div>
    )
}