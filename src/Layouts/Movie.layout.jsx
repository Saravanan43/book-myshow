import react,{useContext,useEffect} from "react";
import Navbar from "../components/Navbar/Movie.navbar";
import {MovieContext} from "../context/movie.context";
import {useParams} from "react-router-dom";
import axios from "axios";

const MovieLayout = (props) =>{
    const { isbn } = useParams();
     const { movie, setMovie } = useContext(MovieContext);
     
    useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${isbn}`);
      setMovie(getMovieData.data);
    };
    requestMovie();
  }, [isbn]);

    return(
        <>
           <Navbar/>
           {props.children}
        </>
    );

};

export default MovieLayout;