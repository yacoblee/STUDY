# promise?

- 자바스크립트는 기본적으로 동기적 언어이다. 이것의 문제점을 해결하기위해 나온것이 비동기 처리 중 하나인 **promise**이다. 

<br>


# promise의 사용

>**Promise**는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용한다. 일반적으로 웹을 구현할 때 서버에서 데이터를 요청하고 받아오기 위해 사용한다.

<br>


# promise 의 상태(state)

`promise`는 3가지 상태를 가질 수 있다.

- 작업진행중 = pendding : 대기 상태로서 resolve 나 reject 할 지 결정되지 않은 초기 상태이다.
- 성공 = fullfilled : 이행 상태로서 연산이 성공적으로 완료된 상태
- 에러 = rejected : 거부 상태로서 연산이 실패한 상태이다.

<br>

# promise의 형태 (Producer//필요한 promise만들기, Consumer//promise사용)


## producer 

new Promise(resolve,reject)
- promise는 excutor라는 callback함수를 전달하고 callback함수에는 resolve, reject를 전달 받는다



<br>



```js

const promise = new Promise((resolve, reject() => {
  setTimeout() => {
    resolve("성공");
    reject(new Error("실패"))
    }, 2000);
)};

```



<br>

## Consumer : then, catch, finally

- 위에서 만든 promise 사용해보기 


<br>



```js


promise.then((value) => {
  console.log(value); ///"성공"
})
  .catch(error =>{
    console.log(error)
 })
  .finally{() => (
    console.log(""); 
  });



///value는 promise가 정상적으로 실행되어 resolve 인자로 전달하는 값
///error는 promise가 작동하지 않아 reject 인자로 전달하는 값 
/// finally는 성공하든 실패하든 상관없이 무조건 호출되는 값


```

<br>



## promise chaining
- promise의 then을 호출하는 경우 똑같은 promise를 return하기 때문에 catch를 호출할 수 있다.


```js

const test = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); 
});

test
  .then(num => num*2)
  .then(num => num*3)
  .then(num => {
      return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(num - 1), 1000);
      })
  })
  .then(num => console.log(num));

```



<br>

### 예시

```js

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);
  

```



<br>






