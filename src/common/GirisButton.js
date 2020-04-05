import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import {Spinner} from './spinner';

const GirisButton = ({spinner,text,onPress}) => {

    const content = spinner ? (<Spinner/>) :
     (<TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonTextStyle}>
            {text}
        </Text>
     </TouchableOpacity>
              
     )

    return(
        <View style={styles.ButtonWrapper }>
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

export {GirisButton};