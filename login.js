import{ useState, useEffect} from "react";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';




function Login(){

   const { register, handleSubmit, formState: { errors } } = useForm();
 function postlogin(data,e){
   console.log(data)
   e.preventDefault()

   var p_email=document.getElementById("p_email").value;
var p_password=document.getElementById("p_password").value;

Axios.post("http://localhost:1137/api/login",{
   p_email: p_email,
   p_password: p_password,
}).then((response) => {
   if(response.data.msg){
      toast.error('Unvalid Id or Password',{
         position: 'top-right',
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
     });
   }
   else{
   
     
     
let store = {p_email:p_email,p_name:response.data[0].p_name,p_id:response.data[0].p_id}
    sessionStorage.setItem("login_data",JSON.stringify(store));
   window.location="/";
   toast.success('done',{
      position: 'top-right',
      autoClose: 3000,})
   }
});
 }



 
    return(
        <>
        <div class="contact">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-xl-10 col-lg-10">
                     <div class="add-space section-title text-center">
                        <h2>Login </h2>
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
  <input
    type="password"
    id="p_password"
    placeholder="Enter your password"
    {...register("p_password", { required: "Password is mandatory",pattern:{value:/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,message:"worng email pattern"} })}
  />
  <span>{errors.p_password && <span className="error">{errors.p_password.message}</span>}</span>
   Forgot Password?<a href="/forgotpassword" class="auth-link text-black">Forgot password</a>
</div>


                                 <div class="col-xl-12 col-lg-12">
                                 <button type="submit"  >Login</button>
                                 </div>
                                
      Dont have Account?<a href="/registration">Sign up</a>
                              
                              
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

</>
    )
}export default Login