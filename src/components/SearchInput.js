import React, {useState} from "react";
import './SearchInput.css'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from "react-router-dom";

function SearchInput({data}){
    const [inputData, setInputData] = useState("")
    const [storeData, setStoreData] = useState([])
    function handleChange(event){
        const inputWord = event.target.value;
        setInputData(inputWord)
        const filterData = data.filter(value => {
            if(value.name.toLowerCase().includes(inputWord.toLowerCase())) return value.namew
            if(value.nationality.toLowerCase().includes(inputWord.toLowerCase())) return value.nationality
            if(value.club.toLowerCase().includes(inputWord.toLowerCase())) return value.club
        })
        if(inputWord === ""){
            setStoreData([])
        }else{
            setStoreData(filterData)
        }
    }
function clearInput(){
    setInputData("")
    setStoreData([])
}

    return(
        <div className="container">
            <h1 className="fifa-title">FIFA 19</h1>
            <div className="search-input">
                <input id="input" type="text" value={inputData} placeholder="Search Players" onChange={handleChange} />
                <div className="search-icon">
                   {storeData.length === 0 ? <BsSearch/>: <AiOutlineClose onClick={clearInput} id="close-btn"/>}
                </div>
            </div>
            {storeData.length !== 0 &&
                <div className="display-search-data">
                {storeData.map((player, index) => {
                    return (
                    <div key={index} className="playes-container">
                        <div className="playes">
                            <h1>
                            <Link to={`/playersDetails/${player.id}`}>{player.name}</Link>
                            </h1>
                            <div className = "player-info">
                                <p>{player.nationality}</p>
                                <p>{player.club}</p>
                            </div>
                        </div>
                    </div>)
                })}
            </div>}
        </div>
    )
}
export default SearchInput;