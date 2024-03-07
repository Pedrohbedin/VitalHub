import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
    padding-top: 72px;
    flex: 1;
    align-items: center;
    background-color: #FAFAFA;
`

export const SpacedContainer = styled.View`
    width: ${(props) => props.fieldWidth || "95%"};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => props.padding || "0px"}
`

export const Header = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#4B71BB'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
    top: 0;
    width: 100%;
    height: 144px;
    border-radius: 0 0 15px 15px;
    padding: 20px;
    top: 0;
    z-index: 1;
`;

export const CardContainer = styled.View`
    width: ${(props) => props.fieldWidth || "90%"};
    elevation: 5;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 10px;
    border-color: ${(props) => props.borderColor || "#FFFFFF"};
    border-width: 2px;
    border-style: solid;
`