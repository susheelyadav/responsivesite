import views from "./img/eye.png"
import profile1 from "./img/profile1.png";
import first from "./img/Rectangle.png";
import sharebutton from "./img/Vector.png";
import second from "./img/second.png";
import profile from "./img/profile.png";
import third from "./img/third.png";
import profile3 from "./img/profile3.png";
import profile4 from "./img/profile4.png";
import calender from "./img/calnder.png";
import location from "./img/newlocation.png";

import Mobilelogin from "./mobilelogin";
import React, { useState, useEffect } from 'react';


const Articlecard = () => {
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

  return (
    <>
      <div className="container-fluid mb-5">
        <div class="card mt-3 cardwidth" >
          <img src={first} class="card-img-top img-fluid" alt="..." />
          <div class="card-body">
            <p class="card-text">✍️ Article</p>
            <div className="d-flex me-4">
            <h4 class="card-text d-inline-block">What if famous brands had regular fonts? Meet RegulaBrands! </h4>
            <div class="dropdown dropstart ">
              <p data-bs-toggle="dropdown" aria-expanded="false" style={{ fontWeight: "700", fontSize: "25px" }}>
                ...
             </p>
                <ul class="dropdown-menu " style={{position:"relative",right:"100px"}}>
                  <li><button class="dropdown-item" type="button">Edit</button></li>
                  <li><button class="dropdown-item" type="button">Report</button></li>
                  <li><button class="dropdown-item" type="button">Option 3</button></li>
                </ul>
            </div>
            </div>
            <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
            <div class="card-text">
              <img src={profile1} alt="..." />
              <span style={{ fontWeight: "600" }} className="ms-2">Sarthak Kamra</span>
              <img src={views}  style={{ marginLeft: "318px"}} className="me-2 mt-1 align-middle hideimg" alt="..." />
              <span className="align-middle fw-medium  hideimg" style={{fontSize:"14px"}}>1.4k views</span>
                  
              { imageSrc ? <button className="p-2" style ={{backgroundColor:"#F1F3F5",color:"#212529",marginLeft:"4rem",border:"none"}}><img className="pe-2" src={sharebutton}   alt="..." />Share</button>:<img src={sharebutton} className="ms-5"  alt="..." />
      }
            </div>
          </div>
        </div>

        <div class="card mt-3 cardwidth" >
          <img src={second} class="card-img-top img-fluid" alt="..." />
          <div class="card-body">
            <p class="card-text">🔬️ Education</p>
            <div className="d-flex me-4">
            <h4 class="card-text">Tax Benefits for Investment under National Pension Scheme launched by Government </h4>
            <div class="dropdown dropstart ">
              <p data-bs-toggle="dropdown" aria-expanded="false" style={{ fontWeight: "700", fontSize: "25px" }}>
                ...
             </p>
                <ul class="dropdown-menu " style={{position:"relative",right:"100px"}}>
                  <li><button class="dropdown-item" type="button">Edit</button></li>
                  <li><button class="dropdown-item" type="button">Report</button></li>
                  <li><button class="dropdown-item" type="button">Option 3</button></li>
                </ul>
            </div>
            </div>
              <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
            <div class="card-text">
              <img src={profile} alt="..." />
              <span style={{ fontWeight: "600" }} className="ms-2">Sarthak Kamra</span>
              <img src={views}  style={{ marginLeft: "318px"}} className="me-2 mt-1 align-middle  hideimg" alt="..." />
              <span className="align-middle fw-medium  hideimg" style={{fontSize:"14px"}}>1.4k views</span>
                  
              { imageSrc ? <button className="p-2" style ={{backgroundColor:"#F1F3F5",color:"#212529",marginLeft:"4rem",border:"none"}}><img className="pe-2" src={sharebutton}   alt="..." />Share</button>:<img src={sharebutton} className="ms-5"  alt="..." />
      }
            </div>
          </div>
        </div>

        <div class="card mt-3 caedwidth" >
          <img src={third} class="card-img-top img-fluid" alt="..." />
          <div class="card-body">
            <p class="card-text">🗓️ Meetup</p>
            <h4 class="card-text">Finance & Investment Elite Social Mixer @Lujiazui </h4>
            <div className="d-flex mb-3 mt-1">
              <div><img src={calender} className="align-baseline pt-3"></img><span className="ms-2 fw-medium">Fri, 12 Oct, 2018</span></div>
              <div className="ms-5"><img  className="align-baseline pt-3" src={location}></img><span className="ms-2 fw-medium">Ahmedabad, India</span></div>
            </div>
            <div class="d-grid gap-2 mb-4">
              <button type="button" class="btn btn-outline-danger" style={{borderColor:"#A9AEB8",borderRadius:"10px"}}>Visit Website</button>
            </div>

            <div class="card-text">
              <img src={profile3} alt="..." />
              <span style={{ fontWeight: "600" }} className="ms-2">Joseph Gray</span>
              <img src={views}  style={{ marginLeft: "318px"}} className="me-2 mt-1 align-middle hideimg" alt="..." />
              <span className="align-middle fw-medium hideimg" style={{fontSize:"14px"}}>1.4k views</span>
                   
             { imageSrc ? <button className="p-2" style ={{backgroundColor:"#F1F3F5",color:"#212529",marginLeft:"5rem",border:"none"}}><img className="pe-2" src={sharebutton}   alt="..." />Share</button>:<img src={sharebutton} className="ms-5"  alt="..." />
      }
            </div>
          </div>
        </div>
      

        <div class="card mt-3 cardwidth" >
          <div class="card-body">
            <p class="card-text">💼️ Job</p>
            <h4 class="card-text">Software Developer </h4>
            <div className="d-flex mb-3 mt-1">
              <div><img src={calender} className="align-baseline pt-3"></img><span className="ms-2 fw-medium">Innovaccer Analytics Private Ltd.</span></div>
              <div className="ms-5"><img  className="align-baseline pt-3" src={location}></img><span className="ms-2 fw-medium">Noida, India</span></div>
            </div>
            <div class="d-grid gap-2 mb-4">
              <button type="button" class="btn btn-outline-success" style={{borderColor:"#A9AEB8",borderRadius:"10px"}}>Apply on Timesjobs</button>
            </div>

            <div class="card-text">
              <img src={profile4} alt="..." />
              <span style={{ fontWeight: "600" }} className="ms-2">Sarthak Kamra</span>
              <img src={views}  style={{ marginLeft: "318px"}} className="me-2 mt-1 align-middle hideimg" alt="..." />
              <span className="align-middle fw-medium hideimg" style={{fontSize:"14px"}}>1.4k views</span>
              
             { imageSrc ? <button className="p-2" style ={{backgroundColor:"#F1F3F5",color:"#212529",marginLeft:"4rem",border:"none"}}><img className="pe-2" src={sharebutton}   alt="..." />Share</button>:<img src={sharebutton} className="ms-5"  alt="..." />
      }       </div>
          </div>
        </div>


      </div>
      <Mobilelogin></Mobilelogin>

    
    </>
  )
}

export default Articlecard;