import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function BodyFooter() {
    return (
        <footer className="bg-[#000000] text-[#FFFFFF] py-16 px-4">
            <div className="max-w-7xl mx-auto">
               
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-8 md:mb-0">
                        <Image 
                            src={"/Images/logo/Logo.svg"} 
                            height={56} 
                            width={56} 
                            alt="Chef's Kitchen logo" 
                        />
                        <h1 className="text-2xl font-bold">Chef's Kitchen</h1>
                    </div>
                    
                    <div className="flex flex-col space-y-4">
                        <p className="text-gray-400 text-sm max-w-xs">
                            Open an account in minutes, get full financial control for much longer.
                        </p>
                        
                        <div className="flex space-x-4">
                            <Button 
                                className="bg-[#FFFFFF] text-[#000000] rounded-full hover:bg-[#DF6853] hover:text-[#FFFFFF] transition-colors duration-200"
                                aria-label="Follow us on Facebook"
                            >
                                <FaFacebookF />
                            </Button>
                            
                            <Button 
                                className="bg-[#FFFFFF] text-[#000000] rounded-full hover:bg-[#DF6853] hover:text-[#FFFFFF] transition-colors duration-200"
                                aria-label="Follow us on Instagram"
                            >
                                <FaInstagram />
                            </Button>
                            
                            <Button 
                                className="bg-[#FFFFFF] text-[#000000] rounded-full hover:bg-[#DF6853] hover:text-[#FFFFFF] transition-colors duration-200"
                                aria-label="Follow us on Twitter"
                            >
                                <FaXTwitter />
                            </Button>
                        </div>
                    </div>
                </div>

                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                    <div className="space-y-4">
                        <h2 className="font-bold text-xl">Company</h2>
                        <nav className="space-y-3">
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                About
                            </Link>
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                Careers
                            </Link>
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                Mobile
                            </Link>
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                Blog
                            </Link>
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                How we work?
                            </Link>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-bold text-xl">Information</h2>
                        <nav className="space-y-3">
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                Help/FAQ
                            </Link>
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                Press
                            </Link>
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                Affiliates
                            </Link>
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                Hotel owners
                            </Link>
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                Partners
                            </Link>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-bold text-xl">More</h2>
                        <nav className="space-y-3">
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                Home
                            </Link>
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                About Us
                            </Link>
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                Recipe
                            </Link>
                            <Link 
                                href="#" 
                                className="block text-gray-400 hover:text-[#DF6853] transition-colors duration-200"
                            >
                                Gallery
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-600 mb-8" />

                {/* Copyright */}
                <p className="text-xs text-gray-400 text-center">
                    ©2025 - Chef's kitchen. Distributed By ThemeWagon and Developed by GetNextjsTemplates & SourenaArabYazdi
                </p>
            </div>
        </footer>
    );
}