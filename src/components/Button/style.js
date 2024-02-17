import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    background-color: #496BBA;
    width: 90%;
    align-items: center;
    border-radius: 5px;
    padding: 6px;
    margin: 15px 0px;
    border: 2px solid #496BBA;
`

export const FuncButton = styled.TouchableOpacity`
    background-color: rgba(73, 179, 186, .15);
    width: 45px;
    height: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    position: fixed;
    right: 40%;
    top: 20px;
`

export const BorderedButton = styled(Button)`
    background-color: #FAFAFA;
    justify-content: center;
    flex-direction: row;
    gap: 27px;
`