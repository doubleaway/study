import React, {createContext, CreateContext, useContext,useState} from "react";

const MyContent=createContext(ContextSample);

function Child(){
    const text=useContext(MyContent);
    return <div>안넹하세요/ {text}</div>
}

function Parent(){
    return <Child />
}

function GrandParents(){
    return <Parent />
}

function ContextSample({text}){
    const [value,setValue]=useState(true)
    return (
        <MyContent.Provider value={value?"굿":"릴리..밷.."}>
            <GrandParents text="굿!"/>
            <button onClick={()=>setValue(!value)}>Click Me</button>
        </MyContent.Provider>
    )
}

export default ContextSample;