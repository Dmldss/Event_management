import React from "react";
import About from "./about";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function postlogin() {
    toast.success('done',{
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};


function Home (){
    return(
        <>
                <div class="banner">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-6">
                        <div class="banner-content">
                            <h1>Rel-Event</h1>
                            <h4>Let Celebrate With US  !!</h4>
                        </div>
                    </div>
                </div>
                <div>
       
     
      </div>
                <div class="row">
                    <div class="col-xl-12 col-lg-12">
                        <div class="banner-bottom">
                            <div class="row">
                                <div class="col-xl-4 col-lg-4 col-md-6 d-xl-block d-lg-block d-md-none">
                                    <div class="part-img">
                                        <img src="assets/img/banner-bottom-img.jpg" alt=""/>
                                    </div>
                                </div>
                                
                                <div class="col-xl-4 col-lg-4 col-md-6 d-xl-flex d-lg-flex d-md-flex align-items-center">
                                    <div class="banner-buttons">
                                        <a href="/eventlist">Explore More</a>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

        <>
           <About></About>
        </>
        </>
      

    )
    
} export default Home