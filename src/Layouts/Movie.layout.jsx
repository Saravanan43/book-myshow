import react from "react";
import Navbar from "../components/Navbar/Movie.navbar";
const MovieLayout = (props) =>{
     
    return(
        <>
           <Navbar/>
           {props.children}
        </>
    );

};

export default MovieLayout;