import React, { useState } from 'react';
import { FavWrapper, FavImage } from './FavoriteIconStyle.js';
import favIcon from '../../img/favorite_border.png';
import favIconActive from '../../img/favorite.png';

const FavoriteIcon = (props) => {
    const [favorite, setFavorite] = useState(props.active);

    const handleClick = () => {
        setFavorite(!favorite);
    };

    return (
        <>
            <FavWrapper onClick={handleClick} right={props.right} top={props.top}>
                <FavImage src={favorite ? favIconActive : favIcon} />
            </FavWrapper>
        </>
    )
}

export default FavoriteIcon;
