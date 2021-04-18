import React, {useState} from "react";
import axios from "axios";
import Definition from "./Definition";
import "./SearchEngine.css"

export default function SearchEngine(props){
    let[word, setWord]= useState(props.defaultWord);
    let [definition, setDefinition]=useState(null);
    let [loaded, setLoaded]=useState(false);

    function handleResponse(response){
        setDefinition(response.data[0])
    }
    function handleWordChange(event){
        event.preventDefault();
        setWord(event.target.value)
    }
    function searchWord(){
        let apiURL=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiURL).then(handleResponse);
    }
    function handleSubmit(event){
        event.preventDefault();
        searchWord();
    }

    function loading(){
        setLoaded(true);
        searchWord();
    }
    if(loaded){
        return(
        <div className="SearchEngine">
            <section>
            <form onSubmit={handleSubmit}>
                <input type="search" autoFocus={true} onChange={handleWordChange} />
            </form>
            <div className="words">
                <small><em>examples: beach, sunrise, sports, hiking, television, etc.</em></small>
            </div>
            </section>
            <Definition definition={definition}/>
        </div>
    )
    }else{
        loading();
        return "Loading..."
    }
    
}