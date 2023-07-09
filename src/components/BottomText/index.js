import { View, Text, StyleSheet } from 'react-native'
import { theme1Colors } from '../../utils/theme1'

export default function Bottomtext({ normalText = "", boldText = "", style = {} }) {
    return (
        <View style={styles.container}>
            <Text style={{
                color: theme1Colors.blue
            }}>{normalText}</Text>
            <Text style={{ fontWeight: 800, color: theme1Colors.blue }}>{boldText}</Text></View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    }
})