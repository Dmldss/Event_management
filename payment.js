import {useState , useEffect}from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import e from "cors";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Payment(){
  
    
    const location= useLocation();

    const e_id= location.state.e_id;
    const [p_name ,name]=useState('');
const [p_mob,mobile]=useState('');
const [p_email,email]=useState('');
const [list ,Setlist]= useState([]);
const [initval,orignalpriceproduct]=useState();
const [qty,setpersonqty]=useState();
const [num , setnum]= useState("1");
const [currentval,setmainnum]=useState();
let user = JSON.parse(sessionStorage.getItem('login_data'));
var p_id= user.p_id;
    
     









    useEffect(() => {
        Axios.get('http://localhost:1137/api/eventfetch',{params:{e_id:e_id }}).then((response) => {
         orignalpriceproduct(response.data[0].e_price);
        setmainnum(response.data[0].e_price);
        setpersonqty(response.data[0].e_limit)
         
            Setlist(response.data);
        })
    },[]);





    const handlechange=(e)=>{
   var newnum = e.target.value;
   setnum(newnum);
     
      
     if(newnum>qty){

      toast.error('That much seats are not avaliable',{
         position: 'top-right',
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
     });
      setnum(1)
     }else{
      const b= initval;
      const currentval= b * newnum;
      setmainnum(Number(currentval));
     }
  
    }

    const mainpriceproduct=(e)=>{
      setmainnum(e.target.value)
}





var submitpayment=(e_id)=>{
   let usr = JSON.parse(sessionStorage.getItem('login_data'));
   var merchant_order_id = Math.floor(Math.random() * 100);
   var pid=usr.p_id;


   
  
 var opt = {  
 "key": "rzp_test_pprT1hILYYjDI7",
 "amount": currentval * 100, // 2000 paise = INR 20
 "name": "Rel-Event",
 "description": "Library",
 "currency" : "INR", 
 "netbanking" :true,
 prefill: {
            name: "Deavanshi",
            email: "devanshilothe80@gmail.com",
            contact: 9999999999,
          },
 notes:{
         soolegal_order_id: merchant_order_id,
       },
       
 "handler": function (response){
 
    
 
   Axios.post('http://localhost:1137/api/pay',
   {e_id:e_id,p_id:p_id,num:num,currentval:currentval,p_mob:p_mob,p_email:p_email,p_name:p_name}).then((response)=>{
       if(response.data.message)
       {
           alert(response.data.message);
         
       }
       else
       {
         window.location="/paymenthistory";
         
         toast.success('Payment Successfull',{
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
       
       }
   });
 
 
 },
 
 "theme": {
   "color": "#528FF0"
 
 }
 };
 
 var rzp1 = new window.Razorpay(opt);
 rzp1.open();
 

 }
  
  



    return(
        <>
        
        <div class="contact">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-xl-10 col-lg-10">
                     <div class="add-space section-title text-center">
                        <h2>Book Tickets!</h2>
                     </div>
                  </div>
               </div>
            
               <div class="row justify-content-center">
                  <div class="col-xl-8 col-lg-8">
                     <div class="contact-form">
                        <form>
                        { list.map((val) => {

                        
const inputTime = val.e_time;
const dateObj = new Date(inputTime);
// Format time as 02:02 AM/PM
const options = { hour: '2-digit', minute: '2-digit', hour12: true };
const formattedTime = dateObj.toLocaleTimeString('en-US', options);
console.log(formattedTime);

                            return (
                                <>
                      
                      <div >
                            <div className="subscribe-newsletter" style={{ padding: "60px" }}>
                                <div className="container">
                              
                                    <div className="row justify-content-start">
                                        <div className="col-xl-10 col-lg-1">
                                            <div className="add-space section-title text-centre">
                                                <h2 style={{marginRight:"300px"}}> {val.e_name}</h2>
                                                <div class="row justify-content-centre">
                <div class="col-xl-8 col-lg-8">
                    <div class="form">
                          
                      <h4 style={{color:"white",textAlign:"centre"}}>Date : {new Date(val.e_date).toISOString().split("T")[0]}</h4>
                           
                              
                              <h4 style={{color:"white",textAlign:"centre"}}>Time : {val.e_time}</h4>
                              <h4 style={{color:"white",textAlign:"centre"}}>Seats : {val.e_limit}</h4>
                             <h4 style={{color:"white",textAlign:"centre"}}>Price : {val.e_price}</h4>
                              
                   
                                 
                            
                              
                              <div class="col-xl-12 col-lg-12" >
                                 <input type="text"  id="p_name" placeholder="Enter your name" onChange={(e)=>name(e.target.value)}/>
                                        <span></span>
                                 <span></span>
                              </div>
                              <div class="col-xl-12 col-lg-12">
                                 <input type="text" id="p_email" placeholder="Enter your email" onChange={(e)=>email(e.target.value)}/>
                                        <span></span>
                                 <span></span>
                              </div>
                              <div class="col-xl-12 col-lg-12">
                                 <input type="text" id="p_mob" placeholder="Enter your mob" onChange={(e)=>mobile(e.target.value)}/>
                                 <span></span>
                              </div>
                              <div class="col-xl-12 col-lg-12">
                                 <input type="text" id="no_participants" placeholder="Number of participants"   value={num} onChange={handlechange}/>
                                 <span></span>
                              </div>
                              <div class ="counterupdater">
                              <label style={{textAlign:"left"}}><h6>Price:</h6></label><input type="text" class="mainvalue"  id="orgval" value={initval}  />   




                              <label style={{textAlign:"left"}}><h6>Total Price::</h6></label><input type="text" class="mainvalue" id="productval"  value={currentval}  onChange={mainpriceproduct} />



</div>


                             
                              
                                 <div class="col-xl-12 col-lg-12">
                                 <button type="button" onClick={() => submitpayment(val.e_id, val.totalamt ,val.limitperson)} >Pay</button>
                                 </div>
                             
                                
                                    
                    </div>
                </div>
            </div>
            </div>
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
                            )})}    
     
                              
                              
                        </form>
                     </div>
                  </div>
               </div>
                     
                              
        </div>
        </div>


             
        </>
    )
}export default Payment