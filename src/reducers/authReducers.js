import { EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS,
    SIGNUP,
    FORGETPASSWORD
     } from "../actions";

const INITIAL_STATE={
   email:'',
   password:'',
   loading:false,
   error:'',
   token:'',
   user: {},
  
}

export default (state=INITIAL_STATE,action) => {
   switch(action.type){
       
      case EMAIL_CHANGED:
         return {...state,email:action.payload}
      case PASSWORD_CHANGED:
         return {...state,password:action.payload}
      case LOGIN_USER_SUCCESS:
         return {...state,...INITIAL_STATE, user:action.payload}
      case LOGIN:
         return {...state,loading:true,error:''}
      case LOGIN_USER_FAILED:
         return {...state,loading:false,error:'Giriş işlemi başarısız...'}   
      case SIGNUP:
         return {...state, loading:false,error:''} //düzenlenecek. signup success ve signup failed  caseleri eklenecek.
      case FORGETPASSWORD:
         return {...state, loading:false,error:''} //düzenlenecek forget success ve forget fail caseleri eklenecek.
          
       
       default:
           return state;
   }

}