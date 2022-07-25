import React from 'react';
import './style.css';

export default function Header({ title, description, picture }) {
    return (
        <header className="Header">
            <div className="TopBar">
                <div className="TopBar--center">
                </div>
            </div>
            <div className="RestaurantInfos">
                <div className="RestaurantInfos--center">
                    <div className="RestaurantInfos--texts">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    <img className="RestaurantInfos--cover" src={picture} alt="Restaurant Cover" />
                </div>
            </div>
        </header>
    );
}
