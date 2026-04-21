import React from 'react';

const Cart = ({ cart, updateQty, removeFromCart, changeView }) => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    return (
        <div className="healthy-food-section pt-5 pb-5" style={{minHeight: '100vh', marginTop: '70px'}}>
            <div className="container">
                <button className="btn btn-dark mb-4" onClick={() => changeView('college')}>&larr; Continue Shopping</button>
                <h1 className="menu-section-heading mb-4">Your Cart</h1>
                
                {cart.length === 0 ? (
                    <p style={{fontSize: '18px', color: '#686b78'}}>Your cart is empty.</p>
                ) : (
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            {cart.map(item => (
                                <div className="menu-item-card p-3 mb-3 d-flex align-items-center" key={item.id} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <div className="d-flex align-items-center">
                                        <img src={item.image} style={{width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover', marginRight: '16px'}} alt={item.name} />
                                        <div>
                                            <h4 style={{margin: 0, fontSize: '18px', fontWeight: '700'}}>{item.name}</h4>
                                            <span style={{color: '#d0b200', fontWeight: '600'}}>${item.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQty(item.id, -1)}>-</button>
                                        <span className="mx-3" style={{fontWeight: '700'}}>{item.qty}</span>
                                        <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQty(item.id, 1)}>+</button>
                                        <button className="btn btn-sm btn-danger ml-4" onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="menu-item-card p-4">
                                <h3 style={{marginBottom: '20px', fontWeight: '800'}}>Order Summary</h3>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Subtotal</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Tax (5%)</span>
                                    <span>${(total * 0.05).toFixed(2)}</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between mb-4" style={{fontSize: '20px', fontWeight: '800'}}>
                                    <span>Total</span>
                                    <span>${(total * 1.05).toFixed(2)}</span>
                                </div>
                                <button className="btn btn-dark w-100" onClick={() => changeView('payment')}>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Cart;
