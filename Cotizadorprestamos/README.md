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

# Formulario de cotizacion

#### Crearemos el formulario de cotizacion en nuestra carpeta
#### ***src\components\form.***js
 
 #### El mismo quedaria como se muestra el codigo a continuacion, debo senalas que este codigo cambiara de seguro en el transcurso de la creacion de mi proyecto.

 ~~~javascript
import React from 'react';
import { StyleSheet, TextInput , View } from 'react-native';
import colors from '../utils/colors';

export default function Form() {
    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>

            <TextInput 
                placeholder="Cantidad a pedir"
                keyboardType='numeric'
                style={styles.input}
                />
    
            <TextInput 
                placeholder="Interes %"
                keyboardType='numeric'
                style={[styles.input , styles.inputPercentage ]}
                />
           </View>
        </View>
    )
}
 ~~~

#### para que nuestro formulario tenga la apariencia que deseamos debemos agregar algunos estilos.

#### esto lo haremos en el mismo Form.js con el siguiente codigo
~~~javascript


const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: -90,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row',

    },
    input: {
        height: 50,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5,
    },


});
~~~
# Anadir diseno y valoes al Picker Select

Anexo un ejemplo del codigo del picker Select
para que esto funcione de una forma correcta es necesario realizar la instalacion del componente.

~~~javascript
npm install react-native-picker-select

# React Native users
npm install @react-native-picker/picker
npx pod-install
~~~
# 
![](https://raw.githubusercontent.com/lawnstarter/react-native-picker-select/ca6488c2eef5c776a8071400c8b7987712d43397/ex-android.gif)

~~~javascript
           <RNPickerSelect style={pickerSelectStyles}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: '3 Meses', value: '3' },
                { label: '6 Meses', value: '6' },
                { label: '12 Meses', value: '12' },
                { label: '24 Meses', value: '24' },

            ]}
        />
~~~        


