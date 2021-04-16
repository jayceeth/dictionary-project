import React from "react";

export default function Meanings(props){
    return (
        <div className="Meanings">
        <h4>{props.meanings.partOfSpeech}</h4>
        {props.meanings.definitions.map(function (definition,index)
        {
            return(
                <div key={index}>
                    <p>
                        {definition.definition}
                        <br />
                        <small><em>{definition.example}</em></small>
                    </p>
                </div>
            );
        })}
        </div>
    );
}