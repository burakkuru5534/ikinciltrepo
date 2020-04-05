import React from "react";
import { View, Text,Image } from "react-native";




class SaleCard extends React.Component{


    render(){
        const { sale } = this.props;
        const index = sale.coverImageIndex;
        const placeholderImageUrl='https://gender.indiana.edu/images/publications/book-cover-placeholder.jpg';
        const imageUrl = sale.imageUrls.length > 0 ? sale.imageUrls[index || 0] : placeholderImageUrl;
        console.log(imageUrl);

        return(
            <View style={{
                borderColor:'#000',
                borderWidth:1,
                margin:2.5,
                height:275,
                width:'40%',
                marginRight: '5%',
                marginBottom: 20,
                backgroundColor:'#ddd'}}>

                <View style={{
                        marginTop:'10%', 
                        marginBottom:'10%', 
                        alignSelf:'center',
                        height:150,
                        width:120,
                        }}>
                            <Image style={{width: 120, height: 150}} source={{uri:imageUrl}}></Image>

                </View>

                <Text style={{marginLeft:5, fontWeight: 'bold'}}>
                    {sale.title}
                </Text>

                <Text style={{marginLeft:5, color: '#000'}}>
                    {sale.author}
                </Text>

                <View
                style={{
                    borderBottomColor: '#999999',
                    borderBottomWidth: 1,
                    margin: 10
                }}
                />
                <Text style={{marginLeft:5,color:'#000'}}>
                    {sale.city}, {sale.district}
                </Text>

            </View>
        );
    }
}

export  {SaleCard};