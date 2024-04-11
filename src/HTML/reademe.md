# Array(배열)

- 배열을 생성할 때 사용하는 리스트 형태의 객체이다.

<br>


<br>
# Array를 선언할 수 있는 방법은?

```js

const arr = new Array();

const arr2 = [1,2];

```

<br>

# 배열에 접근하기 


```js

const fruits = ["apple", "banana"]

console.log(fruits) ///[ 'apple', 'banana' ]
console.log(fruits.length) /// 2
console.log(fruits[fruits.length-1]) /// 'banana'
console.log(fruits[0]) ///'apple'
console.log(fruits[2])  ///밖에 있는 index접근하면 undefined

``` 

<br>

# Array looping

### for문

```js

const fruits = ["apple", "banana"]

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

///'apple'
///'banana'

```

<br>


### for...of문

```js

for (let fruit of fruits){
  
  console.log(fruit)
}

///'apple'
/// 'banana'

```


<br>


### forEach

- forEach는 콜백함수를 받아온다. array에 들어가는 값마다 forEach()에서 전달한 callback함수를 실행한다.


```js

fruits.forEach((fruit, index) => {
  console.log(fruit, index)})


/// 'apple', 0
/// 'banana', 1

```

# push, pop, unshift, shift 

<Br>
  

### push 
  
- 배열의 맨 뒤에 추가하는 메서드, 추가 후  배열의 **새로운 길이** 를 반환한다.  

```js
  
const fruits = ["apple","banana"]

const fruits2 = fruits

fruits2.push("peach")

console.log(fruits2) // [ 'apple', 'banana', 'peach' ] //새로운 배열의 길이가 아니라 추가된 배열이 나온다.

const fruits3 = fruits.push("kiwi")
console.log(fruits3) /// 3 /// push()메서드 자체를 변수에 할당하여 console.log를 호출하면 길이가 나온다. 
  
 ```
  
  <br>
  
### pop
- 배열에서 마지막 요소를 제거하고 **그 요소를 반환**한다.
  
```js
  
const fruits = ["apple","banana"]

console.log(fruits.pop()); ////"banana" 
console.log(fruits);  /// ["apple"]
  
```

<br>
  
### unshift 
- 새로운 요소를 맨 앞쪽에 추가하고 **새로운 길이**를 반환한다.
  
 ```js
 const fruits = ["apple","banana"]

 console.log(fruits.unshift("strawberry", "lemon")) /// 새로운 길이 4가 반환된다. 
 console.log(fruits)  /// [ 'strawberry', 'lemon', 'apple', 'banana' ]
  
  ```
  
  <br>
  
 ### shift
 -  배열의 첫 번째 요소를 **제거**하고, 제거된 요소를 반환한다.
  
  
 ```js
  
 const fruits = ["apple","banana","kiwi"]
  
console.log(fruits.shift()); // 'apple'
console.log(fruits); /// ['banana', 'kiwi']
  
 ```
  
  
  <br>
  
 #### 주의해야할 점! 
  
 - shift와 unshift는 pop과 push보다 느리다 
  배열에 아이템들이 들어있을 때 뒤에서부터 빈 공간에 넣었다 지웠다 하기때문에 기존 데이터를 움직이지 않아 빠른 operation이 가능하지만
  shift와 unshift는 기존데이터들을 같이 움직이기 때문에 배열의 길이가 길면 길수록 느리다.
  
  
 <br>
  
  
  
  # 아이템을 지정한 포지션에서 지우기 
  
  ### splice
  
  - 배열의 기존 요소를 **삭제 또는 교체 또는 새 요소를 추가** 하여 배열의 내용을 변경한다.
  
 ```js
  
  splice(배열 변경을 시작할index, 배열에서 제거할 요소의 수)
  
  ```
  
  <br>
  
  ```js
  
const fruits = ["apple","banana","kiwi"]
  
console.log(fruits.splice(0,2)) /// ["apple", "banana"]
console.log(fruits) /// ["kiwi"]

console.log(fruits.splice(0,1,"orange")) /// 0번째 index에서 하나를 삭제함. ["apple"] 삭제되는 값, 그리고 그 자리에 "orrange"추가
console.log(fruits) /// [ 'orange', 'banana', 'kiwi' ]
  
  ```
  
  
  <br>
  
  ### concat
 - 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환한다.
 
  **주의해야할 점**
  
  - 기존배열을 변경하지 않는다.
  - 추가된 **새로운 배열**을 반환한다. 
  
  
  ```js
  const fruits = ["apple","banana","kiwi"]
  const fruits2 = ["a", "b"]
  
  console.log(fruits.concat(fruits2)); // [ 'orange', 'banana', 'kiwi', 'a', 'b' ]  //새로운 배열 반환!
 
  console.log(fruits) /// ["apple","banana","kiwi"] /// 변경되지 않은 기존배열
  
  ```
  
  
  
