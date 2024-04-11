> 🦔 **부모컴포넌트**에서 **자식컴포넌트**로 props 내려보내는 방법외에 페이지 이동시 **routing**방법으로 내려보내는 방법도 있다!  

## 1. useHistory();

### 가정상황
🙍‍♀️ **input**에 입력되는 값을 **button**클릭 시 페이지가 이동되며 입력된 값을 **props**로 내려보내기


<br>


- react-router-dom에서 **useHistory**를 불러온다.
그리고 **test**라는 변수에 **useHistory()**를 저장한다. 
```js

import { useHistory } from "react-router-dom";

const test = useHistory();
```

<br>


- **state**로 **빈스트링**으로 설정해주고 **input**에 이벤트 **onChange**가 실행될 때 `handleChange`함수가 실행된다. 
그리고 현재 입력되는 값을 **setInputValue**에 set해준다.

```js

let [inputValue, setInputValue] = useState("");
const test = useHistory();
  const handleChange = (e) => {
    setInputValue(e.currentTarget.value);
  };


<input placeholder="ID" type="text" onChange={handleChange} />
  
```

<br>

- 그리고 button이 클릭 될 때 **test(useHistory()).push**를 사용하여 **object**형식으로 **push**를 할 수 있다. `object`에는 `pathname`에는 **이동할 경로**와 `inputValue`라는 key이름으로 **inputValue**를 보내주었다. 

```js

  <button type="submit" onClick={() =>  test.push({
                      		pathname: "/youtubeMain",
                      		inputValue: inputValue,
                    			})}>
```

🔗 이 외에도 아래 내용을 보낼 수 있다.

![](https://images.velog.io/images/duswn38/post/2963fa0d-91ba-4f8d-95b4-55395f67ae51/%EC%BA%A1%EC%B2%981.PNG)



<br>

- 넘어온 props를 출력해보면?

`console.log(props)` 
`console.log(props.history.location.inputValue);` 의 결과

![](https://images.velog.io/images/duswn38/post/e7e2f19a-9c1c-468d-b3c7-2b2392970fd9/%EC%BA%A1%EC%B2%98.PNG)


<br>

- 이동하면서 넘어온props를 불러오는 경우

```js

import { useHistory } from "react-router-dom";

  const history = useHistory();
  console.log(history);
////넘어온 history를 확인할 수 있다! 
```

<br>

## 2. useLocation();

> **현재 페이지**에 대한 **url**정보를 알려주는 hooks. **url**이 바뀔 때마다 **새로운 location**이 반환된다! 


- react-router-dom 에서 **useLocation**을 가져온다. 

```js
import { useLocation } from "react-router-dom";

```

<br>

- 다음 useLocation()에서 반환되는 객체를 history에 setup해준다. 

```js

  let location = useLocation();
  console.log(location);

```


<br>

- console 결과
![](https://images.velog.io/images/duswn38/post/fd28c812-9c28-4599-a120-5bf67c4b0aff/%EC%BA%A1%EC%B2%982.PNG)


<br>

💧 내용물은? 
1. pathname : 현재 경로
2. search: **?**부터 나오는 **문자열** `ex) ?id=1` 
3. hash : **#**부터 나오는 **문자열** `ex) #id=1`
(search와 hash 동시에 사용할 수 있다!)
4. state: 숨겨서 보내는 정보
5. key: 고유한 **문자열 키**. 
똑같은 페이지를 클릭하면 **새로고침**이 되는데 그럼 **history stack**에 클릭한 수만큼 정보가 쌓인다.
이 때 몇 번째 스텍에 있는 **객체**인지 알기 위해 **key**를 이용한다! 


<br>


## 3. useRef 


>Dom을 직접 선택하여 프로퍼티에 직접 접근할 수 있다.



## 4. useCallback

>컴포넌트가 리랜더링 될 때마다 함수가 새로 생성되는데 그것을 막아주고 최적화하는데 사용한다.
함수를 저장하고 디팬던시에 넣어준 의존값이 변경되면 함수가 새로생성된다.


## 5. useMemo

> 값을 저장하고 특정값이 변동될때만 리랜더가된다. 페이지 최적화를 할 수 있다. 
> 값이 바뀌지 않는다면 이전에 값을 사용한다.

## 6. useEffect
> useEffet는 클래스형 컴포넌트의 ComponentDidmount, ComponentDidUpdate, ComponentDidWillUnmount
> 을 합친 형태이다.

1. 처음 마운트 될 때만 실행하고 싶을 때는 빈 배열을 넣어준다.
2. 특정 값이 변경되었을때 실행하고 싶다면 배열에 의존값을 넣어준다.
3. state가 업데이트 되기 전에 뒷정리를 해주는 cleanup함수를 반환해준다.
랜더가 될때마다 useEffect가 호출되기 때문에 버그가 일어날 확률이 높다. 
그러므로 cleanup함수를 호출해준다. 언마운트될때만 뒷정리 함수를 호출하고 싶다면 비어있는 배열을 넣어준다.



                  
