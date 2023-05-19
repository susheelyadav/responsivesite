import React, { useState, useEffect } from 'react';
import LOGIN from "./img/LOGIN.png";
import fb from "./img/fb.png";
import google1 from"./img/google1.png";
import "./style/style.css";

const Mobilelogin=()=>{

const [isImageVisible, setIsImageVisible] = useState(window.innerWidth < 710);

const handleWindowResize = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 710) { // Set your desired screen width threshold
    setIsImageVisible(true);
  } else {
    setIsImageVisible(false);
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
    {isImageVisible && <img src={LOGIN} class="position-fixed bottom-0 end-0 my-3 me-3 imgbr" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"alt="Your Image" />}

<div class="offcanvas offcanvas-bottom "  tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel"> <p style={{fontWeight:"700",fontSize:"24px"}}>Create Account</p></h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

  </div>
  <div class="offcanvas-body pt-0">
  <div> 
    <div class="row g-0">
    <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
    </div>
    <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
    </div>
    </div>
    <input type="email" class="form-control" placeholder="Email" aria-label="Email"/>
    <input type="password" class="form-control" placeholder="Password" aria-label="Password"/>
    <input type="password" class="form-control" placeholder="Confirm Password" aria-label="Confirm Password"/>
    <button type="button" class="btn btn-primary px-4 mt-4" style={{borderRadius:"20px"}}>Create Account</button>
    <a class="text-decoration-underline align-middle" style={{color:"#495057",position:"relative",left:"38%",top:"10%"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">or, Sign In</a>
    <button type="button" class="btn btn-light w-100 mt-4" style={{borderColor:"#D9D9DB"}}><img src={fb} className='pe-2'></img>Sign up with Facebook</button>
    <button type="button" class="btn btn-light w-100 mt-2" style={{borderColor:"#D9D9DB"}}><img src={google1} className='pe-2'></img>Sign up with Google</button>
    </div>
    <p className='mx-auto pt-4' style={{textAlign: "center",width:"80%"}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
  </div>
</div>

{/* login */}


<div class="offcanvas offcanvas-bottom" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <p style={{fontWeight:"700",fontSize:"24px"}}>Create Account</p>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body pt-0">
    <input type="email" class="form-control" placeholder="Email" aria-label="Email"/>
    <input type="password" class="form-control" placeholder="Password" aria-label="Password"/>
    <button type="button" class="btn btn-primary px-4 mt-4" style={{borderRadius:"20px"}}>Sign In</button>
    <a class="text-decoration-underline align-middle" style={{color:"#495057",position:"relative",left:"38%",top:"2%"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">or, Create Account</a>
    <button type="button" class="btn btn-light w-100 mt-4" style={{borderColor:"#D9D9DB"}}><img src={fb} className='pe-2'></img>Sign up with Facebook</button>
    <button type="button" class="btn btn-light w-100 mt-2" style={{borderColor:"#D9D9DB"}}><img src={google1} className='pe-2'></img>Sign up with Google</button>
    <p className='mx-auto py-4' style={{textAlign:"center"}}>Forgot Password?</p>
  </div>
 
</div>


    </>   
)
}

export default  Mobilelogin;