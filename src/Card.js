import React from 'react'

function Card(props){
    console.log('props:', props)
    return (
    <div>
        <h1>{props.data.title}</h1>
        <p>{props.data.date}</p>
        <p>{props.data.explanation}</p>
        <footer>{props.data.copyright}</footer>
        
        </div>

    )
}

export default Card