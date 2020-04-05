import React from 'react';
import {Image,View,StyleSheet,TouchableOpacity} from 'react-native';

const MenuButton = ({source,onPress}) => {

    const content = 
     (<TouchableOpacity onPress={onPress}>
         <Image source={source}></Image>
     </TouchableOpacity>
              
     )

    return(
        <View >
            {content}
        </View>
    )
}

const styles = StyleSheet.create({

    ButtonWrapper: {

        marginTop: 10,
        alignSelf: 'center',
        width: 300,
        borderRadius:100,
        backgroundColor:'#00ddff',
        height:65
        
    },
    buttonTextStyle: {
       paddingTop:15,
        borderRadius: 100,
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        
    },
})

export {MenuButton};