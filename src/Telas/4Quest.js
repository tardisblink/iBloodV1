import React, {useState} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

function Quest(){

    const[tempo, setTempo] = useState (['Selecione','Nunca doei', 'De 1 à 2 Meses','De 2 à 3 meses','Acima de 4 meses'])
    const [tempoSelecionado, setTempoSelecionado] = useState ([])

    const[idade, setIdade] = useState (['Selecione','De 16 à 69 anos','Acima de 69 anos'])
    const [idadeSelecionado, setIdadeSelecionado] = useState ([])

    const[peso, setPeso] = useState (['Selecione','De 20 à 50 kg','Acima de 50kg'])
    const [pesoSelecionado, setPesoSelecionado] = useState ([])

    const[doente, setDoente] = useState (['Selecione','Sim','Não'])
    const [doenteSelecionado, setDoenteSelecionado] = useState ([])

    return(
        <ScrollView style = {estilos.geral}>

            <View style = {estilos.fundo}>

                <Image source = {require ('../Img/Bg.png')} style = {estilos.imagemfundo}/>

                <View style = {estilos.viewmenu}>

                    <TouchableHighlight onPress = {() => this.props.navigation.navigate('Menu')}>

                        <Image source = {require('../Img/Menu.png')} style = {estilos.imagemmenu}/>

                    </TouchableHighlight>

                </View>

                <View style = {estilos.frente}>

                <View style = {estilos.viewvolta}>

                    <TouchableHighlight onPress = {() =>this.props.navigation.navigate('Main')}>

                        <Image source = {require('../Img/Volta.png')} style = {estilos.imagemvolta}/>

                    </TouchableHighlight>

                </View>

                    <Text style ={estilos.titulo}>Questionário básico </Text>

                    <View style={estilos.area}>

                        <Text style ={estilos.questao}>Qual é o tempo da sua última doação? </Text>

                        <Picker style = {estilos.selecionador}
        
                            selectedValue = {tempoSelecionado}
                            onValueChange = {(itemValue) => setTempoSelecionado(itemValue)}>
                            {tempo.map(cr => {return <Picker.Item label ={cr} value = {cr} />})}

                        </Picker>

                        <Text style ={estilos.questao}>Qual é sua idade?</Text>

                        <Picker style = {estilos.selecionador}

                            selectedValue = {idadeSelecionado}
                            onValueChange = {(itemValue) => setIdadeSelecionado(itemValue)}>
                            {idade.map(cr => {return <Picker.Item label ={cr} value = {cr} />})}

                        </Picker>

                        <Text style ={estilos.questao}>Qual é seu peso? </Text>

                        <Picker style = {estilos.selecionador}

                            selectedValue = {pesoSelecionado}
                            onValueChange = {(itemValue) => setPesoSelecionado(itemValue)}>
                            {peso.map(cr => {return <Picker.Item label ={cr} value = {cr} />})}

                        </Picker>

                        <Text style ={estilos.questao}>Você esteve doente nos últimos dias?</Text>

                        <Picker style = {estilos.selecionador}

                            selectedValue = {doenteSelecionado}
                            onValueChange = {(itemValue) =>setDoenteSelecionado(itemValue)}>
                            {doente.map(cr => {return <Picker.Item label ={cr} value = {cr} />})}

                        </Picker>

                    </View>

                </View>

            </View>

        </ScrollView>    
    );
}

const estilos = StyleSheet.create({
    geral:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
    },

    fundo:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'crimson',
        position:'relative'
    },

    imagemfundo:{
        flex:1,
        width:450,
        height:100,
        paddingBottom:"20%"
    },

    viewmenu:{
        flex:1,
        width:30,
        height:30,
        marginTop:40,
        marginLeft:20,
        opacity:1,
        position:'absolute',
    },

    imagemmenu:{
        width:30,
        height:30,
        padding:17,
        backgroundColor:'darkred'
    },

    viewvolta:{
        flex:1,
        width:'100%',
        height:30,
        marginTop:20,
        paddingRight:20,
        opacity:1,
        position:'absolute',
        alignItems:"flex-end"

    },

    imagemvolta:{
        width:30,
        height:30,
        padding:17,
        backgroundColor:'white',
    },

    frente:{
        flex:2,
        paddingBottom:'10%',
        paddingTop:80,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        backgroundColor:'white',
        alignItems:'center', 
    },

    area: {
        flex: 1,
        marginHorizontal:5,
        marginTop: 30,
        marginLeft: 10,
    },

    questao:{
        fontSize: 20,
    },

    titulo:{
        fontSize: 20,
        marginBottom: 20,
        fontWeight:'bold'
    },

    selecionador: {
        fontSize: 15,
        width:300, 
        height: 40,
        backgroundColor: 'lightgray',
        marginTop: 10,
        marginBottom: 10
    },

    retorno:{
        fontSize:10,
        marginTop: 10,
        color: 'silver'
    }
});

export default Quest;