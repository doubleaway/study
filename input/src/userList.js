import React from "react";

function User({users,onRemove}){
    const {username,email,id}=users;
  return(
      <div>
        <b>
            {username}
        </b>
        <span>
                    ({email})
                </span>
          {/*onclick에 넣을때는 함수를 함수에 넣어야함 =>아니면 컴포넌트가 렌더링될때 자동호출 됨 onclick={onRemove}(x)*/}
          <button onClick={()=>onRemove(id)}>삭제</button>
    </div>
  )
}

function UserList({users,onRemove}){

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
                    user=>(<User onRemove={onRemove} key={user.id} users={user}/>
                    )
                )
            }

        </div>
    )

}

export default UserList;