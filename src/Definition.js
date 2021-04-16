import React from "react";
import Meanings from "./Meanings";
import "./Definition.css"

export default function Definition(props){
    if (props.definition){
    return(
        <div className="Definition">
            <h2>{props.definition.word}</h2>
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
