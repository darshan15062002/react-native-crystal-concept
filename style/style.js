import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";


export const color = StyleSheet.create({
    color1: '#EB676A',
    color1_light: 'rgba(93,56,145,1)',
    color1_light2: 'rgba(235, 103, 106,0.4)',
    color2: '#191B20',
    color3: 'rgb(38, 45, 77)',
    color4: 'transparent',
    color5: '#DDDDDD',
    color6: 'white'
})
export const defaultstyling = StyleSheet.create({
    padding: 10,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,

    backgroundColor: color.color2,
})

export const inputStyleing = {

    paddingHorizontal: 20,
    height: 50,
    backgroundColor: color.color5,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10
}