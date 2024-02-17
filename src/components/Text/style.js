import styled from "styled-components";

export const Text = styled.Text`
    color: ${(props) => props.colorText || "#4E4B59"};
    font-family: ${(props) => props.fontFamily || "Quicksand_500Medium"};
    font-size: ${(props) => props.fontSize || "16px"};
    text-align: ${(props) => props.textAlign || "center"};
    margin: ${(props) => props.margin || "0px 0px 20px 0px"};
    width: ${(props) => props.fieldWidth || "90%"};
`