import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import '../../styles.css';

  const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    // useEffect(() => {
    //   isOpen ? null : 
    //  }, []);
  
    return (
        <div className="navigation">
          {isOpen ? <i onClick={toggleSidebar} id="close" className="bi bi-x-lg"></i> : <i onClick={toggleSidebar} id="open" className="bi bi-list"></i>}
            <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/news">News</Link>
                <Link to="/testimonials">Testimonials</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Sidebar;