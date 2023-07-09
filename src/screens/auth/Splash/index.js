import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import AppButton from '../../../components/AppButton';
import styles from "./styles";

function Splash() {
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.imageStyle} source={require("../../../assets/splashImage.png")} />
            <View style={styles.textDetails}>
                <Text style={styles.blue}>You will </Text>
                <Text style={styles.orange} >All you need is </Text>
                <Text style={styles.blue}>here</Text>
            </View>
            <View style={styles.btngroup}>
                <AppButton type='filled' title="sign up" style={{
                    marginTop: 10,
                    marginBottom: 10
                }} />
                <AppButton title="sign in" style={{
                    marginTop: 10,
                    marginBottom: 10

                }} />
            </View>
        </View>
    )
}

export default Splash