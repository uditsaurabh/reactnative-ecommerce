import { View, StyleSheet } from "react-native";
import { useState, useMemo } from "react"
import ReusableHeader from "../../../components/Header";
import ReusableInputField from "../../../components/InputField";
import AppButton from "../../../components/AppButton";
import LineSeperatorWithText from "../../../components/LineSeperatorWithText";
import GoogleIcon from "../../../components/GoogleIcons";
import Bottomtext from "../../../components/BottomText";
import ReusableCheckbox from "../../../components/Checkbox";


export default function SignUp() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [isSelected, setSelected] = useState(false)
    const btnStyle = useMemo(() => {
        return {
            marginBottom: 5
        }
    }, [])
    return (
        <View style={styles.container}>
            <ReusableHeader text="Sign Up" />
            <View style={styles.form}>
                <ReusableInputField
                    fieldName="Name"
                    placeholder="jhon Doe"
                    text={name}
                    setText={setName}

                />
                <ReusableInputField
                    fieldName="E-mail"
                    placeholder="jhon Doe"
                    text={email}
                    setText={setEmail}

                />
                <ReusableInputField
                    fieldName="Password"
                    placeholder="password"
                    text={password}
                    setText={setPassword}
                    visiblility={true}

                />
                <ReusableCheckbox
                    isSelected={isSelected}
                    setSelection={setSelected} />
                <AppButton type='filled' title="sign in" style={btnStyle} />
            </View>
            <LineSeperatorWithText text="Or Sign up with" />
            <GoogleIcon />
            <Bottomtext
                normalText="Already have an account?"
                boldText="Sign In"

            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    form: {
        marginTop: 10
    }
})