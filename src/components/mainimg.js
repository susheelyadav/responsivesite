import mainimg from "./img/firstimg.png";
import laptop2 from "./img/laptop2.png";
import React, { useState, useEffect } from 'react';


const Firstimg=()=>{
    const [imageSrc, setImageSrc] = useState(mainimg);

    const handleWindowResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 710) {
        setImageSrc(laptop2);
      } else {
        setImageSrc(mainimg);
      }
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  
    return(
        <>
        <div className="container-xxl position-relative mainimgcontainer">
        <div className="position-absolute mainimagetext">
            <p>Computer Engineering</p>
            <p>142,765 Computer Engineers follow this</p>
        </div>
        <img src={imageSrc} className="img-fluid mainimg" ></img>
        {/* <img src={laptop2} className="img-fluid mainimg position-relative" srcSet={`${laptop2} 710w, ${mainimg} 950w`} sizes="(max-width: 710px) , (max-width: 950px)" ></img> */}

        </div>
        </>
    
        
        
    )
}

export default Firstimg;