import logo from './logo.svg';
import './App.css';
import UserList from "./userList";
import {useRef, useState} from "react";
import CreateUser from "./createUser";
//고유 아이디값을 관리하기 위해 useref사용
function App() {
  const nextId=useRef(4);
  const [inputs,setInputs]=useState({
    username:'',
    email:'',
  });
  const {username,email}=inputs;
  const onChange=e=>{
    const {name,value}=e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }

  //항목을 추가 할 시
  const onCreate=()=>{
    const user={
      id:nextId.current,
      username,
      email,
    };


    //push,splice sort는 사용하면 안됨. #꼭 사용해야한다면 복사하여 사용
    //spread연산자 사용 방법
      // setUsers([...users,user]);
    //concat 함수 사용 방법
    setUsers(users.concat(user));


    setInputs({
      username: '',
      email: ''
    });



    console.log(nextId.current);//4
    //함수 호출할때마다 1씩 더해주기.
    nextId.current+=1;
  }




  const [users,setUsers]=useState([
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
  ]);
  return (
      <>
        <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
        />
        <UserList users={users}/>
        </>
  );
}

export default App;
