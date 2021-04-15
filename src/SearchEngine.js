import React, {useState} from "react";
import "./SearchEngine.css"

export default function SearchEngine(){
    let[word, setWord]= useState(" ");

    function handleWordChange(event){
        event.preventDefault();
        setWord(event.target.value)
    }
    function searchWord(event){
        event.preventDefault();
        alert(`Searching for ${word}`)
    }
    return(
        <div className="SearchEngine">
            <form onSubmit={searchWord}>
                <input type="search" autoFocus={true} onChange={handleWordChange} />
            </form>
        </div>
    )
}