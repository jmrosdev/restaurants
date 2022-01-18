import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TopRestaurants from '../screens/TopRestaurants'

const Stack = createNativeStackNavigator();

export default function TopRestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="topRestaurants-stack" component={TopRestaurants} options={{title: "Top Restaurantes"}} />
        </Stack.Navigator>
    )
}
