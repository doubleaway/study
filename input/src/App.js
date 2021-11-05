import logo from './logo.svg';
import './App.css';
import UserList from "./userList";
import {useRef} from "react";
//고유 아이디값을 관리하기 위해 useref사용
function App() {
  const nextId=useRef(4);

  //항목을 추가 할 시
  const onCreate=()=>{
    console.log(nextId.current);//4
    //함수 호출할때마다 1씩 더해주기.
    nextId.current+=1;
  }

  const users=[
    {
      id:1,
      username:'veloper',
      email:'djfekjfkaeljfkejke@naver.com'
    },
    {
      id:2,
      username:'teste',
      email:'fekjdkfjekj@naver.com'
    },
    {
      id:3,
      username:'simon',
      email:'qlqp;oprewjf@naver.com'
    },
  ];
  return (
   <UserList users={users}/>
  );
}

export default App;
