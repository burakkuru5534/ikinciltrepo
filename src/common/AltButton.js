import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import {Spinner} from './spinner';

const AltButton = ({spinner,text,onPress}) => {

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
        width: 150,
        borderRadius:100,
        height:65
        
    },
    buttonTextStyle: {
       paddingTop:15,
        borderRadius: 100,
        textAlign: 'center',
        color: '#555',
        fontSize: 18,
        
    },
})

export {AltButton};