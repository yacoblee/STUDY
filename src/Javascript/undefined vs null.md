<br>

이 자료들은 코딩을 하다보면 은근히 헷갈리는 자료형들이다. 그래서 정리해보았다! <br>




## ✔️ null
`객체가 없음`을 나타낸다. 의도적으로 비어있음을 표현할때 사용하며 불리언 연산에서는 `거짓`으로 취급한다. 

```js

const a = null

console.log(typeof(a)) ///object
```

위 처럼 object가 뜨는 이유는 찾아보니 초기 버전의 버그라고 나온다. <br>

그래서 null타입 체크하는 방법으로 **일치 연산자(===)** 를 사용하는게 좋다. <br>

일치연산자는 값과 타입이 동일할 때만 true를 반환한다. 


<br>

## ✔️ undefined
`undefined` 는 변수의 자료형이 정해지지 않은 상태이다. 어떠한 값으로도 할당되지 않은 것이다.

```js

let foo;

console.loig(foo) ///umdefined


```
<br>

## ✔️ null과 undefined의 차이

```js

null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true

```

위 코드에서 null  == undefined가 `true`를 반환하는 이유는 동등연산자에서는 `값이 없음`이 같기 때문이다! <br>

그러므로 일치연산자로 비교를 하면 `false`를 반환한다.  <br>

또한 `null`는 값이 등록이 되지만  `undefined`는 등록이 되지 않기 때문에 초기화도 정의되지 않은 상태이다. 
