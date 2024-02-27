import styled from "styled-components";

export const Input = styled.TextInput`
    width: ${(props) => props.Width || "90%"};
    padding: 6px;
    border-radius: 5px;
    border: 2px #49B3BA;
    margin: ${(props) => props.margin || "5px 0px"};
    padding: 14px;
    font-size: 16px;
    font-family: 'MontserratAlternates_600SemiBold';
`

export const InfoInput = styled.TextInput`
    width: ${(props) => props.Width || "90%"};
    background-color: #F5F3F3;
    color: #33303E;
    padding: 14px;
    border-radius: 5px;
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
