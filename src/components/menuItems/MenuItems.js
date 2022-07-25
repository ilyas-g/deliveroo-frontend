import React from 'react';
import './style.css';
import MenuItem from '../menuItem/MenuItem';

export default function MenuItems({ categorie }) {

    return (
        <div className="MenuItems">
            <h2>{categorie.name}</h2>
            <div className="MenuItems--items">
                {categorie.meals.map((meal, index) => {
                    return (
                        <>
                            <MenuItem key={index}
                                title={meal.title}
                                description={meal.description}
                                price={meal.price}
                                picture={meal.picture}
                                popular={meal.popular}
                            />
                        </>
                    );
                })}
            </div>
        </div>
    );
}
