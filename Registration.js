import {useState , useEffect}from "react";
import Axios from "axios";
import { useForm } from 'react-hook-form';


function Registration() {
   const [p_name ,name]=useState('');
   const [p_email,email]=useState('');
   const [p_password,password]=useState('');
   const [p_department,department]=useState('');
   
   const [p_gender,gender]=useState('');
   const [p_age,age]=useState('');
   const [p_mob,mob]=useState('');
   const [p_id_proof, idproof] =useState('');

   const { register, handleSubmit, formState: { errors } } = useForm();
   const submitregistration = (data,e) =>{
      //alert(p_name)


      let formdata = new FormData();
      formdata.append("p_name" ,p_name);
      formdata.append("p_email",p_email);
      formdata.append("p_password",p_password);
   
      formdata.append("p_gender",p_gender);
      formdata.append("p_age",p_age);
      formdata.append("p_mob",p_mob);
      formdata.append("p_id_proof", p_id_proof);

      formdata.append("p_department",p_department);


      Axios.post('http://localhost:1137/api/registration',formdata,{headers: {"Content-Type":"multipart/form-data"}}).then((response) => {
         console.log(response)
    alert("Registrated");
   //  window.location="/"

   });
}

   

   return (
      <>
         <div class="contact">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-xl-10 col-lg-10">
                     <div class="add-space section-title text-center">
                        <h2>Registration</h2>
                     </div>
                  </div>
               </div>
               <div class="row justify-content-center">
                  <div class="col-xl-8 col-lg-8">
                     <div class="contact-form">
                        <form onSubmit={handleSubmit(submitregistration)}>
                           <div class="row">
                              <div class="col-xl-12 col-lg-12">
                                 <input type="text" name="p_name" placeholder="Enter your name"  {...register("p_name", { required: "name is mandatory"})} required onChange={(e)=>name(e.target.value)} />
                                 <span> <span className="error">{errors.p_name?.message}</span></span>
                              </div><br /><br />
                              <div class="col-xl-12 col-lg-12">
                                 <input type="email" placeholder="Enter your email" required onChange={(e)=>email(e.target.value)}/>
                                 <span></span>
                              </div>
                              <div class="col-xl-12 col-lg-12" >
                  
                        <select class="form-control"  placeholder="Your Department" required onChange={(e)=>department(e.target.value)}>
                        <option value="1">CSE</option>
                          <option value="2">IT</option>
						  <option value="3" >Medical</option>
                          <option value="4">Law</option>
						  <option value="5">Management</option>
						  <option value="6">polytechnic</option>
                    <option value="7">Pharmacy</option>
                    <option value="8">Applied Science</option>
              <option value="9">Humanities & Science</option>
						  
              
						  
                        </select>
                        <span></span>&nbsp;
                      </div>
                              <div class="col-xl-12 col-lg-12">
                                 <input type="text" placeholder="Enter your mobile number" onChange={(e)=>mob(e.target.value)} />

                                 <span></span>
                              </div><br /><br />





                              <div class="col-xl-12 col-lg-12">
                                 <input type="number" placeholder="enter your age" onChange={(e)=>age(e.target.value)} />
                                 <span></span>
                              </div>
                              <div class="col-xl-12  col-lg-12">

                                 <div class="genders" style={{paddingTop:"20px",paddingBottom:"20px"}}>
                                    <label  >Gender :
                                    <input type="radio" style={{ width: "20%  " }} name="Gender" value="Male" onChange={(e)=>gender(e.target.value)} /> <div class="gen">Male</div> 
                                    <input type="radio" style={{ width: "20% " }} name="Gender" value="Female" onChange={(e)=>gender(e.target.value)} /><div class="gen">Female</div> 
                                    </label>
                                    </div>
                                    </div>
                                   
                                    <label style={{paddingLeft: "18px;"}}>ID Proof</label>
                                    <div class="col-xl-12 col-lg-12">
                                 <input type="file" placeholder="Enter only images" onChange={(e)=>idproof(e.target.files[0])} />
                                 <span></span>
                              </div><br /><br />
                                 <div class="col-xl-12 col-lg-12">
                                 <input type="password" placeholder="Enter your password"   {...register("p_password", { required: "password is mandatory"})} required onChange={(e)=>password(e.target.value)} />

                               
                                 <span> {errors.p_password && <span className="error">{errors.p_password.message}</span>}</span>
                              </div><br /><br />
                              
                                 <div class="col-xl-12 col-lg-12">
                                    <button type="submit" >Registration</button>
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
} export default Registration