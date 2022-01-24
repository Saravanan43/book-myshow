import react from "react";
import { Route } from "react-router-dom";
import MovieLayout from "../Layouts/Movie.layout";

const MoviePageHOC = ({component:Component,...rest}) =>{
    return(
    <>
     <Route
         {...rest}
        component={(props)=>(
            <MovieLayout>
                 <Component {...props}/>
            </MovieLayout>
        )
        }
     />
    </>
    );
};
export default MoviePageHOC;