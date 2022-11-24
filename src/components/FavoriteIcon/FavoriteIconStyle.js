import styled from 'styled-components';


export const FavWrapper = styled.div`
    position: absolute;
    right: ${props => props.right}px;
    top: ${props => props.top}px;
    cursor: pointer;
`;

export const FavImage = styled.img`
    width: 24px;
    height: 24px;
`;
