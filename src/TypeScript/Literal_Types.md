## 엄격하게 타입지정하기(Literal Types)


> 변수에 들어오는 타입을 더 엄격하게 관리할 수 있다.

<br>


```ts

let 이름 :"kim"

///이름에는 스트링타입 kim만 들어올 수 있다. 

```


```ts

function 함수(a :"hello"){
  
}
함수("hello")

```


<br>


## Literal Types의 문제점

```ts

var 자료 = {
  name : "kim"
}

function 내함수(a :"kim"){

}

내함수(자료.name) ///error


```

a의 타입을 "kim"으로 지정해준 것은 🚨**kim이라는 타입만 들어올 수 있고, 자료는 들어올 수 없다!** 

그러기 때문에 error가 발생한다. 

<br>


## 해결방법 

```ts

var 자료 = {
  name : "kim"
} as const; 

function 내함수(a :"kim"){

}

내함수(자료.name)

```

**as const**를 사용하여 object의 value를 그대로 타입으로 지정해준다. <br>

그리고 object안에 있는 모든 속성을 **readonly**로 변경되어 자료를 수정할 수 없다! 

