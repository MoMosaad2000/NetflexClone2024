import React, { useState, useEffect } from "react";
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
      <>
        <div className={`nav ${show && "nav-black"}`}>
            <img
                className="nav-logo"
                src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" // Placeholder URL
                alt="Netflix Logo"
            />
         </div>
         <div>    
            <img
                className="nav-avatar"
                src="data:image/jpeg;base64,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"
                alt="Avatar"
            />
        </div>
       </>
    );
}

export default Nav;
