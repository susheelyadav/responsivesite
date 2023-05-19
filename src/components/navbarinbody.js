import "./style/style.css"
import Articlecard from "./articlecard";
import joingroup from "./img/jongroup2.png";
import React, { useState, useEffect } from 'react';

const Bodynavbar =()=>{
  const [isElementVisible, setIsElementVisible] = useState(window.innerWidth < 768);
  const handleWindowResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) { // Set your desired desktop screen width threshold
      setIsElementVisible(true);
    } else {
      setIsElementVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

    return(
    <div class="position-relative movediv mt-5 ">
     {isElementVisible ?<div className="d-flex justify-content-between mx-4 "><a class="nav-link active pt-2" aria-current="page" href="#">All Posts(32)</a>
      <div class="dropdown">
  <button class="btn  dropdown-toggle" style={{backgroundColor:"#F1F3F5"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Filter: All
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
      </div>: <ul class="nav nav-underline new-color bodynavbar">
    <li class="nav-item ">
    <a class="nav-link active" aria-current="page" href="#">All Posts(32)</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link" href="#">Article</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link" href="#">Event</a>
  </li>
  <li class="nav-item">
    <a class="nav-link">Education</a>
  </li>
  <li class="nav-item">
    <a class="nav-link">Job</a>
  </li>
  <button style={{backgroundColor:"#EDEEF0"}} class="btn btn-light dropdown-toggle dropdownposition" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Write a Post
  </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
     </ul>
    <button type="button" class="btn btn-primary buttonposition"> <img src={joingroup} className="me-2" style={{width:"25px",backgroundColor:"#0d6efd",color:"whitesmoke"}}></img>Join Group</button>
  </ul>} 
   
  <Articlecard></Articlecard>
    </div>
    )
}

export default Bodynavbar;