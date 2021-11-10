import logo from './logo.svg';
import './App.css';
import UserList from "./userList";
import {useCallback, useReducer,useMemo, useRef, useState} from "react";
import CreateUser from "./createUser";
import useInputs from "./UseInputs";
//고유 아이디값을 관리하기 위해 useref사용

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user=>user.active).length;
}
const initialState={

  users:[  {
    id:1,
    username:'veloper',
    email:'djfekjfkaeljfkejke@naver.com',
    active:true
  },
    {
      id:2,
      username:'teste',
      email:'fekjdkfjekj@naver.com',
      active:false
    },
    {
      id:3,
      username:'simon',
      email:'qlqp;oprewjf@naver.com',
      active:false
    },]
}

function reducer(state,action){
  switch (action.type){

    case 'CREATE_USER':
      return {
        inputs:initialState.inputs,
        users:state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return{
        ...state,
          users:state.users.map(user=>user.id===action.id?{
            ...user,active:!user.active}:user
      )
    }
    case 'REMOVE_USER':
      return{
        ...state,
        users:state.users.filter(user=>user.id!==action.id)
      }
    default:
      throw new Error('Unhandled action');
  }

}
function App() {
const [state, dispatch]=useReducer(reducer , initialState);
const [form, onChange, reset]=useInputs({
  username: '',
  email: ''
});
const {username,email}=form;
const nextId=useRef(4);
const { users }=state;



const onCreate = useCallback(()=>{
  dispatch({
    type:'CREATE_USER',
    user:{
      id:nextId.current,
      username,
      email,
    }
  });
  nextId.current+=1;
  reset();
},[username,email,reset]);

const onToggle=useCallback((id)=>{
  dispatch({
    type:'TOGGLE_USER',
    id
  });
},[]);

const onRemove=useCallback(id=>{
  dispatch({
    type:'REMOVE_USER',
    id
  });
},[]);

const count=useMemo(()=>countActiveUsers(users),[users]);
  return (
      <>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList
            users={users}
            onToggle={onToggle}
            onRemove={onRemove}
        />
        <div>활성사용자 수 :{count}</div>
        </>

  );
}

export default App;
