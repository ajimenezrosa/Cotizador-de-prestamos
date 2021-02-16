//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default function ResultCalculation(props)  {
    // const { capital, interes, months, total, errorMessage } = props;
    const {total, errorMessage } = props;
    
    return (
        <View style={styles.content}>
                {total && <Text>RESULT TOTAL</Text>}
                <View>
                    <Text style={styles.error} >{errorMessage}</Text>
                </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    content: {
        marginTop: 100,
        marginHorizontal: 40
    },
    error: {
        textAlign: 'center',
        color: '#F00',
        fontWeight: 'bold',
        fontSize: 20,

    }
});

//make this component available to the app

