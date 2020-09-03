import React from 'react'

function Nasa(props){
    console.log('Nasa props: ', props)
    return(
        
        <div>
            <h2> 
                Date: {props.data}
            </h2>
        </div>
    );

};

export default Nasa;