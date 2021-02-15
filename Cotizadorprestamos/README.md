# Cotizador-de-prestamos
# 


#### para este ejemplo eliminamos todo el codigo del archivo App.js

#### estolo crearemos nosotros desde cero.

#### podemos anadir el siguiente codigo.

~~~javascript
import React from 'react';
import { StyleSheet, View, Text , SafeAreaView} from 'react-native';


export default function App() {
  
  return(
    <SafeAreaView>
       <Text>Hola Alejandro</Text>
    </SafeAreaView>
  )

}
~~~



primero Importamos el **'react-native'** para tener acceso a los elementos de React.

luego importamos los elementos de ***'react-native'***, esto para tener acceso a los elemento a utilizar de React-native.


#### Porcederemos a agregar los stilos, para esto debemos hacer lo siguiente, dentro del mismo App.js
~~~javascript

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#F00',
    height:200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
});

~~~

#### ademas asignamos los Estilos a los componentes de la siguiente forma.
~~~javascript
      <SafeAreaView style={styles.safeArea}>
~~~
le estamos asigunado los estilos que creamos al componente ***SafeAreaView***.
