import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Items from "./pages/Items"
import Packages from "./pages/Packages"

import SalesOrder from "./pages/SalesOrder"

import Welcome from "./pages/Welcome"

function App() {
  return (
   <Router>
<>
  <Header/>
 

     
    <Routes>
    
         {/* <Route path="/home" element={<Sidebar/>} exact/> */}
         <Route path="/" element={<Welcome/>} exact/>
     
         {/* <Route path="/bills" element={<Bills/>} exact/> */}
         {/* <Route path="/invoice" element={<Invoice/>} exact/> */}
           <Route path="/dashboard" element={<Dashboard/>} exact/>
       <Route path="/items" element={<Items/>} exact/>
       <Route path="/packages" element={<Packages/>} exact/>
          {/* <Route path="/purchase-order" element={<PurchaseOrder/>} exact/> */}
          <Route path="/sales-order" element={<SalesOrder/>} exact/>
           {/* <Route path="/reports" element={<Reports/>} exact/> */}
           
        </Routes>
    
    
  <Sidebar/>
  {/* <Dashboard/> */}

   </>
   </Router>
  );
}

export default App
