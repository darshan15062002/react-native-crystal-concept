import { StyleSheet, Text, View } from 'react-native';

const Navigator = () => {
    return (
        <View style={styles.container}>
            <Text>Navigator</Text>
        </View>
    );
};

export default Navigator;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        left: 30,
        borderRadius: 50,
        elevation: 8, // Adjust the elevation value for the shadow effect
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 20, // Increase the height of the shadow
        },
        shadowOpacity: 0.3,
        shadowRadius: 8, // Increase the shadow radius
        right: 30,
        height: 60,
        backgroundColor: "#3F4654",
    },
});
