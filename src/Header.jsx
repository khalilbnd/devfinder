import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import $ from "jquery"


function Header(){
    const [icon, setIcon] = useState(faSun)
    const [themeName, setThemeName] = useState("Light")
    function changeTheme(){
        let themeBackground = $("body");
        console.log(themeBackground.css("background-color"));
        let primaryColor1 = $(".header-title");
        let primaryColor2 = $(".header button");
        let primaryColor3 = $(".SearchBar");
        let primaryColor4 = $(".userCard");
        let primaryColor5 = $(".name");
        let primaryColor6 = $(".follow-repo");
        let primaryColor7 = $(".fr-child");
        let primaryColor8 = $(".ai-child");
        let primaryColor9 = $("input[type=\"text\"]");

        

        if(themeBackground.css("background-color") == "rgb(20, 28, 47)"){
            themeBackground.css("background-color", "white");
            primaryColor1.css("color", "rgb(65, 154, 255)");
            primaryColor2.css("color", "rgb(65, 154, 255)");
            primaryColor3.css("background-color", "rgb(255, 255, 255)");
            primaryColor4.css("background-color", "rgb(255, 255, 255)");
            primaryColor5.css("color", "#2B3442");
            primaryColor6.css("background-color", "rgb(255, 255, 255)");
            primaryColor7.css("color", "#2B3442");
            primaryColor8.css("color", "#2B3442");
            primaryColor9.css("color", "#2B3442");

            setIcon(faMoon);
            setThemeName("Dark");
            
        }
        else if(themeBackground.css("background-color") == "rgb(255, 255, 255)"){
            themeBackground.css("background-color", "rgb(20, 28, 47)");
            primaryColor1.css("color", "white");
            primaryColor2.css("color", "white");
            primaryColor3.css("background-color", "#1e2a47");
            primaryColor4.css("background-color", "#1e2a47");
            primaryColor5.css("color", "white");
            primaryColor6.css("background-color", "rgb(20, 28, 47)");
            primaryColor7.css("color", "white");
            primaryColor8.css("color", "white");
            primaryColor9.css("color", "white");


            setIcon(faSun);
            setThemeName("Light");
        }
      
    }
    return(
        <div className="header">
            <h1 className="header-title">devfinder</h1>
            <div className="theme">
            <button onClick={changeTheme}>
            {themeName} <FontAwesomeIcon icon={icon} /> 
            
            </button>
            </div>
        </div>
        );
}

export default Header;