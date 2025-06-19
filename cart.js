import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart(){
  

var sum=0;
  const [list, Setlist] = useState(['']);
  const user = JSON.parse(sessionStorage.getItem("login_data"));
  const p_id = user.p_id;
  const [initval,orignalpriceproduct]=useState();
const [num , setnum]= useState('1');
const [currentval,setmainnum]=useState();
const [c_id,id]=useState();
const [c_quanity,quanity]=useState();
const [p_name ,name]=useState('');
const [p_mob,mobile]=useState('');
const [p_email,email]=useState('');
const [e_price ,price]=useState('');
const [qty,setpersonqty]=useState();
const e_id = user.e_id;
const [e_limit,limit]=useState();








    
    
    useEffect(() => {
        Axios.get('http://localhost:1137/api/carto',{params:{p_id:p_id}}).then((response) => {
   
   
            Setlist(response.data);

        })
    },[]);
  
    

const checkout =()=>{

}

    const incrnum=(id,num)=>{
     
if(num<10 ){
var b=Number(num)+1;
            var c =Number(initval);
const currentval=b * c;



setnum(Number(num)+1);
setmainnum(Number(currentval));
var newnum= Number(num)+1

 



Axios.post('http://localhost:1137/api/update',{id:id,newnum:newnum}).then((response) => {
        
        

        
          window.location="/cart  "

      })

    }

}
const decrnum=(id,num)=>{
       if(num>1){
        var newnum= Number(num)-1
        
 Axios.post('http://localhost:1137/api/update',{
  id: id,
  newnum: newnum,
     }).then((response) => {
      window.location="/cart  "
      
        
  })
     
}
}
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

var submitpayment=(p_id)=>{
  let usr = JSON.parse(sessionStorage.getItem('login_data'));
  var merchant_order_id = Math.floor(Math.random() * 100);
 

var opt = {  
"key": "rzp_test_pprT1hILYYjDI7",
"amount": sum * 100, // 2000 paise = INR 20
"name": "IT",
"description": "Library",
"currency" : "INR", 
"netbanking" :true,
prefill: {
           name: "Varun",
           email: "aminvarun3112@gmail.com",
           contact: 9664778204,
         },
notes:{
        soolegal_order_id: merchant_order_id,
      },
      
"handler": function (response){


Axios.post('http://localhost:1137/api/checkout',{p_id:p_id,c_id:c_id,e_id:e_id,e_limit:e_limit,c_quanity:c_quanity}).then((response) => {
  if(response.data.message)
  {
      alert(response.data.message);
    
  }
  else
  {
    
    toast.success('Successfull paid',{
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
function Deletecart(c_id){
            
  Axios.post('http://localhost:1137/api/deltefromcart', { c_id:c_id}).then((response) => {
   
      window.location="/cart"
      })
  }
  function no(c_id){
            
    Axios.post('http://localhost:1137/api/no').then((response) => {
     
    toast.error('there are no more seats avaliable',{
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
  });
        })
    }
  


    return(
        <>
          <div class="contact">
        <section class="h-100">
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">

        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black" style={{color:"white"}}> Cart</h3>
          
        </div>
       
        { list.map((val) => {
          

           
               
          return(
            <>
             
        <div class="card rounded-3 mb-5 cartbody">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">

              <Link to= "/event" state={{eid:val.e_id}}>
              
                <img src={"http://localhost:1137/public/"+val.e_image}
                  class="img-fluid rounded-3" alt=""/>
                    </Link>
              </div>
              
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">{val.e_name}</p>
               
                
             
              <p>Time: {val.e_time}</p>
              Price:<input type="text"  style={{color:"black",textAlign:"center"}}class="mainvalue" id="orgval" readOnly  value={val.e_price} onChange={ orignalpriceproduct} />


               
              </div>
              {val.e_limit==0 ?
              <>
Oops all seats are booked!!
              </>
              :<>
              
              <div class="col-md-3 col-lg-2 col-xl-2 "  style={{position: "absolute",
    top: "16px",
    marginLeft: "445px",
    width: "150px"
}}>
                <div className="noofpersons" >

                <h6>no of persons</h6>
                </div>
        
              </div>
        
            
              <div class="part-button" >
                                                

                                            <button type="submit"  onClick={()=>decrnum(val.c_id,val.c_quanity)} >-</button>
                                            </div>
              
              <div class="col-md-1 col-lg-1 col-xl-1 d-flex">
             
      
           
                 <input id="form1" min="0" name="quantity"  type="number"
                  class="form-control form-control-sm" readOnly  value={val.c_quanity} onChange={handlechange} />

                
              </div>
              <div class="part-button" >
                                         {val.e_limit==val.c_quanity ?
                                         <><button type="submit" onClick={no} >+</button></>:<>
                                            <button type="submit" onClick={()=>incrnum(val.c_id,val.c_quanity)} >+</button>
                                            </>}
                                            </div>
                                         
              <div class="col-md-1 col-lg-1 col-xl-1 d-flex">=</div>
                
              
              
              <div class="col-md-3 col-lg-2 col-xl-2 " style={{position:"relative",top:"-19px"}}>
                
                <div className="pricee">
              <h5>Total Amount</h5>
              
              </div>
              
              <input type="text"
                  class="form-control form-control-sm"   style={{textAlign:"center"}}   id="productval" readOnly value={val.c_quanity * val.e_price} onChange={mainpriceproduct}/>
                  </div>
                  </> }
                  <div>
                  <div class="contain">
                  <button class="btnuu " onClick={(e)=>Deletecart(val.c_id)}   >
                    
                        
                  <i class="fa fa-trash" aria-hidden="true"></i>
                                    </button> 
                                    </div>
                  </div>
              
            </div>
            
          </div>
        </div>
        
        </>
          )
        })}
        


        <div class="blog">
            <div class="tt" style={{display: "flex",
    justifyContent: "center"}}>
                <div class="row justify-content-right">
                    <div class="col-xl- 3 col-lg3">
                        <div class="add-space section-title text-right">
                           
                        </div>
                    </div>
                </div>
                <div class="center"  style={{width:"70%"}}>
        

                <div class="card rounded-3 cartbody" style={{width:"100%"}}>
          <div class="card-body " style={{display:"center"}}> 
                      
      
            <div class="">
                      
                            
            {list.map((val)=>{
                          //  <span class="eventor-name" style={{display:"inline-block",float:"left"}}><h6 >Name: {val.e_name}    <h6 style={{float:"right",position:"relative",left:"30vw"}}>price: {val.e_price}</h6></h6></span>   
                           {val.e_limit==0?
                          <></> :<>          
                          {sum=sum+(val.c_quanity * val.e_price)}    
                       </>   }
                                           return(
                                               <>
                                
                                   
                                <table style={{width:"100%"}}>
  <tr>
  {val.e_limit==0 ?
  <> <div class="part-button" style={{alignItems:"center",color:"white"}}/>
  </>:<>
    <td  style={{width:"90%"}}>  
     
      
    <h6 style={{display:"inline-block",float:"left",textAlign:"start"}}>Name: {val.e_name}</h6>
      
      
      </td>

<td >  </td>
<td >  </td>
<td >  </td>
  
  
      <td style={{width:"100%"}}> <h6 style={{textAlign:"end"}}  >{val.c_quanity * val.e_price} ₹ </h6></td>
      </> }
  </tr>


</table>    
                           
                                                        
                           
                            </>
                    )})}

                    
                     <h6 style={{textAlign:"end"}}> TotalAmount:          {sum} ₹ <br></br></h6>
                     
                     
                      <button type="button" style={{color:"black"}} onClick={() => submitpayment(p_id)}>Checkout</button>
                                </div>
                                </div>
                                </div>
                              
                                
                                
                           


       
       
</div>
</div>
</div>
     


      </div>
    </div>
  </div>
  
</section>



       
    </div>

    <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="login px-4 mx-auto mw-100">
                        <h5 class="text-center mb-4">Register Now</h5>
                       

                        <div class="form-group">
                                <label>Name</label>

                                <input type="text" class="form-control" id="firstname" placeholder="" required="" onChange={(e)=>name(e.target.value)}/>
                            </div>
<div class="form-group">
                                <label>Email</label>

                                <input type="text" class="form-control" id="email" placeholder="" required="" onChange={(e)=>email(e.target.value)}/>
                            </div>
<div class="form-group">
                                <label>Mobile number</label>

                                <input type="text" class="form-control" id="mobilenumber" placeholder="" required="" onChange={(e)=>mobile(e.target.value)}/>
                            </div>



</div>


<div class="form-group">
                               


                            </div>

                            
                         


                           

                            <button type="submit" class="btn btn-primary submit mb-4"   >Register</button>
                            <p class="text-center pb-4">
                                <a href="#">By clicking Register, I agree to your terms</a>
                            </p>
                       

                    </div>
                </div>

            </div>
        </div>
        </>
    )
}export default Cart