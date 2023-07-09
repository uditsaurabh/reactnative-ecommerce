import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Pressable } from "react-native"
import { theme1Colors } from '../../utils/theme1';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

export default function GoogleIcon() {
    return (
        <View style={styles.container}>
            <Pressable style={styles.iconContainer} >
                <Icon name="logo-google" size={25} color="#fff" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
    },
    iconContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        backgroundColor: theme1Colors.orange
    },
})