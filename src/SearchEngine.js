import React, {useState} from "react";
import axios from "axios";
import Definition from "./Definition";
import "./SearchEngine.css"

export default function SearchEngine(){
    let[word, setWord]= useState(" ");
    let [definition, setDefinition]=useState(null);

    function handleResponse(response){
        setDefinition(response.data[0])
    }
    function handleWordChange(event){
        event.preventDefault();
        setWord(event.target.value)
    }
    function searchWord(event){
        event.preventDefault();
        let apiURL=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        console.log(apiURL)
        axios.get(apiURL).then(handleResponse);
    }
    return(
        <div className="SearchEngine">
            <form onSubmit={searchWord}>
                <input type="search" autoFocus={true} onChange={handleWordChange} />
            </form>
            <Definition definition={definition}/>
        </div>
    )
}