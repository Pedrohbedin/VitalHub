import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Home/Home';
import { Perfil } from '../Perfil/Perfil';
import { ContentIcon, TextIcon } from './style';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export function Main({ route }) {
  const Aparece = route.params;

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: '#FFFFFF', height: 80 },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"} >
                <FontAwesome name="calendar" size={18} color={focused ? "#607EC5" : "#4E4B59"} />
                {focused && <TextIcon>Agenda</TextIcon>}
              </ContentIcon>
            )
          } else {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"} >
                <FontAwesome5 name="user-circle" size={18} color={focused ? "#607EC5" : "#4E4B59"} />
                {focused && <TextIcon>Perfil</TextIcon>}
              </ContentIcon>
            )
          }
        },
      })}
    >
      <BottomTab.Screen name="Home" component={Home} initialParams={{ modal: Aparece == true ? true : false }} />
      <BottomTab.Screen name="Perfil" component={Perfil} />
    </BottomTab.Navigator >
  );
}
