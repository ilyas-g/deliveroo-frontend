import React from 'react';
import './style.css';

export default function Header() {
    return (
        <header class="Header"><div class="TopBar"><div class="TopBar--center">
        </div>
        </div>
            <div class="RestaurantInfos">
                <div class="RestaurantInfos--center">
                    <div class="RestaurantInfos--texts">
                        <h1>Le Pain Quotidien - Montorgueil</h1>
                        <p>Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien propose des ingrédients simples et sains, du bon pain, des fruits et des légumes frais et de saison issus de l’agriculture biologique.</p>
                    </div>
                    <img class="RestaurantInfos--cover" src="https://f.roocdn.com/images/menus/17697/header-image.jpg" alt="restaurant cover" />
                </div>
            </div>
        </header>
    );
}
