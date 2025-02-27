import'./App.css';
import React,{useState} from 'react'
import TextForm from "./compoents/TextForm";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginSignup from './compoents/LoginSignup/LoginSignup';


function App() {
  const[mode,setmode]=useState('light');

  const togglemode=()=>{
    if(mode==='light'){
    setmode('dark');
      document.body.style.backgroundColor='gray';
  }
    else{
    setmode('light');
    document.body.style.backgroundColor='white';
  }
}

  return (
   <>
   <LoginSignup/>
   <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
   <div className="container my.3">
   <TextForm heading="Enter the text to analyze"/>
   </div>
   </>
  );
}

export default App;
