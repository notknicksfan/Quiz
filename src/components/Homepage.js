import React from "react"

export default function Homepage(props){
    return(
        <div className = "homepage" >
            <header className = "homepage-nav">Quiz</header>
            <h3 className = "homepage-description">Need to study?</h3>
            <button className = "homepage-button" onClick={props.handleHomepage}>Start quiz</button>
        </div>
    )
}