import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { Login } from "./src/screens/Login/Login";
import { RecoverPassword } from "./src/screens/RecoverPassword/RecoverPassword";
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_700Bold, MontserratAlternates_500Medium } from "@expo-google-fonts/montserrat-alternates"
import { Quicksand_600SemiBold, Quicksand_500Medium } from "@expo-google-fonts/quicksand"
import { EmailCode } from "./src/screens/EmailCode/EmailCode";
import { NewPassword } from "./src/screens/NewPassword/NewPassword";
import { Singup } from "./src/screens/Singup/Singup";
import { Perfil } from "./src/screens/Perfil/Perfil";

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    MontserratAlternates_700Bold,
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Navigation" component={Navigation} options={{ title: "Navigation" }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
        <Stack.Screen name="RecoverPassword" component={RecoverPassword} options={{ title: "RecoverPassword" }} />
        <Stack.Screen name="EmailCode" component={EmailCode} options={{ title: "EmailCode" }} />
        <Stack.Screen name="NewPassword" component={NewPassword} options={{ title: "NewPassword" }} />
        <Stack.Screen name="Singup" component={Singup} options={{ title: "Singup" }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ title: "Perfil" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

