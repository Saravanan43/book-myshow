//Transform one component into another component
//Adding functionalities to existing components
import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../Layouts/Default.layout";

const DefaultHOC = ({component:Component,...rest}) => {
    return (
        <>
        
        <Route 
            {...rest}
            component={
                (props) => (
                  <DefaultLayout>
                      <Component {...props}/>
                  </DefaultLayout>
                )
            }
        />
       </>
    );
};
export default DefaultHOC;