import { 
    GO_SALE_DETAIL,
    GO_SALE_DETAIL_SUCCESS,
    GO_SALE_DETAIL_FAIL
     } from "../actions";

const INITIAL_STATE={
  
   _id:''
  
}

export default (state=INITIAL_STATE,action) => {
   switch(action.type){
       
    case GO_SALE_DETAIL:
        return {...state,...INITIAL_STATE,_id:action.payload}
       
    default:
        return state;
   }

}