var mysql = require("mysql");
var express = require('express');
 var bodyParser = require("body-parser");
 const cors = require('cors');
const nodemailer = require('nodemailer')
const multer = require("multer");
const app = express();
const path = require('path')

// Enable CORS for all routes
app.use(cors());
app.use("/public",express.static("public"))

 
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended:true}))

 app.listen(1137);
 const stroage =multer.diskStorage({
  destination:path.join(__dirname, './public/'),
  filename: function(req, file, callback){
    callback(null, Date.now () +'-'+ path.extname(file.originalname))
  }
 })

 var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "event_management",
  });


/////////////feedback///
app.post('/api/feedback',(req, res ) => {
  var p_name = req.body.p_name;

  var p_mob = req.body.p_mob;
  var p_email= req.body.p_email;
  var p_subject= req.body.p_subject;

  var feedback_msg= req.body.feedback_msg;

  const ins="Insert into feedbacks(feedback_msg,p_name,p_email,p_subject,p_mob) values (?,?,?,?,?)";
  con.query(ins,[feedback_msg,p_name,p_email,p_subject,p_mob]);
  res.json("");
});
/////////////registration///
app.post('/api/registration',(req, res)=> {
  let upload = multer({ storage: stroage}).single('p_id_proof');
  upload(req, res, function (err){
    if(!req.file){
      console.log("not found");
    }
    else{
      
   
  var p_name = req.body.p_name;
 
  var p_email =req.body.p_email;
  var p_password =req.body.p_password;
  
  var p_gender = req.body.p_gender;
  var p_age = req.body.p_age;
  var p_mob = req.body.p_mob;
  var p_department = req.body.p_department;
  var p_id_proof = req.file.filename;

  const ins="Insert into registration(p_name,p_email,p_password,p_gender,p_age,p_mob,p_id_proof,p_department) values (?,?,?,?,?,?,?,?)";
  con.query(ins,[p_name,p_email,p_password,p_gender,p_age,p_mob,p_id_proof,p_department]);
  res.json("");
    }
  }
  )
});
app.post('/api/login',(req, res ) => {
  
  var p_email = req.body.p_email;
 
  var p_password= req.body.p_password;

  
  const sel="Select * From registration where p_email=? and p_password=? ";
  con.query(sel,[p_email,p_password],(err, result)=>{
    console.log(result)
    if(result.length > 0){
      res.send(result);

    }
    else{
      res.send({msg:"wrong email id & password"});

    }
  });

 
});
app.post('/api/admin_login',(req, res )=>{
  
  var a_email = req.body.a_email;
  console.log(a_email)
  var a_password= req.body.a_password;
  
  
  const sel="Select* From admin_login where a_email= ? and a_password= ? ";
  con.query(sel,[a_email,a_password],(err,result)=>{
    
    if(result.length>0){
 
      res.send(result);

    }
    else{
      res.send({msg:"wrong email id & password"});

    }
  });

 
});

app.post('/api/event',(req, res)=> {
  let upload = multer({ storage: stroage}).single('e_image');
  upload(req, res, function (err){
    if(!req.file){
      console.log("file not found")
    }
    else{
      console.log("1")
   
  var e_name = req.body.e_name;
  
  var e_type =req.body.e_type;
  var e_date = req.body.e_date;
  var e_time = req.body.e_time;

  var e_department = req.body.e_department;
  
  var e_image = req.file.filename;
  var e_limit = req.body.e_limit;
  var e_description1 = req.body.e_description1;
  var e_description2 = req.body.e_description2;
  var e_price = req.body.e_price;

  

    
    const ins="Insert into event(e_name,e_type,e_date,e_time,e_department,e_image,e_limit,e_description1,e_description2,e_price) values (?,?,?,?,?,?,?,?,?,?)";
  con.query(ins,[e_name,e_type,e_date,e_time,e_department,e_image,e_limit,e_description1,e_description2,e_price]);
    
      
      console.log(e_department)
const  sel ="SELECT p_email FROM registration WHERE p_department=? "
con.query(sel,[e_department],(err, result)=>{
  if(result){
  

  const emails = result.map(row => row.p_email);
console.log(emails)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "growsmartmsu@gmail.com",
      pass: "rjydfxwgcazqdzyn",
    },
  });

  emails.forEach(email => {
    const message = {
      from: "growsmartmsu@gmail.com",
      to: "devanshilothe80@gmail.com",
      subject: "Upcome Events",
      text: "hello this email is to inform you about upcoming event of your department  ,Event Name:"+ e_name +"!"+"\n",
    };

    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        
        res.send()
        console.log("Email sent:", info.response);
      }
    });
  });}
})



      
   
  
    }})
  })




  

  
  
app.post('/api/managegallery',(req, res)=> {
  let upload = multer({ storage: stroage}).single('g_pic');
  upload(req, res, function (err){
    if(!req.file){
      console.log("not found");
    }
    else{
      
   
  var g_pic = req.file.filename;
  var g_name =req.body.g_name;
  var g_date = req.body.g_date;

  var g_description1 = req.body.g_description1;
  var g_description2 = req.body.g_description2;
  
    const ins="Insert into gallery_management(g_pic,g_name,g_date,g_description1,g_description2) values (?,?,?,?,?)";
  con.query(ins,[g_pic,g_name,g_date,g_description1,g_description2,]);
  res.json("");
    }
  }
  )
});

app.get('/api/fetchgallery',(req,res)=>{

  const sel = "select * from gallery_management";
 
  con.query(sel,(err,result)=>{
    console.log(result)
    res.send(result);
  })
})

app.get('/api/eventfetch',(req,res)=>{
  const e_id=req.query.e_id;

  const sel = "select * from event where e_id= ?";
 // console.log(sel);
  con.query(sel,[e_id],(err,result)=>{
   // console.log(result)
    res.send(result);
  })
})

app.get('/api/eventlist',(req,res)=>{
  //console.log("hii");
    const sel = "select * from event";
   // console.log(sel);
    con.query(sel,(err,result)=>{
     // console.log(result)
      res.send(result);
    })
  })

  app.post('/api/payment',(req, res ) => {
    var p_name = req.body.p_name;
  
    var p_email = req.body.p_email;
    var p_mob= req.body.p_mob;
    console.log(p_mob)
    var no_participants = req.body.no_participants;
    var p_id= req.body.p_id;
    var e_id= req.body.e_id;
   
   
  
    const ins="Insert into payment(p_name,p_email,p_mob,no_participants,p_id,e_id) values (?,?,?,?,?,?)";
    con.query(ins,[p_name,p_email,p_mob,no_participants,p_id,e_id],(err,result)=>{
      if(result.length>0){
  
              
        console.log("3")
        res.send(result);
     
        


      console.log("4")
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          auth: {
              user: "devanshilothe80@gmail.com",
              pass: "lmuw wyct dnqa kuce",
          },

    });

    const message={
      from:"devanshilothe80@gmail.com",
      to:p_email ,
      subject:"Payment details",
      text:"hello,"+ p_name +"!"+"\n"+" ,"+mob+"!" +"\n"+","+ no_participants +"!"+"\n"+","+ price +"!"+"\n"+"  Your Password is--->>"+password+"<<--- .",
      
      
      
       };
       transporter.sendMail(message,(error,info)=>{
        if(error){
          console.error(error);
      
        }else{
          res.send(result);
          console.log("email sent:",info.res);
        }
      
        
       });
      }else{
        res.send({msg:""})
      }
      })  
       

    })
  app.get('/api/profile',(req,res)=>{
  
    let p_id = req.query.p_id;
   
      const sel = "select * from registration where p_id =?";
      con.query(sel,[p_id],(err,result)=>{
    
        res.send(result);
      })
    })

    app.post('/api/change',(req,res)=>{
  
      let p_id = req.query.p_id;
      let currentpass =req.query.currentpass;
      let newpass=req.query.newpass;
 
  
        const sel = "select * from registration where p_id =? and p_password=?";
        con.query(sel,[p_id,currentpass],(err,result)=>{
    
          if(result.length>0){
         
            const updt="update registration SET p_password=? where p_id=? and p_password=?"
            con.query(updt,[ newpass,p_id,currentpass],(err,result)=>{
              if(result){
                res.send();
              }
  
            })
  
          }else{
            res.send()
          }
          
      
          
        })
      })
      app.get('/api/manageuser',(req,res)=>{
      const sel = "select * from registration";
      con.query(sel,(err,result)=>{
           res.send(result);
          })
        })

        app.get('/api/feedback',(req,res)=>{
          const sel = "select * from feedbacks";
          con.query(sel,(err,result)=>{
               res.send(result);
              })
            })



            app.post('/api/pay',(req, res ) => {
              console.log("Api callls")
              var  e_id= req.body.e_id;
           
              var p_id = req.body.p_id;
              
              var p_mob = req.body.p_mob;
              
              var limitperson = req.body.num;
             
              var p_name = req.body.p_name;
             
              var p_email = req.body.p_email;

              var totalamt= req.body.currentval;
             console.log(totalamt)
              
            
              const ins="Insert into payment(e_id,p_id,p_mob,no_participants,p_name,p_email,e_price) values (?,?,?,?,?,?,?)";
              con.query(ins,[e_id,p_id,p_mob,limitperson,p_name,p_email,totalamt])
            
               
                  
          
          
                  const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    auth: {
                        user: "devanshilothe80@gmail.com",
                        pass: "lmuw wyct dnqa kuce",
                    },
          
              });
          
              const message={
                from:"devanshilothe80@gmail.com",
                to:p_email ,
                subject:"Payment details",
                text:"hello, Name->"+ p_name +"!"+"\n"+" ,Mobile Number->"+p_mob+"!" +"\n"+",Booked Seats->"+ limitperson +"!"+"\n"+",Total Payment"+ totalamt +"!"+"\n<<--- .",
                
                
                
                 };
                 transporter.sendMail(message,(error,info)=>{
                  if(error){
                    console.error(error);
                
                  }else{
                    res.send(result);
                    console.log("email sent:",info.res);
                  }
                
                  
                 });
             
  
           

              const updt="UPDATE event SET e_limit = e_limit - ?  where  e_id=?"
              con.query(updt,[limitperson,e_id]);

              
              

            });
         
            app.post('/api/sendcart',(req, res ) => {
              var  e_id= req.body.e_id;
           
              var p_id = req.body.p_id;
             
              
            
              const ins="Insert into cart(e_id,p_id) values (?,?)";
              con.query(ins,[e_id,p_id]);
              res.json("");
            });


            app.get('/api/carto',(req,res)=>{
         
              var p_id =req.query.p_id;
              
             
              const sel = "SELECT a.*, b.* from cart as a ,event as b where a.e_id =b.e_id and a.p_id=?;";
              con.query(sel,[p_id],(err,result)=>{
                
                   res.send(result);
                  })
                })

                app.post('/api/update',(req, res ) => {
                
                  var  c_id= req.body.id;
               
                  var c_quanity = req.body.newnum;
                  
              
                 
                  const updt="UPDATE cart SET c_quanity=? where c_id = ?;";
                  con.query(updt,[c_quanity,c_id]);
                  res.json("");
                });
                app.post('/api/checkout',(req, res ) => {
               
                 var p_id = req.body.p_id;
                

                 console.log(p_id)
                 
                
                 let payment_odr_id=Math.floor(100000 + Math.random() * 900000);
                 
                 
               
                
                  const ins="Insert into payment(p_id,e_id,no_participants,p_name,p_email,p_mob) SELECT a.p_id ,a.e_id,a.c_quanity,r.p_name,r.p_email,r.p_mob From cart a LEFT JOIN registration r ON a.p_id=r.p_id LEFT JOIN payment b ON a.p_id=b.p_id AND a.e_id=b.e_id AND a.c_quanity=b.no_participants AND r.p_name=b.p_name AND r.p_email=b.p_email AND r.p_mob=b.p_mob WHERE a.p_id=?"
                  con.query(ins,[p_id],(err,result)=>{
                   
                    if(err){
                      res.send({msg:"error occure"})
                            }
                            else{

                              const del = "DELETE FROM cart WHERE p_id = ? "
                              con.query(del,[p_id],(err,result)=>{
                                  if(result){
                                      res.send(result);
                                  }
                                  else{
                                    res.send({
                                        msg:"something wrong"
                                    })
                                  
                                  
                                  } })

                
                }}
                
                
                );
              
                const updt="UPDATE event SET e_limit = e_limit - ?  where  e_id=?"
                con.query(updt,[limitperson,e_id]);
  
                
                res.json("");})
                app.post('/api/fill',(req, res ) => {
                  var p_name = req.body.p_name;
                  var p_mob = req.body.p_mob;
                  var p_email= req.body.p_email;
                  var e_price= req.body.e_price;
                  
                  
                  
                
                  const ins="Insert into payment((p_id,e_id,p_name,p_email,p_mob,e_price) values (?,?,?,?)";
                  con.query(ins,[p_id,e_id,p_name,p_email,p_mob,e_price]);
                  res.json("");
                });
    
                app.get('/api/getgallery',(req,res)=>{
                  const sel = "select * from gallery_management";
                  con.query(sel,(err,result)=>{
                       res.send(result);
                      })
                    })
            
                    app.get('/api/getevent',(req,res)=>{
                      const sel = "select * from event where status=1";
                      con.query(sel,(err,result)=>{
                           res.send(result);
                          })
                        })
                        app.get('/api/getpayment',(req,res)=>{
                          var p_id =req.query.p_id;
                          const sel = "SELECT a.*, b.* from payment as a ,event as b where a.e_id =b.e_id ;";
                          con.query(sel,[p_id],(err,result)=>{
                               res.send(result);
                              })
                            })
                            app.post('/api/deletepayment',(req, res ) => {
                              var payment_id = req.body.payment_id;
                              console.log(payment_id);
                              
                              
                            
                              const del = "DELETE FROM payment WHERE payment_id = ? "
                              con.query(del,[payment_id]);
                              res.json("");
                            });

                            app.post('/api/statusevent',(req, res ) => {
                              var e_id = req.body.e_id;
                            console.log(e_id)
                              
                              
                              
                            
                              const updt = "UPDATE event SET status = 0 where  e_id=?  "
                              con.query(updt,[e_id]);
                              res.json("");
                            });

                            app.post('/api/deletegallery',(req, res ) => {
                              var g_id = req.body.g_id;
                             
                              
                              
                            
                              const del = "DELETE FROM gallery_management WHERE g_id = ? "
                              con.query(del,[g_id]);
                              res.json("");
                            });

                            app.post('/api/deleteuser',(req, res ) => {
                              var p_id = req.body.p_id;
                              
                              
                              
                            
                              const del = "DELETE FROM registration WHERE p_id = ? "
                              con.query(del,[p_id]);
                              res.json("");
                            });

                            app.post('/api/deletefeedback',(req, res ) => {
                              var p_name = req.body.p_name;
                              
                              
                              
                            
                              const del = "DELETE FROM feedbacks WHERE p_name = ? "
                              con.query(del,[p_name]);
                              res.json("");
                            });

                            app.post('/api/edit_event',(req, res ) => {
                              var e_id = req.body.e_id;
                              
                              
                            
                              const sel = "select * from event where e_id = ? "
                              con.query(sel,[e_id],(err,result)=>{
                             
                                res.send(result);
                              });
                              
                            });
                            
                            app.post('/api/editevent',(req, res)=> {
                              let upload = multer({ storage: stroage}).single('e_image');
                              upload(req, res, function (err){                              
                              var e_id = req.body.e_id;                            
                              var e_name = req.body.e_name;                              
                              var e_type =req.body.e_type;
                              var e_date = req.body.e_date;
                              var e_time = req.body.e_time;                            
                              var e_department = req.body.e_department;                            
                              var e_image = req.file ? req.file.filename : null;                          
                              var e_limit = req.body.e_limit;
                              var e_description1 = req.body.e_description1;
                              var e_description2 = req.body.e_description2;
                              var e_price = req.body.e_price;

                              if(!req.file)
                              {
                             
                                const updt="UPDATE event SET e_name=?,e_type=?,e_date=?,e_time=?,e_department=?,e_limit=?,e_description1=?,e_description2=?,e_price=? WHERE e_id=? ";
                                con.query(updt,[e_name,e_type,e_date,e_time,e_department,e_limit,e_description1,e_description2,e_price,e_id]);
                              }

else{
                             const updt="UPDATE event SET e_name=?,e_type=?,e_date=?,e_time=?,e_department=?,e_image=?,e_limit=?,e_description1=?,e_description2=?,e_price=? WHERE e_id=? ";
                              con.query(updt,[e_name,e_type,e_date,e_time,e_department,e_image,e_limit,e_description1,e_description2,e_price,e_id]);
}
                              res.json("");
                             // }
                              }
                              )
                            });



                            app.post('/api/edit_gallery',(req, res ) => {
                              var g_id = req.body.g_id;
                             
                              
                              
                            
                              const sel = "select * from gallery_management where g_id = ? "
                              con.query(sel,[g_id],(err,result)=>{
                               
                                res.send(result);
                              });
                              
                            });


                            app.post('/api/editgallery',(req, res)=> {
                              let upload = multer({ storage: stroage}).single('g_pic');
                              upload(req, res, function (err){                              
                              var g_id = req.body.g_id;                            
                              var g_name = req.body.g_name;                              
                              var g_date = req.body.g_date;                                             
                                                   
                              var g_pic = req.file ? req.file.filename : null;                          
                              
                              if(!req.file)
                              {
                             
                                const updt="UPDATE gallery_management SET g_name=?,g_date=? WHERE g_id=? ";
                                con.query(updt,[g_name,g_date,g_id]);
                              }

else{
                             const updt="UPDATE gallery_management SET g_name=?,g_date=?,g_pic=? WHERE g_id=? ";
                             con.query(updt,[g_name,g_date,g_pic,g_id]);
}
                              res.json("");
                             // }
                              }
                              )
                            });
                            app.get('/api/limito',(req,res)=>{
                             
                              var e_id =req.query.e_id;
                              var payment_id =req.query.p_id;
                              
                              
                              const sel = "SELECT  a.*, b.* from payment as a ,event as b where a.e_id =b.e_limit=15 ;SELECT e_id, SUM(no_participants) as total_participants FROM payment GROUP BY e_id; ";
                              con.query(sel,[payment_id,e_id],(err,result)=>{
                                
                                   res.send(result);
                                  })
                                })

                                app.get('/api/getpaymenthistory',(req,res)=>{
                                  
                                  var p_id =req.query.p_id;
                                 
                                  
                                  
                                  const sel = "SELECT a.*, b.* from payment as a ,event as b where a.e_id =b.e_id and a.p_id=? ";
                                  con.query(sel,[p_id],(err,result)=>{

                                       res.send(result);
                                   

                                      })
                                    })
                                     
                                    app.get('/api/eventlistwithcat',(req, res ) => {
                                      var id = req.query.id;
                                      
                                      
                                      
                                    
                                      const sel = "select * from event where e_department = ? "
                                      con.query(sel,[id],(err,result)=>{

                                        console.log(result)
                                        res.send(result);
                                      });
                                      
                                    });
                                    app.post('/api/deltefromcart',(req, res ) => {
                                      var c_id = req.body.c_id;
                                    
                                     
                                      
                                    
                                      const del = "DELETE FROM cart WHERE c_id = ? "
                                      con.query(del,[c_id]);
                                      res.json("");
                                    });
        app.post("/api/forgotpassword",(req,res)=>{

console.log("1")
          var a_email=req.body.a_email;
          const sel = "SELECT * FROM admin_login WHERE a_email = ? "
          console.log("2")

          con.query (sel,[a_email],(err,result)=>{

            if(result.length>0){

            
            console.log("3")
            res.send(result);
            var mail=result[0].a_email;
            var password = result[0].a_password
            var name=result[0].a_name

          console.log("4")
            const transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 587,
              auth: {
                  user: "devanshilothe80@gmail.com",
                  pass: "lmuw wyct dnqa kuce",
              },
          });
 const message={
from:"devanshilothe80@gmail.com",
to:mail ,
subject:"Event management",
text:"hello,"+ name +"!"+"\n"+"  Your Password is--->>"+password+"<<--- .",



 };
 transporter.sendMail(message,(error,info)=>{
  if(error){
    console.error(error);

  }else{
    res.send(result);
    console.log("email sent:",info.res);
  }

  
 });
}else{
  res.send({msg:""})
}
})  
 
})
app.post("/api/forgotpasswordu",(req,res)=>{

  console.log("1")
            var p_email=req.body.p_email;
            const sel = "SELECT * FROM registration WHERE p_email = ? "
            console.log("2")
  
            con.query (sel,[p_email],(err,result)=>{
  
              if(result.length>0){
  
              
              console.log("3")
              res.send(result);
              var mail=result[0].p_email;
              var password = result[0].p_password
              var name=result[0].p_name
  
            console.log("4")
              const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: "devanshilothe80@gmail.com",
                    pass: "lmuw wyct dnqa kuce",
                },
            });
   const message={
  from:"devanshilothe80@gmail.com",
  to:mail ,
  subject:"Password",
  text:"hello,"+ name +"!"+"\n"+"  Your Password is--->>"+password+"<<--- .",
  
  
  
   };
   transporter.sendMail(message,(error,info)=>{
    if(error){
      console.error(error);
  
    }else{
      res.send(result);
      console.log("email sent:",info.res);
    }
  
    
   });
  }else{
    res.send({msg:""})
  }
  })  
   
  })
  app.post('/api/no',(req, res ) => {
    var c_id = req.body.c_id;
  
   
    
  
   
    
    res.json("");
  });



  app.get('/api/count', (req, res) => {
    const e_id=req.query.e_id;
    const sel= 'SELECT COUNT(*) AS count FROM event';
    con.query(sel,[e_id],(err,result)=>{
      console.log(result)
      res.send(result);
    })
  })
  
  app.get('/api/countone', (req, res) => {
    const feedback_id=req.query.feedback_id;
    const sel= 'SELECT COUNT(*) AS count FROM feedbacks';
    con.query(sel,[feedback_id],(err,result)=>{
      console.log(result)
      res.send(result);
    })
  })
  

  app.get('/api/countwo', (req, res) => {
    const payment_id=req.query.payment_id;
    const sel= 'SELECT COUNT(*) AS count FROM payment';
    con.query(sel,[payment_id],(err,result)=>{
      console.log(result)
      res.send(result);
    })
  })
  
  
  

  con.connect(function (err) {
    if (err) {
      console.error("Error connecting to database:", err);
      return;
    }
    console.log("Connected to the database!");
  });