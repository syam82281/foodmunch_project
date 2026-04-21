import React, { useState } from 'react';

const Payment = ({ cart, completeOrder, changeView }) => {
    const [formData, setFormData] = useState({ name: '', address: '', card: '' });
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0) * 1.05;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.name || !formData.address || !formData.card) {
            alert('Please fill out all payment details.');
            return;
        }
        completeOrder(total);
    };

    return (
        <div className="delivery-and-payment-section pt-5 pb-5" style={{minHeight: '100vh', marginTop: '70px'}}>
            <div className="container">
                <button className="btn btn-dark mb-4" onClick={() => changeView('cart')}>&larr; Back to Cart</button>
                <div className="row justify-content-center mx-0">
                    <div className="col-12 col-md-10 col-lg-8 px-2">
                        <div className="menu-item-card p-3 p-md-5">
                            <h2 className="mb-3" style={{fontWeight: '800', wordBreak: 'break-word'}}>Payment Details</h2>
                            <h3 className="mb-4" style={{color: '#d0b200', wordBreak: 'break-word'}}>Amount to Pay: <br className="d-md-none"/>${total.toFixed(2)}</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label style={{fontWeight: '600', marginBottom: '8px', display: 'block'}}>Full Name</label>
                                    <input type="text" className="form-control" style={{width: '100%'}} placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                                </div>
                                <div className="form-group mb-3">
                                    <label style={{fontWeight: '600', marginBottom: '8px', display: 'block'}}>Delivery Address</label>
                                    <input type="text" className="form-control" style={{width: '100%'}} placeholder="123 Main St" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                                </div>
                                <div className="form-group mb-4">
                                    <label style={{fontWeight: '600', marginBottom: '8px', display: 'block'}}>Card Number</label>
                                    <input type="text" className="form-control" style={{width: '100%'}} placeholder="XXXX-XXXX-XXXX-XXXX" value={formData.card} onChange={e => setFormData({...formData, card: e.target.value})} />
                                </div>
                                <button type="submit" className="btn btn-dark w-100 mt-2" style={{fontSize: '18px', height: 'auto', padding: '12px 16px', whiteSpace: 'normal'}}>Pay Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Payment;
