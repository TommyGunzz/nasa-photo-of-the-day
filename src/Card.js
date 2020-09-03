import React from 'react'
import styled from "styled-components";

const CardStyle = styled.div`
color: black;
margin: 10px;
padding: 10px;
background-color: turquoise;
border-radius: 15px;
width: 100%;
transition: height 0.5s;
`;


function Card(props){
    console.log('props:', props)
    return (
        <CardStyle>
    <div>
        <h1>{props.data.title}</h1>
        <p>{props.data.date}</p>
        <p>{props.data.explanation}</p>
        <footer>{props.data.copyright}</footer>
        
    </div>
        </CardStyle>
    )
}

export default Card