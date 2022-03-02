import React, {useState} from 'react';

function Navigation ({ currentPage, handlePageChange }) {
    return (
        <nav className="bg-gray-800">
             <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">

                        <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'bg-gray-900 text-white rounded-md px-3' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}>About Me</a>

                        <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'bg-gray-900 text-white rounded-md px-3' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}>Portfolio</a>

                        <a href="#Resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'bg-gray-900 text-white rounded-md px-3' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}>Resume</a>

                        <a href="#Contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'bg-gray-900 text-white rounded-md px-3' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}>Contact Me</a>

                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </nav>
    );
  }
  
  export default Navigation;
