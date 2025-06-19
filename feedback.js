
import { useState , useEffect} from "react";
import Axios from "axios";
import { useForm } from 'react-hook-form';



function Feedback(){
    
    
const [p_name ,name]=useState('');
const [p_mob,mobile]=useState('');
const [p_email,email]=useState('');
const [p_subject,subject]=useState('');
const [feedback_msg,description]=useState('');
const { register, handleSubmit, formState: { errors } } = useForm();

  
 

function postlogin(data,e){
    console.log(data)
    
 

Axios.post('http://localhost:1137/api/feedback',{p_name:p_name,p_mob:p_mob,p_email:p_email,p_subject:p_subject,feedback_msg:feedback_msg}).then((response) => {
    alert("feedbak sent success")
    window.location="/"
})

}
 

   return(
    <>
    <div class="contact">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-10">
                        <div class="add-space section-title text-center">
                            <h2>Feedback!</h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-8">
                        <div class="contact-form">
                            <form onSubmit={handleSubmit(postlogin)}>
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6">
                                        <input type="text" placeholder="Enter your name" onChange={(e)=>name(e.target.value)}/>
                                        <span></span>
                                    </div>
                                    <div class="col-xl-6 col-lg-6">
                                    <input
    type="text"
    id="p_email"
    placeholder="Enter your Email"
    className="form-control"
    name="p_email"
    {...register("p_email", { required: "Email is mandatory",  pattern:{value:/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,message:"Enter proper email pattern"}})}
    onChange={(e)=>email(e.target.value)} />
  <span className="error">{errors.p_email?.message}</span>
</div>
                                    <div class="col-xl-6 col-lg-6">
                                        <input type="text" placeholder="Enter your subject"onChange={(e)=>subject(e.target.value)}/>
                                        <span></span>
                                    </div>
                                    <div class="col-xl-6 col-lg-6">
                                        <input type="number" placeholder="Enter your Mobile "onChange={(e)=>mobile(e.target.value)}/>
                                        <span></span>
                                    </div>
                                    <div class="col-xl-12 col-lg-11" style={{background:"#1e132c",borderRadius:"20px"}}>
                                    <textarea placeholder="Write a message"onChange={(e)=>description(e.target.value)}></textarea>
                                        <span></span>
                                    </div>
                                    
                                    <div class="col-xl-6 col-lg-6">
                                        <button type="submit" onClick={postlogin}>Send Us Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
   )
}export default Feedback