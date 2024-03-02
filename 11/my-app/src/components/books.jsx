import React from 'react'
const Book =(props) =>{
    return (
    <div>
    <img className="image"> {props.image} </img>
    <h1 className="title"> {props.title} </h1>
    <p className="desctiption">{props.description}</p>
    <p className="characters">{props.characters}</p>
    </div> 
)}

export default Book;