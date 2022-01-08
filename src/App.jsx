import { Route} from "react-router-dom";
import React from "react";
import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./Pages/Homepage";


function App() {
 
  return(
    <>
    <DefaultHOC exact path="/"  component={HomePage}/>
   
    </>
  );
}

export default App;
