import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Sidebar from './Components/sidebar';
import Login from './Pages/login';
import Dashboard from './Pages/dashboard';
import Manageusers from './Pages/manageusers';
import Managegallery from './Pages/Managegallery'
import Payment from './Pages/payment';
import Feedback from './Pages/Feedback';
import Event from './Pages/event';
import Updatevent from './Pages/updatevent';
import Updategallery from './Pages/updategallery';
import Forgotpassword from './Pages/forgotpassword';
import { ToastContainer, toast } from 'react-toastify';





function App() {
  return (
    <>
    {

      sessionStorage.getItem('admin_login') == null ?
      <>
      <Router>
      <ToastContainer />
      <Routes>
<Route exact path="/" element={<Login/>} />
<Route exact path="/forgotpassword" element={<Forgotpassword/>} />
</Routes>
</Router>


      </>
      :
      <>

      


 <Router>
  <div class="container-scroller">
 <Header/>
 <div class="container-fluid page-body-wrapper">
  <Sidebar/>
  <div class="main-panel">
  <Routes>
<Route exact path="/" element={<Dashboard/>} />
<Route exact path="/login" element={<Login/>} />
<Route exact path="/feedback" element={<Feedback/>} />
<Route exact path="/managegallery" element={<Managegallery/>} />
<Route exact path="/payment" element={<Payment/>} />
<Route exact path="/manageusers" element={<Manageusers/>} />
<Route exact path="/updategallery" element={<Updategallery/>} />
<Route exact path="/updatevent" element={<Updatevent/>} />
<Route exact path="/event" element={<Event/>} />
<Route exact path="/forgotpassword" element={<Forgotpassword/>} />

</Routes>
<Footer/>

    </div>

 
</div>
</div>
 </Router>

</>

    }
    </>




/* <>
<Router>
<Routes>
<Route exact path="" element={<Login/>} />


</Routes>
</Router>


</> */
  );
}

export default App;
