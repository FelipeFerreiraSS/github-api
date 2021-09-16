import React from "react";

import * as S from './styled'

function Header() {
    return (
        <header>
            <S.Wrapper>
                <input type="text"/>
                <button type="submit">buscar</button>
            </S.Wrapper>
        </header>
    )
}

export default Header