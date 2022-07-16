import React, {useState, useEffect} from "react";
import {Link } from "react-router-dom";
import players from "./player_data.json";
import "./Players.css";
import logo from "./ipl.png";


function Players(){
    return(
        <div class="main_container">
                <div class="header">
                        <div class="logo">
                            <img src={logo}></img>
                        </div>
                        <div class="title">
                            <h3>TATA IPL Teams</h3>
                        </div>
                </div>
                <div class="option">
                    <ul>
                        <li>
                            <Link to="/" class="team_option">Go Back to TEAMS...</Link>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    {
                        players.map((data)=>(
                            <div class="card_content">
                                <div class="image">
                                    <img src={data.player_image_url}></img>
                                </div>
                                <div class="info">
                                    <h2>{data.name}</h2>
                                    <p>Matches: {data.matches}</p>
                                    <p>Runs: {data.runs}</p>
                                </div> 
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default Players;