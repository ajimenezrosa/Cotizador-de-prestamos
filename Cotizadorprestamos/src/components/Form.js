import React from 'react';
import { StyleSheet, TextInput , View } from 'react-native';
import colors from '../utils/colors';

export default function Form() {
    return(
        <View>
            <TextInput 
                placeholder="Cantidad a pedir"
            />
        </View>
    )
}