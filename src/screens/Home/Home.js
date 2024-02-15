import { StatusBar, View } from "react-native";
import { Container, SpacedContainer } from "../../components/Container/Style";
import { Header } from "../../components/Container/Style";
import { HeaderImage } from "../../components/Image/style";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { BorderedButtonTitle, ButtonTitle, MiddleTitle, Title } from "../../components/Title/style";
import { Icon } from "react-native-elements";
import { BorderedButton, Button } from "../../components/Button/style";


export const Home = () => {
    return (
        <>
            <StatusBar translucent />
            <Container>
                <Header>
                    <SpacedContainer style={{ padding: 10 }}>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <HeaderImage source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg', }} />
                            <View style={{ gap: -25, justifyContent: 'center', height: 60 }}>
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
                <Title style={{ textAlign: 'left', width: '90%' }}>Novembro 2023</Title>
                <SpacedContainer>
                    <Button style={{width: 'auto'}}>
                        <ButtonTitle style={{textTransform: 'capitalize'}}>Agendadas</ButtonTitle>
                    </Button>
                    <BorderedButton style={{width: 'auto'}}>
                        <BorderedButtonTitle style={{textTransform: 'capitalize'}}>Realizadas</BorderedButtonTitle>
                    </BorderedButton>
                    <BorderedButton style={{width: 'auto'}}>
                        <BorderedButtonTitle style={{textTransform: 'capitalize'}}>Canceladas</BorderedButtonTitle>
                    </BorderedButton>
                </SpacedContainer>
            </Container>
        </>
    )
}