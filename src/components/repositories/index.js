import React from "react";
import RepositoryItem from "../repository-item";

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
            <S.WrapperTabPanel><RepositoryItem 
                name="alurakut" 
                linkToRepo="https://github.com/FelipeFerreiraSS/alurakut" 
                fullName="FelipeFerreiraSS/alurakut" 
            /></S.WrapperTabPanel>
            <S.WrapperTabPanel><RepositoryItem 
                name="calculadora-javascript" 
                linkToRepo="https://github.com/FelipeFerreiraSS/calculadora-javascript" 
                fullName="FelipeFerreiraSS/calculadora-javascript"
            /></S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}

export default Repositories