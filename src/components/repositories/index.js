import React from "react";

import * as S from "./styled"

function Repositories() {
    return(
        <S.WrapperTabs 
        selectedTabClassName = "is-selected"
        selectedTabPanelClassName = "is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starreds</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>panel Repositories</S.WrapperTabPanel>
            <S.WrapperTabPanel>panel Starreds</S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}

export default Repositories