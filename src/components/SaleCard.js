import React from "react";
import { View, Text,Image, TouchableHighlight } from "react-native";
import {goSaleDetail} from '../actions/mainActions'
import {connect} from 'react-redux'


class SaleCard extends React.Component{


    constructor(props) {
        super(props);

        this.state = {

            _id:''

        }

        this.goToSaleDetail            = this.goToSaleDetail.bind(this);

    }

    goToSaleDetail(){

        console.log('- SaleCard.js - sale._id:',this.props.sale._id);
        this.props.goSaleDetail(this.props.sale._id);
    }






    render(){
        const { sale } = this.props;
        const index = sale.coverImageIndex;
        const placeholderImageUrl='https://gender.indiana.edu/images/publications/book-cover-placeholder.jpg';
        const imageUrl = sale.imageUrls.length > 0 ? sale.imageUrls[index || 0] : placeholderImageUrl;

        return(
            <View style={{
                borderColor:'#000',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
                paddingBottom: 10,
                width:'42%',
                padding: '2%',
                marginRight:'3%',
                marginLeft:'3%',
                marginBottom: 20,
                backgroundColor:'#ffffff'}}>

                <View style={{
                        marginTop:'10%',
                        marginBottom:'10%',
                        alignSelf:'center',
                        height:150,
                        width:120,

                        }}>
                            <TouchableHighlight   onPress={this.goToSaleDetail}>
                                <Image style={{width: 120, height: 150}} source={{uri:imageUrl}}></Image>
                            </TouchableHighlight>

                </View>

                <Text style={{
                    marginLeft:5,
                    fontWeight: 'bold',
                    marginBottom: 8
                }}>
                    {sale.title.length > 20 ? sale.title.substr(0,20) + "..." : sale.title}
                </Text>

                <Text style={{
                    marginLeft:5,
                    color: '#333333'
                }}>
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

const mapStateToProps = state => {
    const {_id} = state.main;
    return{
        _id
    }
}

export default connect(mapStateToProps,{goSaleDetail})(SaleCard);

