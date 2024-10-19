import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { PropsStackRoutes } from './interfaces'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator<PropsStackRoutes>()
const Tab = createBottomTabNavigator<PropsStackRoutes>()

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Feather.glyphMap

          if (route.name === 'Home') {
            iconName = 'bookmark'
          } else if (route.name === 'Settings') {
            iconName = 'settings'
          } else if (route.name === 'Settings') {
            iconName = 'settings'
          } else {
            iconName = 'circle'
          }

          return <Feather name={iconName} size={size} color={color} />
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 5
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default AppNavigation
