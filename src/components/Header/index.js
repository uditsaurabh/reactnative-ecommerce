import {
    Button, TouchableOpacity, Text,
    StyleSheet,
    View
} from 'react-native';
import { theme1Colors } from '../../utils/theme1';


export default function ReusableHeader({ text }) {
    return (
        <View style={styles.header()}>
            <Text style={styles.headerTextStyle()}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: (type) => {
        return {
            marginLeft: 20
        }
    },
    headerTextStyle: () => {
        return {
            fontSize: 26,
            fontWeight: 600,
            color: theme1Colors.blue
        }
    }
})