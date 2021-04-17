import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";
import "./Definition.css"

export default function Definition(props){
    if (props.definition){
    return(
        <div className="Definition">
            <section>
            <h2>{props.definition.word}</h2>
            {props.definition.phonetics.map(function(phonetic, index){
                return(
                    <div key={index}>
                        <Phonetic phonetic={phonetic} />
                    </div>
                )
            })}
            </section>
            {props.definition.meanings.map(function(meanings,index){
                return(
                    <section key={index}>
                        <Meanings meanings={meanings} />
                    </section>
                )})}
        </div>
    )}else{
        return null;
    }
}
