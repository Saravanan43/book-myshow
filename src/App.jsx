import { Route} from "react-router-dom";
import React from "react";
import DefaultHOC from "./HOC/Default.HOC";
import Temp from "./components/temp";
function App() {
 
  return(
    <>
    <DefaultHOC exact path="/"  component={Temp}/>
   
    </>
  );
}

export default App;
