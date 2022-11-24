import React, { useEffect, useState } from 'react';
import { getItems } from '../../api/index.js';
import { Container } from '../../globalStyles';
import ProductCard from '../ProductCard/ProductCard';
import { CatalogWrapper } from './CatalogStyle.js';

const Catalog = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        getItems('/').then(resp => {
            setProducts(resp.data);
        })
    }, []);

    if (!products || products.lenght === 0) {
        return (
            <Container>
                <CatalogWrapper>Загрузка...</CatalogWrapper>
            </Container>
        )
    };

    return (
        <Container>
            <CatalogWrapper>
                {
                    products.content.map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </CatalogWrapper>
        </Container>
    )
}

export default Catalog;
