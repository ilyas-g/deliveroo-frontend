import React from 'react';
import './style.css';
import MenuItem from '../menuItem/MenuItem';

export default function MenuItems({ categorie }) {
    console.log();
    return (
        <>
            <h2>{categorie.name}</h2>
            {categorie.meals.map((meal, index) => {
                return (
                    <div key={index}>
                        <MenuItem
                            title={meal.title}
                            description={meal.description}
                            price={meal.price}
                            picture={meal.picture}
                            popular={meal.popular}
                        />
                    </div>
                );
            })}
        </>
    );
}
