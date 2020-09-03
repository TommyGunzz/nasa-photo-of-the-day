import React, {useState} from 'react'
import Nasa from './Nasa'

function MyButton(props){
    console.log('Button props: ', props)

    
    const [toggle, setToggle] = useState(false);

    const Click = event => {
        event.preventDefault();
        setToggle(!toggle)
    }
    
    return(
        <div>
            <button className='Click!' onClick={Click} >
                Click !
            </button>

            {toggle === true ? <Nasa data = {props.date}  /> : null }
        </div>

    );
};

export default MyButton;