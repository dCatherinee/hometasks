import React from 'react';
import { CardWrapper, ImageWrapper, CardImage, CardName, CardPrice } from './ProductCardStyle.js';
import productImg from '../../img/product-s.png';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon.js';

const ProductCard = (props) => {
    const product = props.product;

    return (
        <>
            <CardWrapper to='/info-product'>
                <ImageWrapper>
                    <CardImage src={productImg} alt={product.picture.alt} />
                </ImageWrapper>
                <CardName>{product.name}</CardName>
                <CardPrice>{product.price.value} $</CardPrice>
                <FavoriteIcon right={8} top={8} active={product.like} />
            </CardWrapper>
        </>
    )
}

export default ProductCard;
