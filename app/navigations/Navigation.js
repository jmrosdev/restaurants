import react from "react";
import { NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from 'react-native-elements'
import { COLOR_ACTIVE, COLOR_INACTIVE } from '../constants'

import RestaurantsStack from "./RestaurantsStack"
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator();

const screenOptions = (route, props) => {
    let iconName = '';
    const {color, focused} = props

    switch (route.name) {
        case "restaurants":
            iconName = "compass-outline"
            break;
        case "favorites":
            iconName = "heart-outline"
            break;
        case "topRestaurants":
            iconName = "star-outline"
            break;
        case "search":
            iconName = "magnify"
            break;
        case "account":
            iconName = "home-outline"
            break;
        default:
            break;
    }

    return <Icon type="material-community" name={iconName} size={22} color={focused ? COLOR_ACTIVE : COLOR_INACTIVE}/>
}

export default function Navigation () {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="restaurants"
                screenOptions={({route}) => ({                    
                    tabBarActiveTintColor: COLOR_ACTIVE,
                    tabBarInactiveTintColor: COLOR_INACTIVE,
                    tabBarIcon: (props) => screenOptions(route, props)                    
                })}
            >
                <Tab.Screen name="restaurants" component={RestaurantsStack} options={{ title: "Restaurantes", headerShown: false}}/>
                <Tab.Screen name="favorites" component={FavoritesStack} options={{ title: "Favoritos", headerShown: false}}/>
                <Tab.Screen name="topRestaurants" component={TopRestaurantsStack} options={{ title: "Top", headerShown: false}}/>
                <Tab.Screen name="search" component={SearchStack} options={{ title: "Búsqueda", headerShown: false}}/>
                <Tab.Screen name="account" component={AccountStack} options={{title: "Mi cuenta",  headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}