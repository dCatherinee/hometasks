import styled from 'styled-components';

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-top: 24px;

    @media screen and (max-width: 488px){
        padding-top: 16px;
        flex-direction: column;
    }
`;

export const InfoImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 76px;
    width: 300px;
    height: 300px;
    border: 1px solid #F2F2F2;

    @media screen and (max-width: 488px){
        width: 100vw;
        height: 200px;
        padding: 0;
        border: none;
        background: linear-gradient(360deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 50%);
    }
`;

export const ProductImage = styled.img`
    width: 149px;
    height: 200px;
`;

export const InfoContent = styled.div`
    margin-left: 16px;

    @media screen and (max-width: 488px){
        margin-left: 0;
        margin-top: 16px;
    }
`;

export const InfoTitle = styled.h2`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
`;

export const InfoText = styled.p`
    font-size: 14px;
    line-height: 16px;
    color: #000000;
`;

export const InfoSubtitle = styled.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;

export const InfoOption = styled.div`
    position: relative;
    width: 493px;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 24px;

    @media screen and (max-width: 488px){
        width: 327px;
        height: 96px;
        margin-top: 16px;
        margin-bottom: 24px;
    }
`;

export const InfoPrice = styled.p`
    font-size: 36px;
    line-height: 42px;
    color: #E97F03;

    margin-right: 16px;

    @media screen and (max-width: 488px){
        position: absolute;
        left: 0;
        top: 0;

        margin: 0;
    }
`;

export const InfoCount = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-right: 16px;

    @media screen and (max-width: 488px){
        margin-right: 27px;
        margin-top: 56px;
    }
`;

export const CountButton = styled.button`
    width: 40px;
    height: 40px;
    border: 1px solid #323232;
    padding: 0;
    background: none;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
`;

export const CountBtnImage = styled.img`
    width: 24px;
    height: 24px;
`;

export const CountNumber = styled.input.attrs(props => ({
    type: 'amount',
    value: props.value
}))`
    width: 100px;
    height: 40px;
    padding: 0;
    border: none;
    border-bottom: 1px solid #323232;
    border-top: 1px solid #323232;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    color: #000000;

    @media screen and (max-width: 488px){
        width: 60px;
    }
`;

export const InfoButton = styled.button`
    background: #E97F03;
    border: none;
    border-radius: 10px;

    cursor: pointer;

    padding: 6px 20px;

    text-align: center;
    text-decoration: none;
    font-size: 24px;
    line-height: 28px;
    color: #fff;

    transition: all 0.2s ease-out;

    :hover{
        background: #E99330;
    }

    @media screen and (max-width: 488px){
        margin-top: 56px;
    }
`;
