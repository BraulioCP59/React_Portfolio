import React from 'react';
import image from './Braulio_Roses.jpg';

function AboutMe()
{
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="max-h-96 md:h-screen">
                <img className="w-screen h-screen object-cover object-top" src={image} alt=""/>
            </div>
            <div className="flex bg-gray-100 p-10">
                <div className="mb-auto mt-auto max-w-lg">
                <h1 className="text-3xl uppercase">Braulio Mora</h1>
                <p className="font-semibold mb-5">Full Stack Developer</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default AboutMe;

