# React router?
> react는 view만 담당하는 라이브러리이다. 그래서 라우팅을 담당하는 react-router를 따로 설치해주어야 한다.
 원래 싱글페이지 어플리케이션(SPA)은 주소가 없어 접속하기 힘들었지만 **react-router**를 사용하면 페이지를 깜빡임이 없으면서도 주소를 가질 수 있게 된다. 
 예를들어 페이지를 넘길때 특정 레이아웃은 고정되어있고 내용만 바뀌며 주소도 그에 따라 바뀐다.
 <br>
  
  
 ## - install
 
 > npm install react-router-dom
 
 터미널에 입력하여 설치! 
<br>
 
 
 
 
 
 
## - How


![](https://images.velog.io/images/duswn38/post/d8d759b6-55b4-4413-b901-219336bc3569/1.png)


위와 같이 사용할 **컴포넌트**들을 **import**해주고 아래와 같이 연결해준다. 
 


## - Router

### BrowerRouter 
 react-router-dom을 적용하고 싶은 최상위 컴포넌트에서 감싼다. 


### Route

**url**을 컴포넌트에 위치시켜준다.

```js

<Route Path="/"> <Home/> </Route>
<Route Path="/Detail"> <Detail/> </Route>
```

이렇게 작성하고 **detail**을 클릭하면 `home과 detail이 함께 나온다`.
왜냐하면 **Router**는 매칭되는 것은 다 보여주기 때문에 **/detail**로 접속한다면, **home** url도 **/**가 일치하기 때문에 둘 다 같이 나오는것이다.
정확한 **path**와 매칭해주기 위해 **exact** 속성을 추가하여 아래처럼 작성해준다.

```js

<Route exact Path="/"> <Home/> </Route>
<Route exact Path="/Detail"> <Detail/> </Route>
```

### switch 

switch로 Route를 감싸면 **path**와 일치하는 첫번째 컴포넌트가 출력되고 나머지 컴포넌트는 출력되지 않는다.

```js
<Switch>
<Route exact Path="/"> <Home/> </Route>
<Route exact Path="/Detail"> <Detail/> </Route>
</Switch>
```


### Link

**Link**는 페이지를 새로고치지 않고 페이지를 이동시킨다




