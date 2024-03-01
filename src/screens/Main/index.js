import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Home/Home';
import { Perfil } from '../Perfil/Perfil';
import { Icon } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FBFBFB',
          borderRadius: 10,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center'
        },
        tabBarActiveTintColor: "#607EC5",
        tabBarInactiveTintColor: "#4E4B59",
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Quicksand_500Medium"
        },
        headerShown: false,
      }
      }
      initialRouteName='Home'
      backBehavior='initialRoute'
      detachInactiveScreens={true}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: ({ focused, size }) => focused ? null : <Text style={{ fontSize: size, color: "#4E4B59", fontFamily: "Quicksand_500Medium" }}>Agenda</Text>,
        tabBarIcon: ({ focused, color, size }) => (
          <Icon style={{ backgroundColor: focused ? "#ECF2FF" : "transparent", borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }} type="feather" name="calendar" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Perfil" component={Perfil} options={{
        tabBarLabel: ({ focused, size }) => focused ? null : <Text style={{ fontSize: size, color: "#4E4B59", fontFamily: "Quicksand_500Medium" }}>Home</Text>,
        tabBarIcon: ({ focused, color }) => (
          <Ionicons style={{ backgroundColor: focused ? "#ECF2FF" : "transparent", borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', textAlign: 'center', textAlignVertical: 'center' }} name="person-circle-outline" color={color} size={29} />
        ),
      }} />
    </Tab.Navigator >
  );
}
