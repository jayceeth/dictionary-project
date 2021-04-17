import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";
import "./Definition.css"

export default function Definition(props){
    if (props.definition){
    return(
        <div className="Definition">
            <h2>{props.definition.word}</h2>
            {props.definition.phonetics.map(function(phonetic, index){
                return(
                    <div key={index}>
                        <Phonetic phonetic={phonetic} />
                    </div>
                )
            })};
            {props.definition.meanings.map(function(meanings,index){
                return(
                    <div key={index}>
                        <Meanings meanings={meanings} />
                    </div>
                )})}
        </div>
    )}else{
        return null;
    }
}
