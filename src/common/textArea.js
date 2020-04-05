import React from 'react';
import {StyleSheet,View,TextInput} from 'react-native'

const TextArea = ({placeholder,onChangeText,placeholderTextColor,value}) => {

    return (
        <View style={styles.TextAreaWrapper}>
            <TextInput placeholder={placeholder}
                       placeholderTextColor={placeholderTextColor}
                        onChangeText={onChangeText}
                        value={value}
                        style={styles.TextAreaStyle}/>
                        
        </View>
    )
}

const styles = StyleSheet.create({

    TextAreaWrapper:{
        borderWidth:1,
        borderColor:'#ddbb00',
        height:50,
        margin:10

    },
    TextAreaStyle:{
        height:50,
        fontSize:18,
        color:'#000'
    }

})

export {TextArea};