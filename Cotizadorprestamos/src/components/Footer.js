//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native';
import colors from '../utils/colors';


// create a component
export default function Footer(props) {

    const { calculate } = props;



    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={calculate} >

                <Text style={styles.text} >Calcular</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width:'75%'
    },
});

//make this component available to the app

