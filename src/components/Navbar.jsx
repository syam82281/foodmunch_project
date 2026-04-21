import React from 'react';

const Navbar = ({ onLogout, changeView, cartCount }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#" onClick={(e) => { e.preventDefault(); changeView('college'); }}>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-munch-img.png" className="food-munch-logo" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto align-items-center">
                        <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); changeView('college'); }}>Dashboard</a>
                        <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); changeView('history'); }}>Orders</a>
                        <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); changeView('cart'); }}>
                            Cart <span className="badge badge-warning" style={{backgroundColor: '#d0b200', color: '#fff'}}>{cartCount}</span>
                        </a>
                        <button className="btn btn-dark ml-3" onClick={onLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
