import { View, StyleSheet, Text } from "react-native";
import { theme1Colors } from "../../utils/theme1";

export default function LineSeperatorWithText({ text = "hello" }) {
    return (
        <View style={styles.container()}>
            <View style={styles.line()} />
            <View style={styles.text()}><Text style={{ color: theme1Colors.blue }}>{text}</Text></View>
            <View style={styles.line()} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: (type) => {
        return {
            flexDirection: "row",
            flex: 1,
            margin: 20,


        }
    },
    line: (color = "#DADADA") => {
        return { flex: 1, backgroundColor: color, height: 1 }
    },
    text: () => {
        return { position: "relative", bottom: 10, paddingLeft: 10, paddingRight: 10 }
    }
})