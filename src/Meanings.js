import React from "react";
import "./Meanings.css"

export default function Meanings(props){
    return (
        <div className="Meanings">
        <h4 className="part-of-speech">{props.meanings.partOfSpeech}</h4>
        {props.meanings.definitions.map(function (definition,index)
        {
            return(
                <div key={index} className="definitions">
                    <p>
                        {definition.definition}
                        <br />
                        <small className="example"><em>{definition.example}</em></small>
                    </p>
                </div>
            );
        })}
        </div>
    );
}