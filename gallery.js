import React from "react";
import Axios from "axios";
import {useState, useEffect} from "react";

function Gallery(){
    const[list, Setlist]= useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1137/api/fetchgallery').then((response)=>{
            Setlist(response.data)
        })
    },[]);
    return(
        <>
        <div class="team-dj top-dj-page">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-8">
                    <div class="add-space section-title text-center">
                        <h2>Our Past Events</h2>
                    </div>
                </div>
            </div>
            <div class ="row">
                    { list.map((val) => {
                        return(
                            <>
                            
<div class="col-xl-4 col-lg-4 col-sm-6">
                       
                       <div class="box_main">
                       <input type="hidden" value={val.g_id}/>
                      <h4 style={{color:"white"}}>{val.g_name}</h4>
                        
                      <h4 style={{color:"white"}}>Date:{new Date(val.g_date).toISOString().split("T")[0]}</h4>

                        
        
                    <div class="single-img">
                       
                        <img src={"http://localhost:1137/public/"+val.g_pic}  style={{height:'300px',width:'300px'}} alt="" />
                       
                       
                        
                        </div>
                    </div>
                </div>
               
              

                            </>
                    
    )})}
    </div>               
                 
                   
                </div>
            </div>
            
        
     
     
        
        </>
    )
}export default Gallery