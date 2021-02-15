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


# Colores Globales de la Aplicacion

creamos un fichero en src/utils
~~~javascript

export default {
    PRIMARY_COLOR: '#0098d3',
    PRIMARY_COLOR_DARK: '#006691',
};
~~~

luego lo importamos de la siguiente manera
~~~javascript
import colors from './src/utils/colors';
~~~

ya estamos listo para utilizar los colores que creamos como recursos globales.

para esto solo debemos hacer lo siguiente.
~~~javascript
backgroundColor: colors.PRIMARY_COLOR,
~~~


# 
## Uso con Navigator #
### Es posible tener múltiples componentes StatusBar montados al mismo tiempo. Los accesorios se fusionarán en el orden en que se montaron los componentes de StatusBar.

~~~javascript
import { StyleSheet, View, Text , SafeAreaView, StatusBar} from 'react-native';
~~~

y lo utilizamos de la siguiente manera.
~~~javascript
    <StatusBar barStyle={'light-content'} />
~~~