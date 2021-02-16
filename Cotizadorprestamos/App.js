import React  from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import colors from './src/utils/colors';
import { useState } from 'react';
import ResultCalculation from './src/components/ResultCalculation';

export default function App() {
  const [capital ,setCapital] = useState(null);
  const [interes ,setInteres] = useState(null);
  const [months, setMonths] = useState(null);
  const [total , setTotal] = useState(null);
  const [errorMessage, setErrorMessage] =useState('');


  const calculate = () => {
      reset();
      if(!capital){
        setErrorMessage("Anade la cantidad que quieres solicitar");
      } else if(!interes){
        setErrorMessage("Anade el Interes del prestamo");
      } else if(!months) {
        setErrorMessage("Selecciona los meses a pagar");
      }
      else {
        const i = interest / 100;
        const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
        console.log(fee.toFixed(2).replace('.',','));
        setTotal({
            monthlyFee: fee.toFixed(2).replace('.',','),
            totalPayable: (fee * months).toFixed(2).replace('.',','),
        });
      }
};

const reset = () =>{
  setErrorMessage("");
  setTotal(null);
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

      <ResultCalculation errorMessage={errorMessage} />

      <Footer calculate={calculate}/>

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






