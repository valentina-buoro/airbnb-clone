import React from 'react'


export default function Card(props) {
    let badgeText;
    
    if(props.openSpots === 0){
        badgeText = 'SOLD OUT'
    }   
    else if(props.country==='Online'){
        badgeText='ONLINE'
    }


    return (
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={props.image} alt='katie' className='card-image'></img>
            <div className='card-stats '>
                <img src='images/star.png' alt='star'className='card-star' />
                <span>{props.rating}</span>
                <span className = 'grey'> ({props.reviewCount}) </span>
                <span className = 'grey'> .{props.country}</span>

            </div>
            <p>{props.title}</p>
            <p><span className = 'bold'> From ${props.price}</span> /person</p>

        </div>
    )
}