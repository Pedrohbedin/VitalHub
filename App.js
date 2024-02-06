import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { Login } from "./src/screens/Login/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Navigation" component={Navigation} options={{ title: "Navigation" }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

