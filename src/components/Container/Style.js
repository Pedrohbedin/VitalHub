import styled from 'styled-components';
import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FAFAFA;
`

export const SpacedContainer = styled.View`
    width: ${(props) => props.fieldWidth || "95%"};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Header = styled(LinearGradient).attrs({
 colors: ['#60BFC5','#4B71BB'],
 start: { x: 0, y: 0 },
 end: { x: 1, y: 1 },
})`
    width: 100%;
    height: 144px;
    border-radius: 0 0 15px 15px;
    padding: 20px;
`;

export const CardContainer = styled.View`
    width: 90%;
    elevation: 20;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 10px;
`