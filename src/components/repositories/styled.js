import styled from "styled-components";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs"

export const WrapperTabs = styled(Tabs)`

`
export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    display: flex;
    
`
export const WrapperTab = styled(Tab)`
    margin: 5px;
    padding: 5px;
    border-radius: 20px;
    border: solid 1px black;
    cursor: pointer;

    &:hover {
        background-color: aqua;
    }
`
export const WrapperTabPanel = styled(TabPanel)`

`