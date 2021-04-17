import React from "react";
import Synonyms from "./Synonyms"
import "./Meanings.css"

export default function Meanings(props){
    return (
        <div className="Meanings">
        <h4 className="part-of-speech">{props.meanings.partOfSpeech}</h4>
        <br />
        {props.meanings.definitions.map(function (definition,index)
        {
            return(
                <div key={index} className="definitions">
                    <p>
                        <strong className="category">Definition:</strong>{" "}
                        {definition.definition}
                        <br />
                        <br/>
                        <strong className="category">Example:</strong> {" "}
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