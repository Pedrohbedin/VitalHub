import { Home } from "../../screens/Home/Home";
import { Perfil } from "../../screens/Perfil/Perfil";

export const Navegator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Agenda" component={Home} />
                <Tab.Screen name="Clinicas" component={Clinicas} />
                <Tab.Screen name="Perfil" component={Perfil} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}