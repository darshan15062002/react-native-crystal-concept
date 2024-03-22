import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars'
import { color } from '../style/style';

const CalendarScreen = () => {
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split('T')[0];

    return (
        <Calendar
            style={styles.container}

            current={formattedCurrentDate}
            markingType={'period'}
            markedDates={{
                '2024-05-20': { startingDay: true, textColor: 'white', color: color.color1, endingDay: true }, // Adjust textColor and color properties
            }}
            // dayComponent={(data) => {
            //     console.log(data);
            //     const { date, state, marking } = data;

            //     return (
            //         <View style={{
            //             backgroundColor: marking?.startingDay && marking?.endingDay && marking?.color,
            //             padding: marking?.startingDay && marking?.endingDay && "10px",
            //             // margin: marking?.startingDay && marking?.endingDay && 5,
            //             justifyContent: 'center', alignItems: 'center', margin: 0,
            //         }}>
            //             <Text style={{ color: state !== 'disabled' ? 'gray' : 'black' }}>{date.day}</Text>
            //         </View>
            //     );
            // }}
            theme={{
                backgroundColor: '#262D3A',
                calendarBackground: '#262D3A',
                textSectionTitleColor: '#b6c1cd',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: 'white',
                dayTextColor: 'gray',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: color.color1,
                disabledArrowColor: '#d9e1e8',
                monthTextColor: 'white',
                indicatorColor: color.color1,
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 12,
                textMonthFontSize: 12,
                textDayHeaderFontSize: 12,
            }}
        />

    )
}

export default CalendarScreen

const styles = StyleSheet.create({
    container: {
        elevation: 20,
        marginTop: 20,
        marginBottom: 30,
        borderRadius: 20,


        paddingBottom: 10, // Adjust as needed
    },
})
