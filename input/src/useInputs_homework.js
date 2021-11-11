import React,{useState,useCallback,useReducer} from "react";
function reducer(state,action){
    switch (action.type){
        case "FORM_SET":{
            console.log(state);
        }
    }
    return state;
}
function useInputs(initialForm){
    const [state,dispatch]=useReducer(reducer,initialForm);
    const {form}=state;
    const onChange = useCallback(e=>{
        const {name,value}=e.target;
        //dispatch(form=>({...form,[name]:value}));
        dispatch({
            type:"FORM_SET",
            form: {
                ...form,
                [name]: value
            }
        });
    },[]);
    const reset=useCallback(()=>dispatch({
        type:'RESET',
        form:{
            initialForm
        }
    }),[initialForm]);

    return[form,onChange,reset];

}

export  default useInputs;