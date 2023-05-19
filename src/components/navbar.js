import fb from "./img/fb.png";
import google1 from"./img/google1.png";
import loginimage from "./img/loginimage.png";
import logo from "./img/logo.png";
import searchlogo from "./img/search.png";

const Navbar = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary py-xl-2 py-md-6 text-bg-light shownavbar">
        <div class="container-fluid row">
          <a class="navbar-brand col ms-5"><img src={logo} style={{width:"130px"}}></img></a>
          <form class="d-flex col position-relative" role="search">
          {/* <img src={searchlogo} className="searchicon" ></img> */}
            <input
              class="form-control me-2 rounded-pill"
              type="search"
              placeholder="    Search for your favorite groups in ATG"
              aria-label="Search"
            />
          </form>
          <div className="col">
            <p className="text-center my-auto"  data-bs-target="#exampleModalToggle" data-bs-toggle="modal" >
            Create account.<span style={{color:"#2F6CE5"}}>It’s free!</span></p>
          </div>
        </div>
      </nav>
  

<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-lg  modal-sm modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
      <p style={{color:"#008A45"}}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="d-flex">
      <div class="modal-body">
        <p style={{fontWeight:"700",fontSize:"24px"}}>Create Account</p>
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
    <button type="button" class="btn btn-primary w-100">Understood</button>
    <button type="button" class="btn btn-light w-100"><img src={fb}></img>Sign up with Facebook</button>
    <button type="button" class="btn btn-light w-100"><img src={google1}></img>Sign up with Google</button>
    </div>
    </div>
    <div>
      <p data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Already have an account? Sign In</p>
      <img src={loginimage}></img>
      <p >By signing up, you agree to our Terms & conditions, Privacy policy</p>
    </div>
    </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
      <p style={{color:"#008A45"}}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="d-flex">
      <div class="modal-body">
        <p style={{fontWeight:"700",fontSize:"24px"}}>Sign In</p>
      <div> 
    <input type="email" class="form-control" placeholder="Email" aria-label="Email"/>
    <input type="password" class="form-control" placeholder="Password" aria-label="Password"/>
    <button type="button" class="btn btn-primary w-100">Sign In</button>
    <button type="button" class="btn btn-light w-100"><img src={fb}></img>Sign up with Facebook</button>
    <button type="button" class="btn btn-light w-100"><img src={google1}></img>Sign up with Google</button>
    <p >Forgot Password?</p>
    </div>
    </div>
    <div>
      <p data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Don’t have an account yet? Create new for free!</p>
      <img src={loginimage}></img>
    </div>
    </div>
    </div>
  </div>
</div>

    </>
  );
};







export default Navbar;
