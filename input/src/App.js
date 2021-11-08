import logo from './logo.svg';
import './App.css';
import UserList from "./userList";
import {useCallback, useMemo, useRef, useState} from "react";
import CreateUser from "./createUser";
//고유 아이디값을 관리하기 위해 useref사용

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user=>user.active).length;
}

function App() {

  const [users,setUsers]=useState([
    {
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
    },
  ]);

  const nextId=useRef(4);
  const [inputs,setInputs]=useState({
    username:'',
    email:'',
  });
  const {username,email}=inputs;
  const onChange=useCallback(e=>{
    const {name,value}=e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  },[inputs]);

  //항목을 추가 할 시
  const onCreate=useCallback(()=>{
    const user={
      id:nextId.current,
      username,
      email,
    }



    //push,splice sort는 사용하면 안됨. #꼭 사용해야한다면 복사하여 사용
    //spread연산자 사용 방법
      // setUsers([...users,user]);
    //concat 함수 사용 방법
    setUsers(users=>users.concat(user));


    setInputs({
      username: '',
      email: ''
    });



    console.log(nextId.current);//4
    //함수 호출할때마다 1씩 더해주기.
    nextId.current+=1;
  },[username,email]);

  //항목 삭제
  //filter함수 사용
  const onRemove=useCallback(id=>{
    setUsers(users=>users.filter(user=>user.id!==id));
  },users);

  //map의 다른 사용법 배열에 있는 특정아이템만 업데이트할때도 사용
const onToggle=useCallback(id=>{
    setUsers(users=>users.map(
        user=>user.id==id
        ?{...user,active:!user.active}
            :user
    ))
},[])



const count=useMemo(()=>countActiveUsers(users),[users]);

  return (
      <>
        <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        <div>활성사용자 수 : {count}</div>
        </>

  );
}

export default App;
