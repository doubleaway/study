import React, {useContext, useEffect} from "react";
import {UserDispatch} from "./App";

const User=React.memo(function User({users}){
    const {username,email,id,active}=users;
    const dispatch=useContext(UserDispatch);
console.log(dispatch);
  return(
      <div>
        <b
            onClick={()=>dispatch({
            type:'TOGGLE_USER',
            id
        })}
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
          <button
              onClick={()=>
              dispatch({
              type:'REMOVE_USER',
              id
          })
          }
          >삭제</button>
    </div>
  )
})

function UserList({users}){

//    하나하나 렌더링
    return(
        <div>

            {/*내장함수 map사용*/}
            {
                users.map(
                    user=>(<User  key={user.id} users={user}/>
                    )
                )
            }

        </div>
    )

}

export default React.memo(UserList,
    (prevProps,nextProps )=>nextProps.users===prevProps.users
    );