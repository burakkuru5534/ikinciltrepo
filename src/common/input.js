
import React, {Component} from 'react';
import {Image,View,TextInput,StyleSheet} from 'react-native';

const Input = ({source,inputPlaceHolder,onKeyPress, onChangeText,value,secureTextEntry,placeholderTextColor}) =>{
  
    return(

        <View style={styles.inputWrapper}>
            <Image style={{marginLeft:5}} source={source}></Image>
           
           
            <TextInput style={styles.textInputStyle}
             placeholder={inputPlaceHolder} 
             placeholderTextColor={placeholderTextColor}
             secureTextEntry={secureTextEntry} 
             onChangeText={onChangeText} 
             onKeyPress={onKeyPress}
             
             secureTextEntry={secureTextEntry} 

             value={value}/>

        </View>

    );
}


const styles= StyleSheet.create({
    inputWrapper:{
        flexDirection:'row',
        height:50,
        width:300,
        margin:10,
        backgroundColor:'#000',
        opacity:0.7,
        alignItems:'center',
        alignSelf:'center',
        borderRadius:50
        

    },
    textInputStyle:{
        fontSize:17,
        marginLeft:5,
        color:'white'
        

    },
   
})



export {Input}