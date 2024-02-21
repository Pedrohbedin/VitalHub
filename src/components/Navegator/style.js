import styled from "styled-components";

export const Footer = styled.View`
    width: 100%;
    height: ${(props) => props.height || "75px"};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    elevation: 20;
    z-index: 1;
    position: absolute;
    bottom: 0;
    background-color: #FFFFFF;
`;

export const FooterButton = styled.TouchableOpacity`
    background-color: ${(props) => props.clickButton ? "transparent" : "#ECF2FF" };
    padding: 7px;
    border-radius: 25px;
`
