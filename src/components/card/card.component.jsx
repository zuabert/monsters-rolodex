import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return <div className='card-container'>
        <img 
            alt='monster'
            src={`https://robohash.org/${props.monster.id}?set=2&size=180x180`}
            className='card-container__image'
            />
        <h4>{props.monster.name}</h4>
        <p className='card-container__email'>{props.monster.email}</p>
    </div>;
}