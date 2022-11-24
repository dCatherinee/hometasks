import styled from 'styled-components';

export const CatalogWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    padding-top: 24px;

    @media screen and (max-width: 488px){
        padding-top: 16px;
    }
`;
