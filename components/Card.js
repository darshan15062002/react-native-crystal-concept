import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Card = ({ title, ideabg }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{title}</Text>
            <Image source={ideabg} style={styles.imageStyle} />
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 100,
        gap: 10,
        borderRadius: 20,
        elevation: 5,
        flexDirection: 'row',

        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: "#262D3A"
    },
    imageStyle: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        borderRadius: 10,
        width: 35,
        height: 35,
    },
    headerText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700',

    },
})