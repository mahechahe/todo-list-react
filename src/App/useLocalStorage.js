import React, {useReducer} from "react";

function useLocalStorage(itemName, initialValue){

  const [state, dispatch] = useReducer(reducer, initialState({initialValue}));

  const {
    loading,
    error,
    item,
   } = state;
  
  //ACTION CREATORS
  const onError = (error) => {
    return dispatch({type: actionTypes.error, payload: error});
  }
  const onSucces = (item) => {
    return dispatch({type: actionTypes.succes, payload: item});
  }
  const onSave = (item) => {
    return dispatch({type: actionTypes.save, payload: item});
  }
  
    React.useEffect(() => {
      setTimeout(() => {
       try{
            //Llamando al localStorage
        const localStorageItem = localStorage.getItem(itemName);
        let parserItem;
      
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parserItem = initialValue;
        }else{
          parserItem = JSON.parse(localStorageItem);
        }
        
        onSucces(parserItem);
        // setItem(parserItem);
        // setLoading(false);
       }catch(error){
        onError(error);
       }
      }, 2000);
    }, [  ])
  
   
  
  
     //Usando el localStorage
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        onSave(newItem)
      }catch(error){
        onError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
}

const initialState = ({initialValue}) => ({
  loading: true,
  error: false,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  succes: 'SUCCES',
  save: 'SAVE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.succes]: {
    ...state,
    error: false,
    loading: false,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export {useLocalStorage};