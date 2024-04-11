# callback 함수는?

- callback함수는 이름 그대로 나중에 호출되는 함수를 말한다.

```js


function test(b){
  b();
}


// test(()=> console.log("hi"))

function print(a){
  console.log("a")
} /// a 

test(print)

```


callback함수인 print()는 test함수가 호출되었을 때 print함수를 인자로 전달해준다. 
또 callback함수는 동기와 비동기로 사용할 수 있다. 
<br>



## 예제)

```js

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

```

출력 되는 값은?

```js 

1 //동기
3 //동기
'hello' //동기
2 //비동기
'async callback' ///비동기

```

위에서부터 아래로 한줄 씩 코드가 실행되는데  <br>
'2'를 실행할 코드는 1초뒤에 실행되기 때문에 '3'과' hello'가 먼저 실행되고 1초가 지나면 그 이후 '2'가 출력된다. <br>
그리고 'printWithDelay'함수가 호출되면서 2초가 지난 후 async callback를 출력한다. <br>
하지만 callback함수를 사용하여 비동기코드를 짜면 가독성도 매우 떨어지며 callback지옥을 경험하게 된다. <br>
그것을 개선하고자 나온 것이 **promise**이다.  


<br>


[promise 바로가기](https://github.com/ddangju/TIL/blob/master/Javascript/Promise%2Cthen%2Ccatch.md)
