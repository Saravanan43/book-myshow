import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import HeroSlider from "../components/HeroCarousal/HeroCarousal";
import FieldComponent from "../components/Field/Field.Component";

const DefaultLayout = (props) =>{
    return(
        <>
        <Navbar/>
        <FieldComponent/>
        <HeroSlider/>
        {props.children}
        </>
    );
};
export default DefaultLayout;