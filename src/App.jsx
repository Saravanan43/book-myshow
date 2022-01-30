import { Route} from "react-router-dom";
import React from "react";
import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./Pages/Homepage";
import Moviepage from "./Pages/Movie.page";
import MoviePageHOC from "./HOC/MoviePage.HOC";
import Playspage from "./Pages/Plays.page";
import axios from "axios";
function App() {
 
  //axios default settings
  axios.defaults.baseURL="https://api.themoviedb.org/3";//base url
  axios.defaults.params={};//params should be initiaized with obj
  axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;
  return(
    <>
    <DefaultHOC exact path="/"  component={HomePage}/>
    <MoviePageHOC exact path="/movie/:isbn"  component={Moviepage}/>
    <DefaultHOC exact path="/play"  component={Playspage}/>
    </>
  );
}

export default App;
