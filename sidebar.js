import React ,{ useRef } from "react";
function Sidebar(){
  const layoutRef=useRef(null);
   const reff = useRef(null);
  const handleclick=(ref)=>{
    if(ref?.current?.className.includes('show')){
    
        ref.current.className='collapse';
    }
    else{
    
        ref.current.className='collapse show';
    }
    
        }


        const handleclick1=(ref)=>{
          if(ref?.current?.className.includes('show')){
          
            ref.current.className='collapse';
          }
          else{
          
            ref.current.className='collapse show';
          }
          
              }
    return(
        <>
       
        
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                
                  
                  <span class="login-status online"></span>
                  
              
                <div class="nav-profile-text d-flex flex-column">
                  <span class="font-weight-bold mb-2">Devanshi Lothe</span>
                  <span class="text-secondary text-small">Project Manager</span>
                </div>
                <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                <span class="menu-title">Dashboard</span>
                <i class="mdi mdi-home menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#" aria-expanded="false" aria-controls="ui-basic" onClick={()=> handleclick(layoutRef)}>
                <span class="menu-title">Event</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div class="collapse"  ref={layoutRef}>
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <a class="nav-link" href="/event">Create Event</a></li>
                  <li class="nav-item"> <a class="nav-link" href="/updatevent">Manage Event</a></li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#" aria-expanded="false" aria-controls="ui-basic" onClick={()=> handleclick1(reff)}>
                <span class="menu-title">Gallery</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div class="collapse"  ref={reff}>
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <a class="nav-link" href="/managegallery">Add Gallery Details</a></li>
                  <li class="nav-item"> <a class="nav-link" href="/updategallery">Manage Gallery</a></li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/feedback">
                <span class="menu-title">Feedback</span>
                <i class="mdi mdi-format-list-bulleted menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/manageusers">
                <span class="menu-title">User Management</span>
                <i class="mdi mdi-chart-bar menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/payment">
                <span class="menu-title">Payments</span>
                <i class="mdi mdi-table-large menu-icon"></i>
              </a>
            </li>
           
          </ul>
        </nav>
      
        </>
    )
}export default Sidebar