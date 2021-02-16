//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default function ResultCalculation(props)  {
    const { capital, interes, months, total, errorMessage } = props;
    
    return (
        <View style={styles.content}> 
        {total && (
            <View style={styles.boxResult}>
                <Text style={styles.title} >RESUMEN</Text>
                {/* <Text>data</Text>
                    <View style={styles.value}>
                        <Text>Cantidad solicitada</Text>
                        <Text>{capital}</Text>
                    </View>
                 */}

                 <DataResult title={"Cantidad solicitada"} value={`${capital} $`} />
                 <DataResult title={"Interes"} value={`${interes} %`} />
                 <DataResult title={"Plazos"} value={`${months} Meses`} />
                 <DataResult title={"Pago Mensual"} value={`${total.monthlyFee} $`} />
                 <DataResult title={"Total a pagar"} value={`${total.totalPayable} $`} />

                    
            </View>
        )}
                <View>
                    <Text style={styles.error} >{errorMessage}</Text>
                </View>

        </View>
    );
}

function DataResult(props){
    const { title , value } = props;

    return(
        <View style={styles.value}>
        <Text>{title}</Text>
        <Text>{value}</Text>
    </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    content: {
        marginTop: 0,
        marginHorizontal: 40
    },
    boxResult: {
        padding: 30,
    },
    title: {
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 30
    },
    value:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#F00',
        fontWeight: 'bold',
        fontSize: 20,

    },
});

//make this component available to the app

