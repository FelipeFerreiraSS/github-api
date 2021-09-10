import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`

export const WrapperInfoUser = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin-left: 8px;
`

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;

    div {
        margin: 10px;
    }
`

export const WrapperUserName = styled.div`
    display: flex;
    align-items: center;

    span {
        margin-left: 10px;
    }
`

export const WrapperIMG = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`