import React from "react";
import Synonyms from "./Synonyms"
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
                        <strong>Definition:</strong>
                        {definition.definition}
                        <br />
                        <strong>Example:</strong>
                        <small className="example"><em>{definition.example}</em></small>
                        <br />
                        <Synonyms synonyms={definition.synonyms}/>
                    </p>
                </div>
            );
        })}
        </div>
    );
}