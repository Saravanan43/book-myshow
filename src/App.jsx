import { Route} from "react-router-dom";
import React from "react";
import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./Pages/Homepage";
import Moviepage from "./Pages/Movie.page";
import MoviePageHOC from "./HOC/MoviePage.HOC";
import Playspage from "./Pages/Plays.page";
function App() {
 
  return(
    <>
    <DefaultHOC exact path="/"  component={HomePage}/>
    <MoviePageHOC exact path="/movie/:isbn"  component={Moviepage}/>
    <DefaultHOC exact path="/play"  component={Playspage}/>
    </>
  );
}

export default App;
