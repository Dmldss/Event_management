import React, { useState, useEffect } from "react";
import Axios from "axios";

function Paymenthistory() {
    const user = JSON.parse(sessionStorage.getItem("login_data"));
    const p_id = user.p_id;
var sum=0;
    const [list, setList] = useState([]);
    const [qty,setpersonqty]=useState();
    useEffect(() => {
        Axios.get('http://localhost:1137/api/getpaymenthistory', { params: { p_id: p_id } })
            .then((response) => {
                console.log("Response Data:", response.data);
                setpersonqty(response.data[0].e_limit)
                 // Log the response data
                setList(response.data);
            })
            .catch(error => {
                console.error("Error fetching payment history:", error);
            });
    }, []);

    return (
        <>
            <div className="countdown event-page">
                <div className="container" style={{ padding: "0.05px" }}>
                    <div className="row justify-content-xl-center justify-content-lg-center justify-content-center">
                        <div className="add-space section-title text-center">
                            <h2>Payment History</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {list && list.length > 0 ? (
                      
                    list.map((val, index) => (
                        
                        <div key={index}>
                            <div className="subscribe-newsletter" style={{ padding: "60px" }}>
                                <div className="container">
                              
                                    <div className="row justify-content-center">
                                        <div className="col-xl-10 col-lg-3">
                                            <div className="add-space section-title text-center">
                                                <h2>Event name: {val.e_name}</h2>
                                                <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-6">
                    <div class="form">
                   
                        
                        <h4 style={{color:"white"}}>Date of Payment : {new Date(val.payment_time).toISOString().split("T")[0]}</h4>
                        <h4 style={{color:"white"}}>Price of Event : {val.e_price}</h4>
                        <h4 style={{color:"white"}}>Number of Participants : {val.no_participants}</h4>
                        <h4 style={{color:"white"}}>Total Price :  {sum=(val.no_participants*val.e_price)}    </h4>

                    </div>
                </div>
                
            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    ))
                ) : (<div className="subscribe-newsletter" style={{ padding: "60px" }}>
                <div className="container">
                    <h2 style={{color:"white"}}>Nothing in payment history</h2>
                    </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Paymenthistory;
