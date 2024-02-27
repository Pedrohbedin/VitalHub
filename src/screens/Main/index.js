import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Home/Home';
import { Perfil } from '../Perfil/Perfil';

const Tab = createBottomTabNavigator();

export function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#607EC5",
      }}
      initialRouteName='Home'
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
