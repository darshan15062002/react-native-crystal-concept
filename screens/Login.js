import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, defaultstyling, inputStyleing } from '../style/style'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import ideabg2 from "../assets/portrait-young-girl-student-attending-school.jpg"
import { login } from '../redux/action/userAction'
import { useMessageAndError } from '../utils/hooks/useMessageAndError'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigation()
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");
    const loading = useMessageAndError(navigate, dispatch, "home")
    const submitHandler = () => {

        dispatch(login(text, password))

    }
    const { user } = useSelector((state) => state.user)


    useEffect(() => {
        if (user) {
            navigate.navigate("home")
        }
    }, [user])

    return (
        <KeyboardAwareScrollView contentContainerStyle={defaultstyling} behavior="padding" style={{ flex: 1 }}>
            <View>
                <View style={{ flexDirection: 'row', gap: 10, top: 30, justifyContent: 'flex-end', right: 15 }}>
                    <Text style={{ fontSize: 24, color: color.color1, fontWeight: '900' }}>Crystal</Text>
                    <Text style={{ color: color.color6, fontSize: 24, fontWeight: '900', fontFamily: 'Roboto' }}>Concept</Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', top: 70 }}>
                    <Text style={{ fontSize: 24, marginBottom: 10, fontWeight: '900', }}>Welcome Back</Text>
                    <View style={styles.imageContainer}>
                        <Image source={ideabg2} style={styles.imageStyle} />
                    </View>
                </View>

                <View style={{ top: 110, gap: 10, marginHorizontal: 15 }}>
                    <Text style={styles.label}>Username or phone no.</Text>
                    <TextInput
                        placeholder='91+'
                        style={inputStyleing}
                        label="Email"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        placeholder='student'
                        style={inputStyleing}
                        label="Password"
                        value={password}
                        onChangeText={password => setPassword(password)}
                    />
                    <Button loading={loading} disabled={loading} style={styles.button} onPress={submitHandler} uppercase textColor='white'>
                        <Text style={{ fontWeight: '700', fontSize: 20 }}>Login</Text>
                    </Button>
                </View>
            </View>
        </KeyboardAwareScrollView>

    )
}

export default Login

const styles = StyleSheet.create({
    button: {
        backgroundColor: color.color1,
        paddingHorizontal: 10,
        paddingVertical: 5,

    },
    imageContainer: {
        boarderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        borderRadius: 10,
        width: 280,
        height: 200,
    },
    label: {
        marginVertical: 0,
        marginHorizontal: 10,
        fontSize: 14,
        color: "gray"
    }

})
