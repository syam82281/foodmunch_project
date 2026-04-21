import React from 'react';
import { foodData } from '../data/foodData';

const FoodList = ({ category, addToCart, changeView }) => {
    const items = foodData[category] || [];

    return (
        <div className="wcu-section pt-5 pb-5" style={{minHeight: '100vh', marginTop: '70px'}}>
            <div className="container">
                <button className="btn btn-dark mb-4" onClick={() => changeView('college')}>&larr; Back to Menu</button>
                <h1 className="menu-section-heading mb-4">{category}</h1>
                <div className="row">
                    {items.map(item => (
                        <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                            <div className="menu-item-card p-3 mb-4">
                                <img src={item.image} className="menu-item-image w-100" alt={item.name} />
                                <h1 className="menu-card-title">{item.name}</h1>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span style={{ fontSize: '18px', fontWeight: '700', color: '#282c3f' }}>${item.price.toFixed(2)}</span>
                                    <button className="btn btn-dark" style={{padding: '6px 16px', fontSize: '14px'}} onClick={() => {addToCart(item); alert('Added to cart!');}}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default FoodList;
