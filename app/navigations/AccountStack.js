import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Account from '../screens/Account/Account'
import Login from '../screens/Account/Login'
import Register from '../screens/Account/Register'

const Stack = createNativeStackNavigator();

export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="account-stack" component={Account} options={{title: "Mi cuenta"}} />
            <Stack.Screen name="login-stack" component={Login} options={{title: "Iniciar sesión"}}/>
            <Stack.Screen name="register-stack" component={Register} options={{title: "Registro"}}/>
        </Stack.Navigator>
    )
}
