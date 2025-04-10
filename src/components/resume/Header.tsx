
import React from "react";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row">
        {/* Left Header - Name and Title */}
        <div className="bg-gray-100 p-6 md:p-10 md:w-2/5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-300">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight text-center">
            ORXAN XUDUYEV
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 mt-1 text-center">
            ELMƏDDİN oğlu
          </h2>
          <div className="mt-6 border-t border-gray-300 py-4">
            <h3 className="text-xl font-semibold text-gray-600 text-center">OFİS MENECERİ</h3>
          </div>
        </div>

        {/* Separator */}
        <div className="hidden md:block absolute left-2/5 top-1/2 -translate-y-1/2 z-10 h-full">
          <div className="h-full w-0.5 bg-gray-300"></div>
        </div>

        {/* Right Header - Contact Info with Photo */}
        <div className="bg-white p-6 md:p-10 md:w-3/5 relative before:content-[''] before:absolute before:top-0 before:right-0 before:w-full before:h-1.5 before:bg-black">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-red-700 mb-6 md:mb-0 md:mr-6 flex-shrink-0">
              <img 
                src="/lovable-uploads/32978899-484e-49fd-b47e-f544a827f9c6.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 flex-grow">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-500 mr-3" />
                <span>(+994 55) 369 89 69</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-500 mr-3" />
                <span>cvakansiya@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-1" />
                <span>Bakı şəh., Nəsimi ray., Həsən Əliyev küç., bina XX</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 text-gray-500 mr-3" />
                <a 
                  href="https://www.linkedin.com/in/cvakansiya/" 
                  className="text-blue-600 hover:underline"
                >
                  https://www.linkedin.com/in/cvakansiya/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
