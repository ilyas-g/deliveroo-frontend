import React from 'react';
import './style.css';

export default function MenuItem({ title, price, picture, description, popular }) {
    return (
        <div className="MenuItem">
            <div className="MenuItem--card">
                <div className="MenuItem--texts">
                    {title ? <h3>{title}</h3> : ''}
                    {description ? <p>{description}</p> : ''}
                    {price ? <div className="MenuItem--infos">
                        <span className="MenuItem--price">{price}</span>
                    </div> : ''}
                    {popular === true ? <span className="MenuItem--popular">Populaire</span> : ''}
                </div>
                {picture ? <div className="MenuItem--picture">
                    <img src={picture} alt={title} />
                </div> : ''}
            </div>
        </div>
    );
}
