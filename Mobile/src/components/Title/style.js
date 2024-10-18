import styled from "styled-components";

export const Title = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 20px;
    color: ${(props) => props.colorText || "#000000"};
    margin: ${(props) => props.margin || "10px 0px"};
    text-align: ${(props) => props.textAlign || "center"};
    width: ${(props) => props.fieldWidth || "auto"};
`

export const MiddleTitle = styled(Title)`
font-size: 16px;
width: 90%;
`

export const ButtonTitle = styled(Title)`
    color: #FFFFFF;
    font-family: 'MontserratAlternates_700Bold';
    padding: 12px 0px;
    margin: 0px;
    font-size: 14px;
    text-transform: uppercase;
`

export const BorderedButtonTitle = styled(Title)`
    font-family: 'MontserratAlternates_700Bold';
    padding: 12px 0px;
    margin: 0px;
    font-size: 14px;
    text-transform: uppercase;
`
