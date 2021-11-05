import React from "react";

function User({users}){
  return(  <div>
        <b>
            {users.username}
        </b>
        <span>
                    ({users.email})
                </span>
    </div>
  )
}

function UserList(){
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
                    user=>(<User key={user.id} users={user}/>
                    )
                )
            }

        </div>
    )

}

export default UserList;