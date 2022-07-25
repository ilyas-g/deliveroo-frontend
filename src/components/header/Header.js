import React from 'react';
import './style.css';

export default function Header({ title, description, picture }) {
    return (
        <header class="Header"><div class="TopBar"><div class="TopBar--center">
        </div>
        </div>
            <div class="RestaurantInfos">
                <div class="RestaurantInfos--center">
                    <div class="RestaurantInfos--texts">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    <img class="RestaurantInfos--cover" src={picture} alt="Restaurant Cover" />
                </div>
            </div>
        </header>
    );
}
