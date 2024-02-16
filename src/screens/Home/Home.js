import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardContainer, Container, SpacedContainer } from "../../components/Container/Style";
import { Header } from "../../components/Container/Style";
import { CardImage, HeaderImage } from "../../components/Image/style";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { BorderedButtonTitle, ButtonTitle, MiddleTitle, Title } from "../../components/Title/style";
import { Icon } from "react-native-elements";
import { BorderedButton, Button } from "../../components/Button/style";
import CalendarList from "../../components/Calender";


export const Home = () => {

    return (
        <>
            {/* <StatusBar /> */}
            <Container>
                <Header>
                    <SpacedContainer style={{ padding: 10 }}>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <HeaderImage source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg', }} />
                            <View style={{ gap: -20 }}>
                                <Subtitle style={{ textAlign: 'left' }}>Bem vindo</Subtitle>
                                <MiddleTitle style={{ color: 'white', width: 'auto' }}>Dr. Claudio</MiddleTitle>
                            </View>
                        </View>
                        <Icon
                            size={25}
                            name='bell'
                            type='material-community'
                            color={'white'}
                        />
                    </SpacedContainer>
                </Header>
                <CalendarList />
                <SpacedContainer>
                    <Button style={{ width: 'auto' }}>
                        <ButtonTitle style={{ textTransform: 'capitalize' }}>Agendadas</ButtonTitle>
                    </Button>
                    <BorderedButton style={{ width: 'auto' }}>
                        <BorderedButtonTitle style={{ textTransform: 'capitalize' }}>Realizadas</BorderedButtonTitle>
                    </BorderedButton>
                    <BorderedButton style={{ width: 'auto' }}>
                        <BorderedButtonTitle style={{ textTransform: 'capitalize' }}>Canceladas</BorderedButtonTitle>
                    </BorderedButton>
                </SpacedContainer>
                <CardContainer>
                    <SpacedContainer style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                        <CardImage source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg', }} />
                        <View style={{gap: 5}}>
                            <Title>Richard Kosta</Title>
                            <View style={{ flexDirection: 'row', gap: 17 }}>
                                <Text style={{color: '#8C8A97'}}>22 anos</Text>
                                <Text style={{color: '#8C8A97'}}>Rotina</Text>
                            </View>
                            <Text style={{color: '#49B3BA', backgroundColor: '#E8FCFD', width: 100, textAlign: 'center', borderRadius: 5}}><Icon
                                size={14}
                                name='clockcircle'
                                type='antdesign'
                                color={'#49B3BA'}
                            /> 14:00</Text>
                        </View>
                        <TouchableOpacity style={{ alignSelf: 'end'}}>
                            <Text style={{color: 'red'}}>Cancelar</Text>
                        </TouchableOpacity>
                    </SpacedContainer>
                </CardContainer>
            </Container>
        </>
    )
}