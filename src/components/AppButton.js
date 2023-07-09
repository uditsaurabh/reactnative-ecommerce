import {
    Button, TouchableOpacity, Text,
    StyleSheet
} from 'react-native';
import React from 'react'

function AppButton({ title = "", type = "", style = {}, onPress = () => { } }) {
    console.log("INSIDE BUTTON")
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.appButtonContainer(type, style)}>
            <Text style={styles.appButtonText(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // ...
    appButtonContainer: (type = "", style = {}) => {
        return {
            ...style,
            elevation: 8,
            backgroundColor: type === "filled" ? "#4F63AC" : "#fff",
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 14,
            marginLeft: 15,
            marginRight: 15,


        }
    },
    appButtonText: (type) => {
        return {
            fontSize: 14,
            color: type === "filled" ? "#fff" : "#4F63AC",
            alignSelf: "center",
            textTransform: "uppercase"
        }
    }
});

export default React.memo(AppButton)