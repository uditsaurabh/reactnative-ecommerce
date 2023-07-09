import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { theme1Colors } from '../../utils/theme1';
export default function ReusableCheckbox({ isSelected, setSelection }) {
    return (
        <View style={styles.checkboxContainer}>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
                color={theme1Colors.blue}
            />
            <Text style={styles.label}>Do you like React Native?</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 20
    },
    checkbox: {
        alignSelf: 'center',

    },
    label: {
        margin: 8,
        color: theme1Colors.blue
    },
});