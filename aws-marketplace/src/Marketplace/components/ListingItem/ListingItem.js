import React from 'react';
import './ListingItem.css';

const ListingItem = (props) => {
    return (
        <div className="listingItemContainer">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default ListingItem
