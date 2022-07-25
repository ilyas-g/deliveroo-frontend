import React from 'react';
import './style.css';

export default function MenuItem({ title, price, picture, description, popular }) {
    return (
        <div class="MenuItem">
            <div class="MenuItem--card">
                <div class="MenuItem--texts">
                    {title ? <h3>{title}</h3> : ''}
                    {description ? <p>{description}</p> : ''}
                    {price ? <div class="MenuItem--infos">
                        <span class="MenuItem--price">{price}</span>
                    </div> : ''}
                    {popular === true ? <strong>POPULAR</strong> : ''}
                </div>
                {picture ? <div class="MenuItem--picture">
                    <img src={picture} alt={title} />
                </div> : ''}
            </div>
        </div>
    );
}
