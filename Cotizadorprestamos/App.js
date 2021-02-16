import React  from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import colors from './src/utils/colors';
import { useState } from 'react';

export default function App() {
  const [capital ,setCapital] = useState(null);
  const [interes ,setInteres] = useState(null);
  const [months, setMonths] = useState(null);


  const calcular = () => {
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

      <Footer calcular={calcular}/>

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






