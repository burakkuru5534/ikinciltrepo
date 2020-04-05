import React from 'react';
import {ActivityIndicator,View,StyleSheet} from 'react-native';

const Spinner = () =>{

    return(
        <View style={StyleSheet.spinnerStyle}>
            <ActivityIndicator/>
        </View>
    )
}

const styles= StyleSheet.create({
    spinnerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
})
//bu spinner sana ne etti

export {Spinner}