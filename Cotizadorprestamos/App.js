import React  from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button} from 'react-native';
import Form from './src/components/Form';
import colors from './src/utils/colors';
import { useState } from 'react';

export default function App() {
  const [capital ,setCapital] = useState(null);
  const [interes ,setInteres] = useState(null);
  const [months, setMonths] = useState(null);


  const onsubmit = () => {
     console.log("capital => " ,capital)
     console.log("interes => ", interes)
     console.log("Months => " ,months)
  }

  return(

    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.safeArea}>
        <View  style={styles.background} />
          <Text style={styles.titleApp} >Cotizador de Prestamos</Text>
          <Form 
            setCapital={setCapital}
            setInteres={setInteres}
            setMonths={setMonths}
          />
      </SafeAreaView>

      <View>
          <Text>Resultado</Text> 
      </View>
      <View>
      <Button
          title="Enviar"
          onPress={onsubmit}
        />
        <Text>Footer</Text>
      </View>
    </>
    );

}


const styles = StyleSheet.create({
  safeArea: {
    // backgroundColor: colors.PRIMARY_COLOR,
    height:290,

    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1
    
  },
  titleApp: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },

});






