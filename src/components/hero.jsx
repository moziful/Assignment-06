import React from 'react';
import Button from './button';
import banner from '../assets/banner.png';

function Hero() {
  return (
    <div className="flex px-50 py-15 lg:px-50 justify-center items-center gap-10 h-screen">
        <div className="w-1/2 p-2 w-160">
            <div className="flex flex-col gap-4 rounded-lg">
                <div className="flex items-center gap-2 text-purple-600 font-medium bg-gray-100 p-2 px-4 rounded-full w-max">
                    <div className="bg-purple-200 w-6 h-6 rounded-full flex justify-center items-center">
                    <div className="bg-purple-400 w-4 h-4 rounded-full flex justify-center items-center">
                        <div className="bg-purple-600 w-2 h-2 rounded-full"></div>
                        </div>
                    </div>
                    <p>New: AI-Powered Tools Available</p>    
                </div>
                <h1 className="text-5xl font-extrabold text-gray-900">Supercharge Your Digital Workflow</h1>
                <p className="text-lg text-gray-500">
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
                </p>
            </div>
                <div className="flex gap-4 mt-6">
                    <Button btnName="Explore Products"></Button>
                    <Button btnName="Watch Demo"></Button>
                </div>

        </div>
        <div className="w-1/2 p-2 flex justify-center items-center">
            <img className="w-125" src={banner} alt="Hero Image" />
        </div>
    </div>
  );
}

export default Hero