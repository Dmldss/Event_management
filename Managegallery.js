import React from "react";
function Managegallery(){
    return(
        <>
         <div class="col-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Add Event Details</h4>
                    <p class="card-description">  </p>
                    <form class="forms-sample">
                      
                      
                    
					
                      
                      <div class="form-group">
                        <label>Picture</label>
                        <input type="file" name="img[]" class="file-upload-default"/>
                        <div class="input-group col-xs-6">
                          <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image"/>
                          <span class="input-group-append">
                            <button class="file-upload-browse btn btn-gradient-primary" type="button">Upload</button>
                          </span>
                        </div>
                      </div>
					  <div class="form-group">
                        <label for="exampleInputName1">Event Name</label>
                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Event Name"/>
                      </div>
                      
                      <div class="form-group">
                        <label for="exampleTextarea1">Description</label>
                        <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                      </div>
					  <div class="form-group">
                        <label for="exampleTextarea1">Description</label>
                        <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                      </div>
					 
                      <button type="submit" class="btn btn-gradient-primary me-2">Submit</button>
                      
                    </form>
                  </div>
                </div>
              </div>
        </>
    )
}export default Managegallery