import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useLocation,useParams } from "react-router-dom";
import {Link} from "react-router-dom";
function Eventlist(){
    const [list, Setlist] = useState([]);
    const [list1, Setlist2] = useState([]);

    const {id}= useParams();

    useEffect(() => {
        
        if(id== null){

            Axios.get('http://localhost:1137/api/eventlist').then((response) => {
                Setlist(response.data)
            })
        }
        else{
           
            Axios.get('http://localhost:1137/api/eventlistwithcat',{ params: { id: id} }).then((response) => {
                Setlist(response.data)

                ////
                
            })

        }
      
        // Axios.get('http://localhost:1137/api/department').then((response) => {
        //     Setlist2(response.data)
        // })
       


    }, [id]);
  
    
   

   return(
    <> 
    <div class="blog">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-8">
                        <div class="add-space section-title text-center">
                            <h2>Event List</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
        

                        {list.map((val)=>{
                                           const inputTime = val.e_time;
                                           const dateObj = new Date(inputTime);
                                          
               
               const options = { hour: '2-digit', minute: '2-digit', hour12: true };
               const formattedTime= dateObj.toLocaleTimeString('en-US', options);
               
               
               
                    
                    return(
                        <>
                      <Link to= "/event" state={{eid:val.e_id}}>
                      <div class="about">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12">
                        <div class="about-area">
                            <div class="row no-gutters">
                                <div class="col-xl-6     col-lg-6">
                                    <div class="part-text">
                                        <h2>{val.e_name}</h2>
                                        
                                        <p>{val.e_description1.substring(20)}</p>
                                        <a href="/event">Read More!</a>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 d-xl-block d-lg-block d-none">  <img src={"http://localhost:1137/public/"+val.e_image} alt="" style={{width:"100%",height:"100%"}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                                
                           
                           
                        
                            </Link>
                            </>
                    )})}
                    </div>
                    </div>
                    </div>
                       </>
   )
}export default Eventlist
