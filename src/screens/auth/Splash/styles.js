
import {
    StatusBar,
    StyleSheet,

} from 'react-native';

import { theme1Colors } from '../../../utils/theme1';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    btngroup: {
        marginTop: 40
    },
    textDetails: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    blue: {
        color: theme1Colors.blue,
        fontSize: 36
    },
    orange: {
        color: theme1Colors.orange,
        fontSize: 36,
        textDecorationLine: "underline",

    },
    button: {
        width: "80%"
    },
    imageStyle: {
        marginTop: 100
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default styles