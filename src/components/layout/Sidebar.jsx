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
                <Link to="/"><p>Home</p></Link>
                <Link to="/about"><p>About</p></Link>
                <Link to="/news"><p>News</p></Link>
                <Link to="/testimonials"><p>Testimonials</p></Link>
                <Link to="/login"><p>Login</p></Link>
            </div>
        </div>
    );
};

export default Sidebar;