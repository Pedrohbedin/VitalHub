import styled from "styled-components";

export const PerfilImage = styled.Image`
    width: 100%;
    padding-top: ${(props) => props.padding || "70%"};
    border-radius: ${(props) => props.border || "0px"};
`

export const HeaderImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 10px;
`

export const CardImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 10px;
`