# async & await 는?
> 비동기 처리 패턴 중 가장 최근에 나온 문법이다.
기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋게 코드를 작성할 수 있다. 함수 표현식을 사용해서 async function을 선언할 수 있다. 이 함수에는 **await식**이 포함될 수 있다. 

> **await** 식은 함수의 실행을 일시 중지하고 전달 된 promise의 해결을 기다린 다음 다시 async 함수를 실행하고 완료후 값을 반환한다.

# 기본문법



```jsx
async function 함수명() {
  await 비동기처리메서드명();
}
```

먼저 함수 앞에 **async**라는 예약어를 붙인다. 그리고 나서 함수 내부 로직중 HTTP 통신을 하는 비동기 처리 코드 앞에 **await**을 붙인다. 
async 키워드를 붙이면 **promise**를 반환한다.

<br>


# async & await 예제

```jsx
function fetchItems() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var items = [1,2,3];
      resolve(items)
    }, 3000);
  });
}

async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
}

logItems();

```

``logItems()`` 함수가 호출되고 **프로미스객체반환**하는 함수 앞에 ``await``을 붙여준다. 
그리고 ``fetchItems``가 실행하면 ``Promise``가 처리되는것을 기다렸다가 해당 값을 변수에 담긴 배열``resultItmes``에 담기며 3초뒤에 출력된다.


<br>

## promise 사용하지 않은 예제
```jsx
async function test(){
    await foo(1, 2000)
    await foo(2, 500)
    await foo(3, 1000)
}

function foo(num, sec){
    setTimeout( function(){
        console.log(num);
    }, sec);
}

test();
```

비동기 함수 ``foo()``에 await을 붙여준다.결과는 순서대로 2 > 3 > 1


<br>

# async & await 예외 처리

async & await 예외 처리 방법에는 **try catch**가 있다.

promise에서 에러 처리를 위해 ``.catch()``를 사용했던 것 처럼 사용하면 된다.

## 문법

```jsx
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
 
}
```
**try**는 실행될 코드들, **catch**는 예외가 발생할 경우 명시하는 코드가 실행된다. 하나 이상의 ``try``를 중첩할 수 있으며 if-else를 사용하여 조건부 ``catch``도 만들 수 있다.
