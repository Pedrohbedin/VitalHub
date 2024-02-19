import styled from "styled-components";

export const ButtonTabsStyle = styled.TouchableOpacity`
    padding: ${(props) => props.padding || "12px 14px"};
    border-radius: ${(props) => props.borderRadius || "5px"};
    border: 2px solid #496BBA;
    margin-bottom: 20px;

    background-color: ${(props) => props.clickButton ? "#496BBA" : "transparent" }
`

export const ButtonTextStyle = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: 14px;

    color: ${(props) => props.clickButton ? "#FBFBFB" : "#496BBA" }
`