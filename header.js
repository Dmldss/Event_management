import React ,{ useRef } from "react";
function Header(){
  let user = JSON.parse(sessionStorage.getItem("admin_data"));
    function logout (){
        sessionStorage.clear()
        window.location="/"
    }
  const layoutRef=useRef(null);

  const handleclick=(ref)=>{
    if(ref?.current?.className.includes('show')){
    
        ref.current.className='dropdown-menu navbar-dropdown';
    }
    else{
    
        ref.current.className='dropdown-menu navbar-dropdown show';
    }
    
        }

       const  singout=()=>{
        localStorage.clear();
        window.location="/login"
       }

    return(
        <>
    
        
    
      <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a class="brand-logo" href="/"><img src="../assets/images/icons8-admin-64.png" alt="icon" /></a>
          <h5 style={{marginTop:"26px"}}>ADMIN!</h5>
          
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-stretch">
          <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span class="mdi mdi-menu"></span>
          </button>
          
            
          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item nav-profile dropdown">
              <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=> handleclick(layoutRef)}>
                
                <div class="nav-profile-text">
                  <p class="mb-1 text-black">Devanshi Lothe</p>
                </div>
              </a>
              <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown" ref={layoutRef} >
                <a class="dropdown-item" href="#" >
                  <i class="mdi mdi-cached me-2 text-success"></i> Activity Log </a>
                <div class="dropdown-divider"></div>
                
                                        <li class="nav-item">
                                          <button button class="dropdown-item" href="/login"   onClick={logout}>Logout</button>
                                        </li>
                                        
                
                  
              </div>
            </li>
            
            
              
                
                
                
            
            
            
          </ul>
          <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
     
    </>
    )
    
}export default Header
