import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled(Link)`
    position: relative;
    width: 220px;
    height: 272px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-decoration: none;

    transition: all 0.2s ease-out;

    :hover{
        background: #F2F2F2;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
    }

    @media screen and (max-width: 488px){
        width: 155px;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 140px;
    margin-top: 40px;
    margin-bottom: 8px;

    @media screen and (max-width: 488px){
        width: 155px;
        height: 140px;
    }
`;

export const CardImage = styled.img`
    width: 59px;
    height: 79px;
`;

export const CardName = styled.p`
    font-size: 18px;
    line-height: 21px;
    color: #323232;
    text-align: center;
    margin: 10px 0;
`;

export const CardPrice = styled.p`
    font-size: 14px;
    line-height: 16px;
    color: #545454;
    text-align: center;
    margin: 2px 0;
`;
