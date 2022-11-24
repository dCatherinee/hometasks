import styled from 'styled-components';
import { Link } from 'react-router-dom';
import searchIcon from '../../img/search.svg';
import searchIconActive from '../../img/search-active.png';

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;

    @media screen and (max-width: 488px){
        padding-top: 16px;
    }
`;

export const HeaderSearch = styled.div`
    width: 300px;
    height: 40px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
`;

export const Search = styled.input`
    border: none;
    color: #323232;
    font-size: 14px;
    line-height: 16px;

    &:focus{
        outline: none;
        border-bottom: 2px solid #E97F03;

        ::placeholder{
            opacity: 0;
        }
    }
`;

export const SearchIcon = styled.div`
    background-image: url(${(props) => (props.focus ? searchIconActive : searchIcon)});
    width: 24px;
    height: 24px;
    margin-right: 8px;
    cursor: pointer;
`;

export const HeaderNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 64px;
`;

export const NavIcon = styled(Link)`
    background-image: url(${props => props.img});
    width: 24px;
    height: 24px;

    cursor: pointer;
`;
