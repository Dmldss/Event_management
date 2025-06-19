import React from "react";
import Axios from "axios";
import { useForm } from 'react-hook-form';



function Forgotpassword(){
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    function postlogin(data,e){
      console.log(data)
      e.preventDefault()
   
      var p_email=document.getElementById("p_email").value;
  
   Axios.post("http://localhost:1137/api/forgotpasswordu",{
      p_email: p_email,
      
   }).then((response) => {
      window.location="/login"
   
    
    
    })}
    return(
        <>
        <div class="contact">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-xl-10 col-lg-10">
                     <div class="add-space section-title text-center">
                        <h2>Forgot Password! </h2>
                     </div>
                  </div>
               </div>
               <div class="row justify-content-center">
                  <div class="col-xl-8 col-lg-8">
                     <div class="contact-form">
                        <form onSubmit={handleSubmit(postlogin)} >
                            
                        <div class="col-xl-12 col-lg-12">
  <input
    type="text"
    id="p_email"
    placeholder="Enter your Email"
    className="form-control"
    name="p_email"
    {...register("p_email", { required: "Email is mandatory",pattern:{value:!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/,message:"worng email pattern"} })}
  />
  <span className="error">{errors.p_email?.message}</span>
</div>

                             
                             


                                 <div class="col-xl-12 col-lg-12">
                                 <button type="submit"  >Login</button>
                                 </div>
                                
     
                              
                              
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="subscribe-newsletter" style={{ padding: "60px" }}>
                <div className="container">
                   
                    </div>
                    </div>

        </>
    )
}export default Forgotpassword