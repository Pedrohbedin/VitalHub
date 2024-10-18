import styled from "styled-components";

export const ModalBackground = styled.View`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

export const ModalContent = styled.View`
    background-color: #FFFFFF;
    border-radius: 10px;
    position: absolute;
    width: ${(props) => props.fieldWidth || "95%"};
    height: ${(props) => props.height || "55%"};
    z-index: 2;
    padding: ${(props) => props.padding || "30px"};
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.alignItems || "center"};
    position: ${(props) => props.position || ""};
    bottom: 0;
`


