import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '../../globalStyles';
import ProductCard from '../ProductCard/ProductCard';
import { CatalogWrapper } from './CatalogStyle.js';

const Catalog = () => {
    const [products, setProsucts] = useState();

    useEffect(() => {
        axios.get('http://localhost:3006/item').then(resp => {
            setProsucts(resp.data);
        });
    }, []);

    if (!products || products.lenght === 0) {
        return (
            <>
                <Container>
                    <CatalogWrapper>Загрузка...</CatalogWrapper>
                </Container>
            </>
        )
    };

    return (
        <>
            <Container>
                <CatalogWrapper>
                    {
                        products.content.map((product) => <ProductCard key={product.id} product={product} />)
                    }
                </CatalogWrapper>
            </Container>
        </>
    )
}

export default Catalog;
