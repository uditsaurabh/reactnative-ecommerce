import { View, StyleSheet } from "react-native";
import { useState } from "react"
import ReusableHeader from "../../../components/Header";
import ReusableInputField from "../../../components/InputField";
import AppButton from "../../../components/AppButton";
import LineSeperatorWithText from "../../../components/LineSeperatorWithText";
import GoogleIcon from "../../../components/GoogleIcons";
import Bottomtext from "../../../components/BottomText";

export default function SignIn() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    return (
        <View style={styles.container}>
            <ReusableHeader text="Sign In" />
            <View style={styles.form}>
                <ReusableInputField
                    fieldName="E-mail"
                    placeholder="jhon Doe"
                    text={name}
                    setText={setName}

                />
                <ReusableInputField
                    fieldName="Password"
                    placeholder="password"
                    text={password}
                    setText={setPassword}
                    visiblility={true}

                />
                <AppButton type='filled' title="sign in" style={{
                    marginTop: 10,
                    marginBottom: 10
                }} />
            </View>
            <LineSeperatorWithText text="Or SignIn with" />
            <GoogleIcon />
            <Bottomtext
                normalText="Don't have an account?"
                boldText="SignUp"

            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    form: {
        marginTop: 50
    }
})