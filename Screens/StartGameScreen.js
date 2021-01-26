import React,{useEffect} from 'react';
import {StyleSheet, View, Text,  Button} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
const StartGameScreen = props =>{
    
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>start a new game</Text>
           <View style={styles.inputContainer}>
                <Text>select a number</Text>
                <Input style={styles.input}/>
                <View style={styles.buttonContainer}>
                  <View style={styles.Button}><Button title="Reset"  onPress={()=>{}} color={Colors.accent}/></View>
                  <View style={styles.Button}><Button title="Confirm"  onPress={()=>{}} color={Colors.primary}/></View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    screen:{

        flex:1,
        padding:10,
        alignItems:'center',
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        elevation:5,
        backgroundColor:'#ffffff',
        padding:20,
        borderRadius:10
    },
    buttonContainer:{
        flexDirection:'row',
        width:200,
       justifyContent:'space-between',
        paddingHorizontal:15
    },
    Button:{
        width:80
    },
    input:{
        width:50
    }
});

export default StartGameScreen;