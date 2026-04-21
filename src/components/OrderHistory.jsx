import React from 'react';

const OrderHistory = ({ orders, changeView }) => {
    return (
        <div className="explore-menu-section pt-5 pb-5" style={{minHeight: '100vh', marginTop: '70px'}}>
            <div className="container">
                <button className="btn btn-dark mb-4" onClick={() => changeView('college')}>&larr; Back to Dashboard</button>
                <h1 className="menu-section-heading mb-4">Order History</h1>
                
                {orders.length === 0 ? (
                    <p style={{fontSize: '18px', color: '#686b78'}}>You have no past orders.</p>
                ) : (
                    <div className="row">
                        {orders.map(order => (
                            <div className="col-12 mb-4" key={order.id}>
                                <div className="menu-item-card p-4">
                                    <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                                        <h4 style={{fontWeight: '700'}}>Order #{order.id}</h4>
                                        <span style={{color: '#686b78'}}>{order.date}</span>
                                    </div>
                                    <div className="mb-3">
                                        {order.items.map(item => (
                                            <div key={item.id} className="d-flex justify-content-between mb-2">
                                                <span>{item.qty}x {item.name}</span>
                                                <span>${(item.price * item.qty).toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="d-flex justify-content-between pt-3 border-top">
                                        <span style={{fontWeight: '800'}}>Total Paid</span>
                                        <span style={{fontWeight: '800', color: '#d0b200'}}>${order.total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
export default OrderHistory;
