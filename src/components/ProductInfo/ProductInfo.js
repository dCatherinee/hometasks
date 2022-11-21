import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import ProductImg from '../../img/product-m.png';
import Plus from '../../img/add.svg';
import Minus from '../../img/remove.svg';
import {
    InfoWrapper,
    InfoImage,
    ProductImage,
    InfoContent,
    InfoTitle,
    InfoText,
    InfoSubtitle,
    InfoOption,
    InfoPrice,
    InfoCount,
    CountButton,
    CountBtnImage,
    CountNumber,
    InfoButton
} from './ProductInfoStyle.js';

const ProductInfo = () => {
    const [inputValue, setInputValue] = useState(1);
    const [info, setInfo] = useState();

    useEffect(() => {
        axios.get('http://localhost:3006/item/:itemId').then(resp => {
            setInfo(resp.data.content);
        });
    }, []);

    const handleInputMinus = () => {
        if ((inputValue - 1) < 0) {
            setInputValue(0);
        } else {
            setInputValue(inputValue - 1);
        }
    };

    const handleInputPlus = () => {
        setInputValue(inputValue + 1);
    };

    if (!info || info.lenght === 0) {
        return (
            <InfoWrapper>
                <InfoTitle>Загрузка...</InfoTitle>
            </InfoWrapper>
        )
    }

    return (
        <>
            <InfoWrapper>
                <InfoImage>
                    <ProductImage src={ProductImg} alt={info.picture.alt} />
                </InfoImage>
                <InfoContent>
                    <InfoTitle>{info.name}</InfoTitle>
                    <InfoText>{info.info}</InfoText>
                    <InfoSubtitle>Details</InfoSubtitle>
                    <InfoText>{info.details}</InfoText>
                    <InfoOption>
                        <InfoPrice>${info.price.value}</InfoPrice>
                        <InfoCount>
                            <CountButton onClick={handleInputMinus}>
                                <CountBtnImage src={Minus} />
                            </CountButton>
                            <CountNumber value={inputValue} />
                            <CountButton onClick={handleInputPlus}>
                                <CountBtnImage src={Plus} />
                            </CountButton>
                        </InfoCount>
                        <InfoButton>Add to cart</InfoButton>
                        <FavoriteIcon right={0} top={9} active={info.like} />
                    </InfoOption>
                </InfoContent>
            </InfoWrapper>
        </>
    )
};

export default ProductInfo;
