import React from "react";
function BooksCards({title, authors, description, image, link, Button}){
    return(
        <>
        <h3>{title} by {authors}</h3>
        <img src={image} alt={title} />
        <p>{description}</p>
        <Button />
        <button target="_blank" href={link} rel="noreferrer">View</button>
        </>
        // still need to work on getting the view data button to work
    )
}
export default BooksCards