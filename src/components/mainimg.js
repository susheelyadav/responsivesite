import mainimg from "./img/firstimg.png";
import laptop2 from "./img/laptop2.png";
import arrow from "./img/arrow.png";
import React, { useState, useEffect } from 'react';


const Firstimg=()=>{
    const [imageSrc, setImageSrc] = useState(window.innerWidth < 710);

    const handleWindowResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 710) {
        setImageSrc(true);
      } else {
        setImageSrc(false);
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
          {imageSrc && <div className="d-flex justify-content-between position-absolute top-0 py-3 z-1 px-3" style={{top:"4rem"}}>
            <img style={{objectFit:"scale-down",bottom:"8px",left:"1rem"}} className="arrowimg position-relative" src={arrow}/>
            <p className="position-relative" style={{left:"16.5rem",fontSize:"12px",borderRadius:"4px",fontWeight:"500",border:"1px solid",padding:"6px 8px",width:"fit-content",color:"white",borderColor:"white"}} >Join Group</p>
          </div>}
        
        <div className="position-absolute mainimagetext">
            <p className="mainimgfirst">Computer Engineering</p>
            <p>142,765 Computer Engineers follow this</p>
        </div>
        <img src={imageSrc?laptop2:mainimg} className="img-fluid mainimg" style={{ filter: "brightness(60%)"}} ></img>
        {/* <img src={laptop2} className="img-fluid mainimg position-relative" srcSet={`${laptop2} 710w, ${mainimg} 950w`} sizes="(max-width: 710px) , (max-width: 950px)" ></img> */}

        </div>
        </>
    
        
        
    )
}

export default Firstimg;