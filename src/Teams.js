import React, {useState, useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import "./Teams.css";
import logo from "./ipl.png";

function Teams(){
const[data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://apis.ccbp.in/ipl/")
        .then((res)=>res.json())
        .then((data)=>setData(data.teams));
        console.log(data);
    })
    
    return(
        <div class="main">
            <header class="header">
                    <div class="logo">
                        <img src={logo}></img>
                    </div>
                    <div class="title">
                        <h3>TATA IPL Teams</h3>
                    </div>
            </header>

            <div class="option">
                <ul>
                    <li>
                        <Link to="/" class="team_option">Teams</Link>
                    </li>
                </ul>   
                <Outlet />
            </div>

            <div class="content">
                {
                    data.map((data)=>(
                        <div class="teams">
                                <div class="image">
                                    <img src={data.team_image_url} alt="team_logo"></img>
                                </div>
                                <div class="name">
                                    <h3>{data.name}</h3>
                                </div>
                                <Link to="/players">Players</Link>
                                <div>
                            </div>
                            </div> 
                        )
                    )
                }
            </div>
        </div>

        
    )
}

export default Teams;