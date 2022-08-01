import React from "react";
import {useNavigate} from 'react-router-dom';

export default function Homepage(props){
    const navigate = useNavigate()
    return( 
        <div className = "homepage" >
            <header className = "homepage-nav">Quiz</header>
            <h3 className = "homepage-description">Need to study?</h3>
            <button className = "homepage-button" onClick={()=>navigate("/questions")}>Start quiz</button>
        </div>
    )
}