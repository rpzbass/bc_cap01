import React from 'react';
import './styles.scss';
import { ReactComponent as ImageProduct} from '../../../../core/assets/images/product.svg';




export const ProductCard = () => (
    <div className="d-flex">
        <div className="card-base border-radius-10 product-card">
            <ImageProduct/>
            <div className="product-info">
                <h6 className="product-name">
                    
                    Computador Desktop Intel Core i7

                </h6>
                <div className="product-price-container">
                    <span className="product-currency">R$</span>
                    <h3 className="product-price">2.779,00</h3>
                </div>
            </div>    
        </div>
    </div>
);

