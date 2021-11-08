import React, {useEffect} from "react";

const User=React.memo(function User({users,onRemove,onToggle}){
    const {username,email,id,active}=users;
    //[], 첫화면 렌더링 될때 실행
    // useEffect(()=>{
    //     console.log('컴포넌트가 화면에 나타남');
    //     //컴포넌트가 마운트 되릿 추가 작업
    //     // 1. props로 받은값을 state값을 수정 2. rest api 3. d3 video.js 라이브러리 4. setInterval, setTimeout,
    //
    //     return ()=>{
    //         //unmount 1. clearIntaval, clearTimeOut
    //         //2. 라이브러리 인스턴스 제거
    //         //뒷정리 함수
    //         console.log("컴포넌트가 화면에서 사라짐")
    //     }
    // },[])

    //특정변수 users, user이 없데이트 될때마다 호출 return 값은 바뀌기전것이 먼저 호출
    // useEffect(()=>{
    //     console.log(users);
    //     return()=>{
    //         console.log('user 값이 바뀌기전:');
    //         console.log(users);
    //     }
    // },[users]);

  return(
      <div>
        <b onClick={()=>{onToggle(id)}}
            style={
                {
                    color:active?'green' : 'black',
                    cursor: 'pointer'
                }}
        >
            {username}
        </b>
        <span>
                    ({email})
                </span>
          {/*onclick에 넣을때는 함수를 함수에 넣어야함 =>아니면 컴포넌트가 렌더링될때 자동호출 됨 onclick={onRemove}(x)*/}
          <button onClick={()=>onRemove(id)}>삭제</button>
    </div>
  )
})

function UserList({users,onRemove,onToggle}){

//    하나하나 렌더링
    return(
        <div>
            {/*<div>*/}
            {/*    <b>*/}
            {/*        {users[0].username}*/}
            {/*    </b>*/}
            {/*    <span>*/}
            {/*        ({users[0].email})*/}
            {/*    </span>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <b>*/}
            {/*        {users[1].username}*/}
            {/*    </b>*/}
            {/*    <span>*/}
            {/*        ({users[1].email})*/}
            {/*    </span>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <b>*/}
            {/*        {users[2].username}*/}
            {/*    </b>*/}
            {/*    <span>*/}
            {/*        ({users[2].email})*/}
            {/*    </span>*/}
            {/*</div>*/}

            {/*다른 컴포넌트에서 불러오기*/}
            {/*<User users={users[0]}/>*/}
            {/*<User users={users[1]}/>*/}
            {/*<User users={users[2]}/>*/}

            {/*내장함수 map사용*/}
            {
                users.map(
                    user=>(<User onRemove={onRemove} onToggle={onToggle} key={user.id} users={user}/>
                    )
                )
            }

        </div>
    )

}

export default React.memo(UserList,
    (prevProps,nextProps )=>nextProps.users===prevProps.users
    );