import { View, Text, TextInput, StyleSheet } from "react-native"
import { theme1Colors } from "../../utils/theme1"
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from "react"

export default function ReusableInputField({ fieldName = "", placeholder = "", text = "", setText, visiblility = false }) {
    const [passwordHidden, setPasswordHidden] = useState(false)
    return (
        <View style={styles.container}>
            <Text style={styles.inputText()}>{fieldName}</Text>
            <TextInput
                placeholderStyle={{
                    color: "#C5C5C5",
                    marginLeft: 10
                }}
                style={styles.input()}
                onChangeText={setText}
                value={text}
                placeholder={placeholder}
                secureTextEntry={passwordHidden}
            >
            </TextInput>
            {visiblility && (<Icon style={{ position: "absolute", bottom: 26, right: 20, color: "#C5C5C5" }} name={passwordHidden ? "eye-off-outline" : "eye-outline"} color="#4F8EF7"
                onPress={(e) => { setPasswordHidden(state => !state) }}
                size={25} />)}
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 10,
        margin: 10,
        position: 'relative'
    },
    inputText: () => {
        return {
            color: theme1Colors.blue,
            marginBottom: 5
        }
    },
    input: () => {
        return {
            height: 60,
            borderWidth: 1,
            borderColor: theme1Colors.blue,
            borderRadius: 8


        }
    }
})