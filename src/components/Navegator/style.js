import styled from "styled-components";

export const Footer = styled.View`
    width: 100%;
    height: ${(props) => props.height || "75px"};
    flex-direction: row;
    justify-content: ${(props) => props.JustifyContent || "space-around"};
    align-items: center;
    elevation: ${(props) => props.tipoConta == "Dr" ? "20" : "0"};
    z-index: 0;
    position: absolute;
    bottom: 0;
    background-color: ${(props) => props.tipoConta == "Dr" ? "#FFFFFF" : "transparent"};
    padding: ${(props) => props.padding || "0px"}
`;

export const FooterButton = styled.TouchableOpacity`
    background-color: ${(props) => props.clickButton ? "transparent" : "#ECF2FF" };
    padding: 7px;
    border-radius: 25px;
`
