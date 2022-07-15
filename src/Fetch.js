import './fetch.css';
import React, {useState, useEffect} from "react";
import CardList from "./CardList";

function Fetch() {

    const [userdata, setData] = useState([]);
    const [searchterm, setSearchterm] = useState('');
    const [filtered_data, setfilterdata] = useState([]);
  
    useEffect(()=>{
      fetch("https://api.npoint.io/20c1afef1661881ddc9c")
      .then((res)=>res.json())
      .then((data)=>setData(data.playerList));
      console.log(searchterm);
  
      const filterdata = userdata.filter((userdata)=>{
        return userdata.PFName.toLowerCase().includes(searchterm.toLowerCase()) || userdata.TName.toLowerCase().includes(searchterm.toLowerCase());
      }) 
  
      setfilterdata(filterdata.sort((a,b)=>(a.Value) - (b.Value)));
  
    },[searchterm, userdata])
    
  
    return (
      <div className="App">
        <div className="card_header">
          <input type="text" className="Search" placeholder="Search Player..." onChange={(e)=> setSearchterm(e.target.value)}></input>
        </div>
  
        <div class="container">
          <div className="sub-header">
            <h2 className="sub-title">Player Names</h2>
          </div>
          <CardList Filtered_Data={filtered_data}/>
        </div>
  
      </div>
    );
  }
  
  export default Fetch;