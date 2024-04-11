
```js
console.log(this) //window가 출력된다. 

function 함수() {
  console.log(this);   ///window가 출력된다. 
}

```

위와 같이 함수 안에서 쓰거나 console로 확인하면 `whindow`가 출력된다.

<br>

```

const 오브젝트 = {
  data : "yeon"
  function : function() {
      console.log(this);     
   }
}

//// {
//  data : "yeon"
//  function : function() {
//      console.log(this);     
//   }
//}        
가 출력된다

```


위와 같이 **object**안에서의 **this**는 그 함수를 가지고 있는 **object**를 뜻한다. 

즉, 나를 포함하고 있는 **object**! 

<br>


- arraow function의 경우에는?

```js

console.log(this); ///window

const 오브젝트 = {
  data : "yeon"
  function : () => {
      console.log(this);     ////window가 출력된다! 
   }
}
```

신문법인 화살표 함수는 this의 값을 새로 만들지 않고 상위 요소의 this의 값을 물려받는다.

> 여기서 {windows}는 함수나 변수를 작성하면 window라는 **오브젝트**에서 보관한다.
> 그래서 콘솔로 그냥 window가 출력되는 것이 아니라, **windows object**에 담겨있는 것이 출력되는 것이다.

<br>

- object를 여러개 만들고 싶은 경우?

```js 

function 복사() {
        this.이름 = "yeon";
        }
```
 
여기서 `이름`이라는 key에 `yeon`이라는 값이 들어간다. 

그리고

```js 

function 복사() {
        this.이름 = "yeon";
        }
        
        
const 오브젝트 = new 복사();
```

위와같이 `new`라는 키워드를 사용하여 **새로운 오브젝트**를 꺼낼 수 있다.



- 이벤트리스너 안에서 쓰는 **this**는 `e.currentTarget`을 의미한다.

```js
document.getElementById('버튼').addEventListener('click', function(e){
  console.log(this)  //// e.currentTarget과 똑같은 의미 
});
```

<br>

- 이벤트리스너 안에서 콜백함수를 쓴다면? 

```js
document.getElementById('버튼').addEventListener('click', function(e){
  var 어레이 = [1,2,3];
  어레이.forEach(function(){
    console.log(this)
  });
});
```

forEach() 반복문 안에  **function(){}** 콜백함수를 사용한다면 `이벤트리스너`안에서 사용한것이 아니라 

**e.currentTarget**은 아니다. 그렇기 때문에 **일반함수**랑 똑같아 `window`가 출력된다! 
