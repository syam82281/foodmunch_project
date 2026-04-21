import React from 'react';
import '../college_project.css';

const College = ({ changeView }) => {
    return (
        <div style={{marginTop: '70px'}}>
    <div id="sectionTajMahalDetailedView">
        <div className="banner-section-bg-container d-flex justify-content-center flex-column">
            <div className="text-center">
                <h1 className="banner-heading mb-3">Get Delicious Food Anytime</h1>
                <p className="banner-caption mb-4">Eat Smart & Healthy</p>
                <button className="custom-button" onClick={() => document.getElementById('exploreMenuSection').scrollIntoView()}>View Menu</button>
                <button className="custom-outline-button" onClick={() => document.getElementById('exploreMenuSection').scrollIntoView()}>Order Now</button>
            </div>
        </div>
        <div className="wcu-section pt-5 pb-5" id="wcuSection">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="wcu-section-heading">Why Choose Us?</h1>
                        <p className="wcu-section-description">
                            We use both original recipes and classic versions of famous food
                            items.
                        </p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="wcu-card p-3 mb-3">
                            <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-serve.png" className="wcu-card-image" />
                            <h1 className="wcu-card-title mt-3">Food Service</h1>
                            <p className="wcu-card-description">
                                Experience fine dining at the comfort of your home. All our
                                orders are carefully packed and arranged to give you the nothing
                                less than perfect.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="wcu-card p-3 mb-3">
                            <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/fruits-img.png" className="wcu-card-image" />
                            <h1 className="wcu-card-title mt-3">Fresh Food</h1>
                            <p className="wcu-card-description">
                                The Fresh Food group provides fresh-cut fruits and vegetables
                                directly picked from our partner farms and farm houses so that
                                you always get them tree to plate.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="wcu-card p-3 mb-3">
                            <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/offers-img.png" className="wcu-card-image" />
                            <h1 className="wcu-card-title mt-3">Best Offers</h1>
                            <p className="wcu-card-description">
                                Food Coupons & Offers upto
                                <span className="offers">50% OFF</span>
                                and Exclusive Promo Codes on All Online Food Orders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="menu-section-heading">Explore Menu</h1>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow menu-item-card p-3 mb-3">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png" className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Non-Veg Starters</h1>
                        <a href="#" onClick={(e) => { e.preventDefault(); changeView('foodlist', 'Non-Veg Starters'); }} className="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow menu-item-card p-3 mb-3">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png" className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Veg Starters</h1>
                        <a href="" className="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3" onClick={(e) => { e.preventDefault(); changeView('foodlist', 'Soups'); }} style={{cursor: 'pointer'}}>
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-soup-img.png" className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Soups</h1>
                        <a href="" className="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3" onClick={(e) => { e.preventDefault(); changeView('foodlist', 'Fish & Sea food'); }} style={{cursor: 'pointer'}}>
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png" className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Fish & Sea food</h1>
                        <a href="" className="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3" onClick={(e) => { e.preventDefault(); changeView('foodlist', 'Main Course'); }} style={{cursor: 'pointer'}}>
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png" className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Main Course</h1>
                        <a href="" className="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3" onClick={(e) => { e.preventDefault(); changeView('foodlist', 'Noodles'); }} style={{cursor: 'pointer'}}>
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png" className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Noodles</h1>
                        <a href="" className="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3" onClick={(e) => { e.preventDefault(); changeView('foodlist', 'Salads'); }} style={{cursor: 'pointer'}}>
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-gluten-img.png" className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Salads</h1>
                        <a href="" className="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3" onClick={(e) => { e.preventDefault(); changeView('foodlist', 'Desserts'); }} style={{cursor: 'pointer'}}>
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png" className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Desserts</h1>
                        <a href="" className="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="healthy-food-section pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <div className="text-center">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png" className="healthy-food-section-img" />
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <h1 className="healthy-food-section-heading">
                        Fresh, Healthy, Organic, Delicious Fruits
                    </h1>
                    <p className="healthy-food-section-description">
                        Say no to harmful chemicals and go fully organic with our range of
                        fresh fruits and veggies. Pamper your body and your senses with
                        the true and unadulterated gifts from mother nature. with the true
                        and unadulterated gifts from mother nature.
                    </p>
                    <button className="custom-button" onClick={() => alert('Loading interactive video player...')}>Watch Video</button>
                </div>
            </div>
        </div>
    </div>
    <div className="delivery-and-payment-section pt-5 pb-5" id="deliveryPaymentSection">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 order-1 order-md-2">
                    <div className="text-center">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png" className="delivery-and-payment-section-img" />
                    </div>
                </div>
                <div className="col-12 col-md-7 order-2 order-md-1">
                    <h1 className="delivery-and-payment-section-heading">
                        Delivery and Payment
                    </h1>
                    <p className="delivery-and-payment-section-description">
                        Enjoy hassle-free payment with the plenitude of payment options
                        available for you. Get live tracking and locate your food on a
                        live map. It's quite a sight to see your food arrive to your door.
                        Plus, you get a 5% discount on every order every time you pay
                        online.
                    </p>
                    <button className="custom-button" onClick={() => changeView('cart')}>Proceed to Payment</button>
                    <div className="mt-3">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/visa-card-img.png" className="payment-card-img" />
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/master-card-img.png" className="payment-card-img" />
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/paypal-card-img.png" className="payment-card-img" />
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/american-express-img.png" className="payment-card-img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="thanking-customers-section pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
                    <h1 className="thanking-customers-section-heading">
                        Thank you for being a valuable customer to us.
                    </h1>
                    <p className="thanking-customers-section-description">
                        We have a surprise gift for you
                    </p>
                    <div className="d-md-none">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" className="thanking-customers-section-img" />
                    </div>
                    <div>
                        <button type="button" className="custom-button" data-toggle="modal" data-target="#exampleModal">
                            Redeem Gift
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog mt-5">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title thanking-customers-section-modal-title" id="exampleModalLabel">
                                            Gift Voucher
                                        </h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/gift-voucher-img.png" className="w-100" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 d-none d-md-block">
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" className="thanking-customers-section-img" />
                </div>
            </div>
        </div>
    </div>
    <div className="follow-us-section pt-5 pb-5" id="followUsSection">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="follow-us-section-heading">Follow Us</h1>
                </div>
                <div className="col-12">
                    <div className="d-flex flex-row justify-content-center">
                        <div className="follow-us-icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                            </svg>
                        </div>
                        <div className="follow-us-icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                        </div>
                        <div className="follow-us-icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-section pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png" className="food-munch-logo" />
                    <h1 className="footer-section-mail-id">orderfood@foodmunch.com</h1>
                    <p className="footer-section-address">
                        522415,Gurazala,Palanadu District,Andhra Pradesh,India.
                    </p>
                </div>
            </div>
        </div>
    </div>

        </div>
    );
};

export default College;
