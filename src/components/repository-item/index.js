import React from "react";

function RepositoryItem({ name, linkToRep, fullName }) {
    return(
        <div>
            <h2>{name}</h2>
            <h4>full name:</h4>
            <a href={linkToRep} 
            target="_blank" 
            rel="noreferrer"
            >{fullName}</a>
        </div>
    )
}

export default RepositoryItem