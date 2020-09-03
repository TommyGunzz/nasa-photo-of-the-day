import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Card from './Card'
import styled from "styled-components";
import MyButton from './myButton'


function App() {
  const [data, setData] = useState([])

useEffect(()=> {
  axios
  .get('https://api.nasa.gov/planetary/apod?api_key=gDlcC8B2BaOz6mOFwThYGUTPR5KSFQBo9KbIfItX')
  .then((res)=> {
    setData(res.data)
    console.log('recieved data:' ,res.data)
  })
  .catch((error)=>{
    console.log('No data' , error)
  })

}, [])


  return (
    <div className="App">
      <img src={data.hdurl} alt=""/>
      <p>Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>
      </p>
      <Card data = {data}/>
      <MyButton date = {data.date}/>
    </div>
  );
}

export default App;
