import React, { useState, useEffect} from "react";
import pic from "./pic.jfif"
import { FaTwitter } from "react-icons/fa"
import { BiBuildings, BiLink } from "react-icons/bi"
import { TiLocation } from "react-icons/ti"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import $ from "jquery"

export default function UserCard() {
    
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [joined, setJoined] = useState("");
    const [login, setLogin] = useState("");
    const [followers, setFollowers] = useState("");
    const [following, setFollowing] = useState("");
    const [public_repos, setPublic_repos] = useState("");
    const [avatar_url, setAvatar_url] = useState("");
    const [twitter_username, setTwitter_username] = useState("");
    const [company, setCompany] = useState("");
    const [blog, setBlog] = useState("");
    const [location, setLocation] = useState("");
   
        
       const setData = ({
        name,
        bio,
        login,
        created_at,
        followers,
        following,
        public_repos,
        avatar_url,
        twitter_username,
        company,
        blog, 
        location
       }) => {
        setName(name);
        if(bio == null)
            setBio("This profile has no bio");
        else if(bio != null)
            setBio(bio);
        setLogin(login);
        setJoined(created_at);
        setFollowers(followers);
        setFollowing(following);
        setPublic_repos(public_repos);
        setAvatar_url(avatar_url);
        if(twitter_username == null){
            $(".ai-child:nth-child(2)").css("opacity", "0.5");
            setTwitter_username("No available")
        }
        else if(twitter_username != null) {
            setTwitter_username(twitter_username);           
            $(".ai-child:nth-child(2)").css("opacity", "1");

        }
        if(company == null){
            $(".ai-child:last-child").css("opacity", "0.5");
            setCompany("No available")
        }
        else if(company != null) {
            setCompany(company);           
            $(".ai-child:last-child").css("opacity", "1");

        }
        
        if(blog == ""){
            $(".ai-child:nth-child(3)").css("opacity", "0.5");
            setBlog("No available")
        }
        else if(blog != "") {
            setBlog(blog);           
            $(".ai-child:nth-child(3)").css("opacity", "1");

        }
        setLocation(location);
        if(twitter_username == null){
            $(".ai-child:nth-child(2)").css("opacity", "0.5");
            setTwitter_username("No available")
        }
        else if(twitter_username != null) {
            setTwitter_username(twitter_username);           
            $(".ai-child:nth-child(2)").css("opacity", "1");

        }



         
       };
       useEffect (() => {
        fetch( `https://api.github.com/users/khalil227`)
           .then(res => res.json())
           .then (data => {
             setData(data);
           });
       }, []);
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [day, month, year].join('/');
    }
    const [userName, setUserName] = useState("");
    function handleChange(event){
        setUserName(event.target.value);
    }
    function buttonSearch(){
        fetch( `https://api.github.com/users/${userName}`)
           .then(res => res.json())
           .then (data => {
               if(data.message != "Not Found")
                 setData(data);
               else{

                    $(".searchButton").css("background-color", "red");
                    $(".searchButton").text("Not Found");
                    
                        
                   

                   setTimeout(() => {
                    $(".searchButton").css("background-color", "#0079ff");
                    $(".searchButton").text("Search");

                   }, 3000)
               }
           });
       
    }
    return(
        <div>
        <div className="searchDiv">
            <input type="text" name="search" className="SearchBar" placeholder="Search Github Username..." onChange={handleChange}/>
            <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
            <button className="searchButton" onClick={buttonSearch}>Search</button>
        </div>
            <div className="userCard">
            <div className="personal-info">
                <div className="img"><img src={avatar_url} alt="Pic" width={120} className="img" /></div>
                <div className="cordonnes">
                    <div>
                        <p className="name">{name}</p>
                         <h4 className="userName">{login}</h4>
                        <h6 className="bio">{bio}</h6>
                    </div>
                    <h4 className="joined">Joined {formatDate(joined)}</h4>
                </div>
                
            </div>
            <div className="follow-repo">
                <div className="fr-child">Repos</div>
                <div className="fr-child">Followers</div>
                <div className="fr-child">Following</div>
                <div className="fr-child">{public_repos}</div>
                <div className="fr-child">{followers}</div>
                <div className="fr-child">{following}</div>
            </div>
            <div className="additional-info">
                <div className="ai-child">
                    <TiLocation /> {location}
                </div>
                <div className="ai-child">
                    <FaTwitter /> {twitter_username}
                </div>
                <div className="ai-child">
                    <BiLink /> {blog}
                </div>
                <div className="ai-child">
                    <BiBuildings /> {company}
                    
                </div>
            </div>
        </div>
        </div>
           
    );
}