/* eslint-disable no-const-assign */

import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextFrom';
import React ,{useState} from 'react';
import Alert from './Components/Alert';
//import {
  //BrowserRouter as Router,
  //Switch,
  //Route
//} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
   const toggleMode=()=>{
     if(mode==='light'){
     setmode('dark');
     document.body.style.backgroundColor='grey';
     showAlert("Dark mode has been enabled","success");
   }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  
  return (
    <>
    {/*<Router>*/}
  <Navbar title="MY PROJECT"  mode={mode} toggleMode={toggleMode}/>
  <Alert alert ={alert}/>
  < div className = "container my-3">
  {/*<switch>  */}
          {/*<Route exact path="/about">*/}
           {/*<About />*/}
          {/*</Route>*/}
         {/* <Route exact path="/">*/}
          <TextForm  showAlert={showAlert} heading = "Enter the text to analyze " mode={mode}></TextForm>
          {/*</Route>*/}
          {/*</Switch>*/}
   </div>
   {/*</Router>*/}
  </>
  );
}

export default App;
