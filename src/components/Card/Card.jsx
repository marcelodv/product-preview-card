import productImage from "../../assets/image-product-desktop.jpg"
import iconCart from "../../assets/icon-cart.svg"

import "./Card.css"

export default function Card () {
    return (
        <div className="card">
            <img src={productImage} />
            <div className="card-right">
                <span className="product-type">PERFUME</span>

                <p className="product-title">Gabrielle Essence Eau De Parfum</p>

                <p className="product-description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

                <div className="production-price">
                    <span className="current-price">$149.99</span>
                    <span className="last-price"><del>$169.99</del></span>
                </div>
                <button className="product-add-to-card">
                    <img src={iconCart} />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}