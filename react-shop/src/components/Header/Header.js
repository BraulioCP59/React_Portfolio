import React, {useState} from 'react';
import Navigation from '../Navigation/Navigation';

function Header ({ currentPage, handlePageChange }) {
    return (
      <>
        <header className="flex justify-between bg-gray-800 text-corn-silk">
            <h1 className="mt-2 h-12 pl-12 pr-3 pt-2 bg-gradient-to-l from-cool-green via-cool-darker-green to-cool-dark hover:from-pink-500 hover:to-yellow-500 text-3xl bg-center">Braulio Mora</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
      </>
    );
  }
  
  export default Header;