import React from 'react';
import './styles.scss';
import { ReactComponent as ImageProduct} from '../../../../core/assets/images/product.svg';
import ProductPrice from '../../../../core/components/ProductPrice';




export const ProductCard = () => (
    <div className="d-flex">
        <div className="card-base border-radius-10 product-card">
            <ImageProduct/>
            <div className="product-info">
                <h6 className="product-name">
                    
                    Computador Desktop Intel Core i7

                </h6>
                <ProductPrice price='2.700,00'/>
            </div>    
        </div>
    </div>
);


