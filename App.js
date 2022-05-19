import React, {Component} from 'react';

import Login from './src/Telas/1Login';             // TELA 01
import SingUp from './src/Telas/2SingUp';           // TELA 02
import Main from './src/Telas/3Main';               // TELA 03
import Quest from './src/Telas/4Quest';             // TELA 04
import Mapa from './src/Telas/5Mapa';               // TELA 05 
import Agenda from './src/Telas/6Agenda';         // TELA 06
import Confirma from './src/Telas/7Confirma';     // TELA 07
import Concluido from './src/Telas/8Concluido';     // TELA 08
import Medula from './src/Telas/9Medula';         // TELA 09
import InfoMedula from './src/Telas/10InfoMedula'    // TELA 10
import Perfil from './src/Telas/11Perfil';         // TELA 11
import EditPerfil from './src/Telas/12EditPerfil'; // TELA 12
import Estoque from './src/Telas/13Estoque';         // TELA 13
import Menu from './src/Telas/14Menu';             // TELA 14
import Sobre from './src/Telas/15Sobre';             // TELA 15
import WorkBench from './src/Telas/16WorkBench';   // TELA 16 WORKBENCH


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

class App extends Component{
    render(){
        const Stack = createNativeStackNavigator();
            return(
                <NavigationContainer>

                    <Stack.Navigator initialRouteName = 'Login'>

                            <Stack.Screen
                            name = "Login" component = {Login}
                            options = {{
                            headerShown: false,
                            title: "Login",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "SingUp" component = {SingUp}
                            options = {{
                            headerShown: false,
                            title: "Cadastro",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "Main" component = {Main}
                            options = {{
                            headerShown: false,
                            title: "Bem-Vindo(a)",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "Quest" component = {Quest}
                            options = {{
                            headerShown: false,
                            title: "Questionário",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "Mapa" component = {Mapa}
                            options = {{
                            headerShown: false,
                            title: "Mapa",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "Agenda" component = {Agenda}
                            options = {{
                            headerShown: false,
                            title: "Agenda",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "Confirma" component = {Confirma}
                            options = {{
                            headerShown: false,
                            title: "Confirma",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "Concluido" component = {Concluido}
                            options = {{
                            headerShown: false,
                            title: "Concluido",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "Medula" component = {Medula}
                            options = {{
                            headerShown: false,
                            title: "Medula",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "InfoMedula" component = {InfoMedula}
                            options = {{
                            headerShown: false,
                            title: "Medula",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "Perfil" component = {Perfil}
                            options = {{
                            headerShown: false,
                            title: "Perfil",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "EditPerfil" component = {EditPerfil}
                            options = {{
                            headerShown: false,
                            title: "EditPerfil",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "Estoque" component = {Estoque}
                            options = {{
                            headerShown: false,
                            title: "Estoque",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "Menu" component = {Menu}
                            options = {{
                            headerShown: false,
                            title: "Menu",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "Sobre" component = {Sobre}
                            options = {{
                            headerShown: false,
                            title: "Sobre",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                            <Stack.Screen
                            name = "WorkBench" component = {WorkBench}
                            options = {{
                            headerShown: false,
                            title: "WorkBench",
                            headerStyle: {backgroundColor: 'darkred'},
                            headerTintColor: 'white'
                            }}/>

                    </Stack.Navigator>

                </NavigationContainer>
            );
    }
}

export default App;