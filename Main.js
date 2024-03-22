import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Login from './screens/Login'
import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux'
import { loadUser } from './redux/action/userAction'
import Start from './screens/Start'
import Navigator from './components/Navigator'

const Main = () => {
    const Stack = createNativeStackNavigator()

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch])

    return (



        <NavigationContainer>

            <Stack.Navigator initialRouteName='start' screenOptions={{ headerShown: false }}>
                <Stack.Group >
                    <Stack.Screen name='start' component={Start} />
                    <Stack.Screen name='login' component={Login} />
                    <Stack.Screen name='home' component={Home} />


                </Stack.Group>
            </Stack.Navigator>
            {/* <Navigator /> */}
            <Toast position='top' topOffset={80} />
        </NavigationContainer>
    )
}

export default Main
