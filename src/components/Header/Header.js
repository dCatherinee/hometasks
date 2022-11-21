import React, { useState } from 'react';
import { Container } from '../../globalStyles';
import { HeaderWrapper, HeaderSearch, Search, SearchIcon, HeaderNav, NavIcon } from './HeaderStyle.js';
import accountIcon from '../../img/account_circle.png';
import shoppingIcon from '../../img/shopping_cart.png';

const Header = () => {
    const [focus, setFocus] = useState(false);

    const handleFocus = () => {
        setFocus(!focus);
    };

    return (
        <>
            <Container>
                <HeaderWrapper>
                    <HeaderSearch>
                        <Search type="search" placeholder="Search products" onFocus={handleFocus} onBlur={handleFocus} />
                        <SearchIcon focus={focus} />
                    </HeaderSearch>
                    <HeaderNav>
                        <NavIcon img={shoppingIcon} />
                        <NavIcon img={accountIcon} />
                    </HeaderNav>
                </HeaderWrapper>
            </Container>
        </>
    )
};

export default Header;
