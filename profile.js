import { useState, useEffect } from "react";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Profile() {

    const user = JSON.parse(sessionStorage.getItem("login_data"));
    const p_id = user.p_id;

    const [list, Setlist] = useState([]);





    useEffect(() => {
        Axios.get('http://localhost:1137/api/profile', { params: { p_id: p_id } }).then((response) => {
             

            Setlist(response.data);
        })
    }, []);

    const[currentpass, currentpassword] =useState();
    const[newpass, newpassword] =useState();

    const submit=()=>{

        if( newpass !== currentpass ){
          
            Axios.post('http://localhost:1137/api/change',null, {params: {p_id:p_id, currentpass:currentpass ,newpass: newpass}}).then((response)=>{
                if (response.data.msg){
                    toast.error('Unvalid Id or',{
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                }
                else{
                    toast.success('done',{
                        position: 'top-right',
                        autoClose: 3000,})
                    window.location="/"
                }
            })
        }
        else{
            toast.error('Both passwords are matching enter valid password',{
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }
    return (
        <>
            <div class="contact">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10 col-lg-10">
                            <div class="add-space section-title text-center">
                                <h2>Profile</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-xl-12 col-lg-12">
                            <div class="contact-form">
                                <form>
                                    {list.map((val) => {

                                        return (
                                            <>





                                                < center><h6>

                                                </h6>
                                                    <h1></h1>
                                                </center>
                                                <div class="align-w3" >
                                                    <form action="addnewparcelprocess.php" method="post" class="p-sm-3" enctype="multipart/form-data">
                                                        <div class="row">
                                                          

                                                            <div class="col-md-6">

                                                                <div class="form-group">
                                                                    <label for="recipient-email" class="col-form-label">Name:</label>
                                                                    <input type="text" class="form-control" placeholder="Your Destination" name="to_where" id="recipient-email" value={val.p_name} readOnly />

                                                                </div>

                                                                <div class="form-group">
                                                                    <label for="recipient-email" class="col-form-label">Email:</label>
                                                                    <input type="text" class="form-control" placeholder="Your Destination" name="to_where" id="recipient-email" value={val.p_email} readOnly />

                                                                </div>

                                                                <div class="form-group">
                                                                    <label for="recipient-email" class="col-form-label">Mob:</label>
                                                                    <input type="text" class="form-control" placeholder="Your Destination" name="to_where" id="recipient-email" value={val.p_mob} readOnly />

                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="recipient-email" class="col-form-label">Gender:</label>
                                                                    <input type="text" class="form-control" placeholder="Your Destination" name="to_where" id="recipient-email" value={val.p_gender} readOnly />

                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="recipient-email" class="col-form-label">Age:</label>
                                                                    <input type="text" class="form-control" placeholder="Your Destination" name="to_where" id="recipient-email" value={val.p_age} readOnly />

                                                                </div>

                                                            </div>


                                                            <div class="col-md-6" style={{borderLeft:'5px solid #e83e8c'}}>
                                                           <br/>
                                                           <br/>
                                                           <br/>
                                                            <div class="form-group">
                                                                    <label > Current Password:</label>
                                                                    <input type="text" onChange={(e)=>currentpassword(e.target.value)}   />

                                                                </div>
                                                                <div class="form-group">
                                                                    <label > New Password:</label>
                                                                    <input type="text" onChange={(e)=>newpassword(e.target.value)}  />

                                                                </div>

                                                           
                                                                
                                                                

                                                                
                                                                
                                                                
                                                                
                                                            


                                                            <div class="right-w3l">
                                                                <button type="button" class="form-control bg-theme" value="Submit" onClick={submit} >Submit</button>

                                                            </div>
                                                        </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                
                                                








                                            </>
                                        )
                                    })}



                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
} export default Profile