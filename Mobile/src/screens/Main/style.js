import styled from "styled-components";

export const ContentIcon = styled.View.attrs({
    focus: true
})`
    flex-direction: row;
    background-color: ${(props) => `${props.tabBarActiveBackgroundColor}`};

    gap: 5px;
    border-radius: 18px;
    padding: 9px 12px;
`

export const TextIcon = styled.Text`
    color: #607EC5;
    font-size: 14px;
    font-family: "Quicksand_500Medium";
`