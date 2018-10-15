import * as types from '../action/actionTypes.js'

const initialState = {
  boxDisplay:'meleeWeapon',
  loading: false,
  error: null,
  retrievedState: null,

}

const appReducer = (state=initialState, action)=>{
  
  switch(action.type){

//////////////////////
    case types.BOX_CHANGE:
      return{
        boxDisplay:action.payload
      }



    case types.UPDATE_DATABASE_ENTRY:
      fetch('http://localhost:3333/updateDatabase',{
        method: "POST",
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(action.payload)
      }).then((res,err)=>{
        if(err){
          console.log('First error',err)
        }
        res.json()
      }).then((res,err)=>{
        if(err){
          console.log("Second error", err)
        }
      }).catch((err)=>{
        console.log("Catch error", err)
      })
    return state;

    case types.CREATE_DATABASE_ENTRY:
      fetch('http://localhost:3333/createInDatabase',{
        method: "POST",
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(action.payload)
      }).then((res,err)=>{
        if(err){
          console.log('First error',err)
        }
        res.json()
      }).then((res,err)=>{
        if(err){
          console.log("Second error", err)
        }
      }).catch((err)=>{
        console.log("Catch error", err)
      })
    return state;

    case types.RETRIEVE_AND_SET_APP:

    return {
      ...action.payload[0]
    };
    

    case types.FETCH_PRODUCTS_BEGIN:

    return {
      ...state,
      loading: true,
      error: null
    }

    case types.FETCH_PRODUCTS_SUCCESS:
    return {
      ...state,
      loading: false,
      retrievedState: action.payload
    };
    
    case types.FETCH_PRODUCTS_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      items: []
    };

    
    default:
    return state;
  }

}

export default appReducer