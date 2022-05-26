import React from 'react'

export default function Card(props) {
    return (
        <div>
            <img src={props.image} alt='katie'></img>
            <div className='card-info'>
                <img src='star.png' alt='star' />
                <span>{props.rating}</span>
                <span className = 'grey'> ({props.reviewCount}) </span>
                <span className = 'grey'> .{props.country}</span>

            </div>
            <p>{props.title}</p>
            <p><span className = 'bold'> From ${props.price}</span> /person</p>

        </div>
    )
}