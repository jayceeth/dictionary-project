import React from "react";
import "./Phonetic.css"

export default function Phonetic(props){
    return(
        <div className="Phonetic">
            <p><a href={props.phonetic.audio} rel="noreferrer" target="_blank">Listen 🔊</a>
            {" "}{" "}
            {props.phonetic.text}</p>
        </div>
    )
}