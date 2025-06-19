import React from "react";
function Feedback(){
    return(
        <>
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="page-header">
              <h3 class="page-title"> Add events </h3>
              
              
            </div>
            <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Add Event Details</h4>
                    <p class="card-description">  </p>
                    <form class="forms-sample">
                      <div class="form-group">
                        <label for="exampleInputName1">Event Name</label>
                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Event Name"/>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail3">Event Type</label>
                        <input type="type" class="form-control" id="exampleInputEmail3" placeholder="Event Type"/>
                      </div>
                     <div class="form-group">
					 <label for="selectedDate">Date of Event:</label>
                     <input type="date" id="selectedDate" class="form-control" name="selectedDate" pattern="\d{1,2}/\d{1,2}/\d{2}" required/> 
					 </div>
					 <div class="form-group">
                        <label for="exampleInputName1">Time of Event</label>
                        <input type="time" class="form-control" id="exampleInputName1" placeholder="Event time"/>
                      </div>
					 
                      <div class="form-group">
                        <label for="exampleSelectGender">Department</label>
                        <select class="form-control" id="exampleSelectGender">
                          <option>CSE</option>
                          <option>IT</option>
						  <option>Medical</option>
                          <option>Law</option>
						  <option>Management</option>
						  <option>polytechnic</option>
						  
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Picture</label>
                        <input type="file" name="img[]" class="file-upload-default"/>
                        <div class="input-group col-xs-12">
                          <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image"/>
                          <span class="input-group-append">
                            <button class="file-upload-browse btn btn-gradient-primary" type="button">Upload</button>
                          </span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputCity1">Limit of participants</label>
                        <input type="text" class="form-control" id="exampleInputCity1" placeholder="Limit"/>
                      </div>
                      <div class="form-group">
                        <label for="exampleTextarea1">Description</label>
                        <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                      </div>
					  <div class="form-group">
                        <label for="exampleTextarea1">Description</label>
                        <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                      </div>
					 <div class="form-group">
                        <label for="exampleInputName1">Price</label>
                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Price"/>
                      </div>
                      <button type="submit" class="btn btn-gradient-primary me-2">Submit</button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
              </div>
              </div>
        </>


    )
}export default Feedback