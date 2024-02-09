import styled from "styled-components";

export const Input = styled.TextInput`
    width: 90%;
    padding: 16px;
    border-radius: 5px;
    border: 2px #49B3BA;
    margin: 5px 0px;
    font-size: 16px;
    font-family: 'MontserratAlternates_600SemiBold';
`

export const InfoInput = styled.TextInput`
    width: 90%;
    background-color: #F5F3F3;
    color: #33303E;
    border-radius: 5px;
    padding: 16px;
    font-size: 14px;
    font-family: "MontserratAlternates_500Medium";
`

export const LittleInfoInput = styled(InfoInput)`
    width: 90%;
`

export const CodeInput = styled(Input)`
    width: 62px;
    text-align: center;
    height: 62px;
    font-size: 20px;
    color: #34898F;
`
