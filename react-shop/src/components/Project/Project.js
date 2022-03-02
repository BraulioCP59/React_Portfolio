import {React, useState} from 'react';
import Subtitle from '../Subtitle/Subtitle';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutMe from '../pages/AboutMe/AboutMe';
import Contact from '../pages/Contact/Contact';
import Portfolio from '../pages/Portfolio/Portfolio';
import Resume from '../pages/Resume/Resume';


export default function Project() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe/>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio/>;
    }
    if (currentPage === 'Resume') {
      return <Resume/>;
    }

    return <Contact/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Subtitle/>
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer/>
    </div>
  );

}
  
