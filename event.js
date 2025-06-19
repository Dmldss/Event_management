import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Event() {
    const user = JSON.parse(sessionStorage.getItem("login_data"));
    const p_id = user ?user.p_id:null   ;
function addcart(e_id){
 

   
    Axios.post('http://localhost:1137/api/sendcart',{e_id:e_id,p_id:p_id}).then((response) => {
        toast.success('Added to cart',{
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    })
    
    }
     
   
    
   
    
    
    const [list, Setlist] = useState([]);
    const location= useLocation();
    const e_id= location.state.eid
    
    useEffect(() => {
        Axios.get('http://localhost:1137/api/eventfetch',{params:{e_id:e_id}}).then((response) => {
            Setlist(response.data);
            
        })

    },[]);


    
    return (
        <>
            <div class="breadcrump">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6">
                            <div class="breadcrump-content">
                            <a href="/"> <span class="page-name" >Home</span></a>
                                <span class="icon"><i class="fas fa-chevron-right"></i></span>
                                <span class="page-name">Event</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="about-venu">
        <div class="container">
            <div class="row">
                        { list.map((val) => {
                            
                            
                           


                            return (
                                <>



<div class="col-xl-6 col-lg-6">
                    <div class="part-img">
                    <img src={"http://localhost:1137/public/"+val.e_image} alt="" style={{width:"100%",height:"100%"}} />
                    {sessionStorage.getItem("login_data")==null ?
                                                (
                                                 <Link to= "/login" >
                                            <div class="part-button">
                                                <a href="#">Add to cart</a>
                                            </div>
                                            </Link>
                                            
                                                ):sessionStorage.getItem("login_data")!=null?(
                                                    val.e_limit== 0 ?(
                                                     
                                                     <div class="part-button" style={{alignItems:"center",color:"white"}}>
                                                    
                     
                     
                                                 seats
                                                    </div>
                                                
                                                    ):(
                    <button class="btn "onClick={(e)=>addcart(val.e_id)}   >
                    
                        
                    <i class="fa fa-heart" aria-hidden="true"></i>
                   
                                    </button>
                                                    )
                                                    ):null
                        }
                    </div>
                </div>
                
                <div class="col-xl-6 col-lg-6">
                    <div class="part-text">
                        <h3>{val.e_name}</h3>
                        
                        
                        <p >{val.e_description1}</p>
                                           
                                           
                                            <span class="poster"></span>
                                            <div class="meta-info">
                                           
                                           
                                            <p><i class="fa fa-calendar" aria-hidden="true"></i> : {new Date(val.e_date).toISOString().split("T")[0]}</p>
                                            <p><i class="fa fa-clock-o" aria-hidden="true"></i> : {val.e_time}</p>
                                            <p style={{color:"white"}}>Seats: {val.e_limit}</p>
                                            <p>price : {val.e_price}</p>
                                               
                            
                                                </div>
                                            
                                        
                                            {sessionStorage.getItem("login_data")==null  ?
                                                (
                                                 <Link to= "/login" >
                                            <div class="part-button">
                                              Buy Ticket
                                            </div>
                                            </Link>
                            ):sessionStorage.getItem("login_data")!=null?(
                               val.e_limit== 0 ?(
                                
                                <div class="part-button" style={{alignItems:"center",color:" #d34d94",fontSize:"20px"}}>
                               

        All seats are booked!!
                               </div>
                           
                               ):(
                                <Link to= "/payment" state={{e_id:val.e_id}}>
                                <div class="part-button" style={{alignItems:"center"}}>
                               

                              Buy Tickets
                               </div>
                           </Link>  
                               )
                            
                                                
                                                
                                               
                            ):null
                                            }
                                           
                                        </div>

                                    </div>
                                        
                    
                
                                        
                    </>
                )

              })}  
                                </div >
                    </div>










                    

                </div>
            </>
            )
    } export default Event

