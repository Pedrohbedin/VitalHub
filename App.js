import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Login } from "./src/screens/Login/Login";
import { EsqueceuSenha } from "./src/screens/EsqueceuSenha/EsqueceuSenha";
import { Perfil } from "./src/screens/Perfil/Perfil";
import { CodigoEmail } from "./src/screens/CodigoEmail/CodigoEmail";
import { NovaSenha } from "./src/screens/NovaSenha/NovaSenha";
import { Cadastrar } from "./src/screens/Cadastrar/Cadastrar";
import { Prontuario } from "./src/screens/Prontuario/Prontuario";
import { Home } from "./src/screens/Home/Home";
import { Clinica } from "./src/screens/Seletores/Clinica/Clinica";
import { Medico } from "./src/screens/Seletores/Medico/Medico";
import { DataPage } from "./src/screens/Seletores/Data/Data";
import { Main } from "./src/screens/Main/Main";
import { Local } from "./src/screens/Local/Local";
import { Prescricao } from "./src/screens/Prescricao/Prescricao";

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_700Bold, MontserratAlternates_500Medium } from "@expo-google-fonts/montserrat-alternates"
import { Quicksand_600SemiBold, Quicksand_500Medium } from "@expo-google-fonts/quicksand"

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    MontserratAlternates_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} options={{ title: "EsqueceuSenha" }} />
        <Stack.Screen name="CodigoEmail" component={CodigoEmail} options={{ title: "CodigoEmail" }} />
        <Stack.Screen name="NovaSenha" component={NovaSenha} options={{ title: "NovaSenha" }} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ title: "Cadastrar" }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ title: "Perfil" }} />
        <Stack.Screen name="Prontuario" component={Prontuario} options={{ title: "Prontuario" }} />
        <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
        <Stack.Screen name="Clinica" component={Clinica} options={{ title: "Clinica" }} />
        <Stack.Screen name="Medico" component={Medico} options={{ title: "Medico" }} />
        <Stack.Screen name="Data" component={DataPage} options={{ title: "Data" }} />
        <Stack.Screen name="Main" component={Main} options={{ title: "Main" }} />
        <Stack.Screen name="Local" component={Local} options={{ title: "Local" }} />
        <Stack.Screen name="Prescricao" component={Prescricao} options={{ title: "Prescricao" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

