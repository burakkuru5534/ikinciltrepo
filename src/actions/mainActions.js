import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';//import AsyncStorage from '@react-native-community/async-storage';
//import axios from 'axios';

export const GO_SALE_DETAIL = 'go_sale_detail';
export const GO_SALE_DETAIL_SUCCESS='go_sale_detail_success';
export const GO_SALE_DETAIL_FAIL = 'go_sale_detail_fail';

export const goSaleDetail = (_id) =>{
   
    
    return (dispatch) =>{
        dispatch({
            type: GO_SALE_DETAIL,
            payload:_id
        });
      
        console.log('- mainActions.js - before actions.saledetails function:',_id)
        Actions.saledetails();


    }
}


