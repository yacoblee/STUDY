## 호이스팅(Hoisting)

선언 단계가 최상단에 끌어올려지는것을 의미한다.

호이스팅은 물리적으로 끌어올려지는것이 아니라, 자바스크립트 엔진이 코드를 실행하면서

변수같은 정보를 실행컨텍스트 `환경 레코드Record(Environment Record)`에 기록해둔다. 

환경 레코드는 `식별자`와 `식별자에 바인딩 된 값`을 기록해두는 `객체`이다. 

호이스팅에는 `변수 호이스팅(Variable Hoisting)`과 `함수 호이스팅(Function Hoisting`이 있다.


<br>


## 변수 호이스팅


### - var 
```js

console.log(a); /// undefined

var a = "foo";

console.log(a) /// "foo"

```


자바스크립트는 코드를 실행하면 전역 실행 컨텍스트를 `Call Stack`에 한 칸 넣는다. 

그 후 코드를 스캔하면서 실행 컨텍스트 안에 있는 환경레코드에 `새로운 식별자 a`를 기록한다. 

그리고 var로 변수를 선언했기 때문에 `undefined`로 값을 `초기화`해준다.

> **여기까지 생성단계** 실행컨텍스트 생성하고 선언문만 먼저 실행 

첫번재 콘솔로그를 출력하기 위해서 변수 a에 대한 바인딩 된 값을 참조하니 초기화된 `undefined`가 존재한다.

그리고 문제없이 값을 `출력한다.`

이후 코드를 읽다가 a에 "foo"라는 값을 할당하고 있는 것을 보고 변수 a를 환경레코드에 업데이트한다. 

그리고 아래 콘솔로그에서 "foo"가 출력된다.

<br>

### - let과 const

이 경우에도 a의 식별자를 환경레코드에 기록해두긴 하지만 값을 `초기화 하지는 않는다.` 

그래서 값을 참조하려면 자바스크립트는 값을 읽지 못해 `reference error`가 발생한다.

이것을 `Temporal Dead Zone` 라고도 한다. 

선언 이전에 식별자를 참조할 수 없는 구역을 뜻한다. 


정리해보자면, `var`키워드로 변수를 선언하는 경우엔 `선언과 초기화`가 동시에 이루어진다.

반면 let과 const로 변수를 선언하는 경우에는 `초기화`해두지 않는다.


<br>

## 함수 호이스팅

### 함수 선언문

선언과 동시에 함수가 생성되어 선언 전에도 함수를 사용할 수 있다.

```js

foo()

function foo(){

}

/////{foo: f{}}

```

<br>

### 함수 표현식

var의 경우 초기화(undefined)을 해준다. 

undefined는 호출이 될 수 없기 때문에 타입 에러가 발생한다.

```js

foo(); /// undefined

var foo = () => {

}
```

<br>

const와 let의 경우에는 환경레코드에 기록된 값이 없어 `Reference Error`가 발생한다. 

```js

foo(); ///Reference Error

const foo = () => {

}

```

<br>


[실행컨텍스트](https://github.com/ddangju/TIL/blob/master/Javascript/hoisting.md)

