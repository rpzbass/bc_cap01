import React, { useEffect, useState } from 'react';
import { ProductCard } from './components/ProductCard';
import {Link } from 'react-router-dom';
import './styles.scss';
import { makeRequest } from 'core/utils/request';
import { ProductResponse } from 'core/types/Products';
import ProductCardLoader from './components/Loaders/ProductCardLoader';


const Catalog = () => {

const [productsResponse, setProductResponse] = useState<ProductResponse>();
const [isLoading, setIsLoading] = useState(false);
useEffect(() => {

    const params = {
        page: 0,
        linesPerPage:12,
    }
    
    setIsLoading(true);
    makeRequest({url: '/products', params})
        .then(response =>  setProductResponse(response.data))
        .finally(() => {

            setIsLoading(false);
        })
        
}, []);   

return (

    <div className="catalog-container">   
            <h1 className="catalog-title">
                Catálogo de produtos 
            </h1>
            <div className="catalog-products">
                {isLoading ?  <ProductCardLoader/> : productsResponse?.content.map(prod =>  (
                    
                    <Link to={`/products/${prod.id}`} key={prod.id}>
                        <ProductCard  product={prod}/>
                     </Link>
                
                ))}
                
              
            </div>  
        </div>
    );

}

export default Catalog;


