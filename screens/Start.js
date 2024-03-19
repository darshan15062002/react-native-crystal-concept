import { Image, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { defaultstyling } from '../style/style'
import ideabg2 from "../assets/images.png"
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { useMessageAndError } from '../utils/hooks/useMessageAndError'

const Start = () => {
    const navigate = useNavigation()


    const { user } = useSelector((state) => state.user)


    useEffect(() => {
        if (user) {
            navigate.navigate("home")
        } else {
            setTimeout(() => {
                navigate.navigate("login")
            }, 5000)
        }

    }, [user])

    return (
        <View style={defaultstyling}>
            <View style={styles.imageContainer}>
                <Image source={ideabg2} style={styles.imageStyle} />
            </View>
        </View>
    )
}

export default Start


const styles = StyleSheet.create({
    imageContainer: {
        boarderRadius: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        borderRadius: 10,
        width: 70,
        height: 70,
    },
})