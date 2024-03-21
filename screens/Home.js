import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { color, defaultstyling } from '../style/style'
import { useSelector } from 'react-redux'
import { ProgressChart } from 'react-native-chart-kit';
import Card from '../components/Card';
import ideabg1 from '../assets/ideabg3.png'
import ideabg2 from '../assets/ideabg2.png'
import ideabg3 from '../assets/ideabg4.png'
const Home = () => {
    const { user } = useSelector((state) => state.user)
    const screenWidth = Dimensions.get("window").width;
    const cardData = [{
        title: "Summerizer",
        ideabg: ideabg1
    },
    {
        title: "Quiz",
        ideabg: ideabg2
    },
    {
        title: "Search",
        ideabg: ideabg3
    },
    {
        title: "Fees",
        ideabg: ideabg3
    },]
    const chartConfig = {
        backgroundGradientFrom: "#262D3A",
        backgroundGradientTo: "#262D3A",
        backgroundGradientFromOpacity: 0,
        backgroundColor: 'transparent',
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 3,
        barPercentage: 0.5,
        useShadowColorFromDataset: false
    };
    const data = {
        data: [0.8]
    };

    return (
        <View style={defaultstyling}>
            <View style={{ flexDirection: 'row', gap: 10, top: 30, justifyContent: 'flex-end', right: 15 }}>
                <Text style={{ fontSize: 24, color: color.color1, fontWeight: '900' }}>Crystal</Text>
                <Text style={{ color: color.color6, fontSize: 24, fontWeight: '900', fontFamily: 'Roboto' }}>Concept</Text>
            </View>
            <View style={{ top: 60 }}>
                <Text style={styles.headerText}>
                    <Text style={{ color: color.color1 }}> Hey, </Text> {user?.name} !
                </Text>
            </View>
            <View style={styles.container}>
                <View style={{ gap: 5 }}>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: '900' }}>Score</Text>
                    <Text style={{ color: color.color6, fontWeight: '600' }} ><Text style={{ color: color.color1, fontWeight: '500' }}>225  </Text> of   400 Points</Text>
                    <Text style={{
                        top: 20,
                        backgroundColor: '#525A60',
                        color: 'white',
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderRadius: 20,
                        fontWeight: '700',
                        width: '100%',
                    }}>40% left</Text>
                </View>
                <View style={{
                    position: 'relative', justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <ProgressChart

                        data={data}
                        width={screenWidth / 2}
                        height={110}
                        strokeWidth={15}
                        radius={45}
                        chartConfig={chartConfig}
                        hideLegend={true}
                    />
                    <Text style={{
                        position: 'absolute',
                        color: 'white',

                        fontWeight: '700',
                        fontSize: 20,

                    }}>80%</Text>
                </View>
            </View>

            <View style={{ flexWrap: 'wrap', flexDirection: 'row', top: 120, justifyContent: 'space-between', gap: 10 }}>
                {cardData?.map((item, index) => (
                    <Card key={index} title={item.title} ideabg={item.ideabg} />
                ))
                }
            </View>
        </View >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        top: 90,
        gap: 10,
        borderRadius: 20,
        elevation: 5,
        flexDirection: 'row',
        borderBottomColor: "#525A60",
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: "#262D3A"
    },
    headerText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '700'
    },
})
