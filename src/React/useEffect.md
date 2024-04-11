## useEffect?
class component에서 사용하던 라이프사이클을 `useEffect`로 사용할 수 있다.

**컴포넌트가 마운트 됐을 때(처음 나타날 때), 언마운트 될 때(사라질 때), 업데이트 될 때(초기값이나 props가 바뀌어
setState될 때)** 사용할 수 있다. 

<br>

## useEffect는 어떻게 사용할까?

useEffect 첫번 째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열(deps)이 들어간다. 

```js

useEffect=(()=>{
///함수
},[deps])

```

deps의 경우, **빈 배열**로 설정하면 컴포넌트가 **처음**나타날 때만 useEffect에 등록한 **함수가 호출**된다.

그리고 useEffect는 함수를 반환할 수 있는데 이것을 **cleanup**함수라고 부른다. 

**clean Up**함수는ㅕuseEffect에 대한 뒷정리를 해준다고 이해할 수 있다.

**deps**가 비어있는 경우 컴포넌트가 사라질 때 **clean up**함수가 호출된다. 

<br>

## deps에 특정 값 넣기

**deps**에 특정 값을 넣게 된다면 컴포넌트가 **처음 마운트** 될 때, 지정한 값이 **바뀔 때**에도 호출이 된다. 

또 **언마운트**시에 호출이 되고, 값이 바뀌기 **직전**에도 호출이 된다. 

🤷‍♀️그리고 useEffect 안에서 사용하는 **상태나 props**가 잇다면, **deps**에 넣어주어야 한다

만약 넣지 않는다면 useEffect에 등록된 함수가 실행 될 때 최신 props 상태를 가르키지 않게 된다. 


<br>

예시)

```js

////////App.js

import React, { useRef, useState } from "react";
import UserList from "./UserList";


function App(){

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "김미미",
      email: "김미미.com",
      active: true
    },
    {
      id: 2,
      username: "박주주",
      email: "박주주.com",
      active: false
    },
    {
      id: 3,
      username: "김땅주",
      email: "김땅주.com",
      active: false
    },
    {
      id: 4,
      username: "김코지",
      email: "김코지.com",
      active: false
    }
  ]);
  
    const onRemove = (id) => {
    console.log("지우기");
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  };
  
  return(
  <>
       <UserList users={users} onRemove={onRemove} />
  </>
  )
}




/////UserList.js
import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    console.log(user);
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
      console.log(user);
    };
  }, [user]);
  
  return(
  ///생략
  )


```


<br>

과정) 처음 페이지가 랜더가 되고 특정 아이디를 삭제 했을 때 
![캡처](https://user-images.githubusercontent.com/68775082/148019002-019359b2-9ef2-4823-841d-b99e3a9d8c34.PNG)


<br>

## deps 파라미터 생략하기 

**deps** 파라미터를 생략한다면, 컴포넌트가 **리랜더링**될 때마다 호출이 된다. 

참고로 리액트 컴포넌트는 부모컴포넌트가 리렌더링되면 자식 컴포넌트가 바뀐 내용이 없더라도 리랜더링 된다. 

이것은 즉 **Virtual DOM**에는 모든 걸 렌더링 하고 있다는 것이다.

나중에는 컴포넌트를 최적화 하는 과정에서 기존의 내용을 그대로 사용하면서 **Virtual DOM**에 리랜더링 하는 리소스를 아낄 수 있는 방안이 있다. 



