# string.prototype.slice()

> slice() 메소드는 문자열의 일부를 추출하여 새로운 문자열을 반환한다. 

```js
let a = "가나다라마바사아자차카"

console.log(a.slice(3)); /// '라마바사아자차카'
console.log(a.slice(1,3)); /// '나다'
console.log(a.slice(-1); ///카

```

<Br> 
  
  

# slice에 대한 예제 : 오타를 바꿔보자 ! 


- 예제를 들어가기 전에 알아두면 좋은 method 

#### string.prototype.indexOf() 


indexOf()메서드는 string 객체에서 주어진 값과 일치하는 첫 번째 **인덱스** 를 반환한다 

일치하는 값이 없다면 -1을 반환한다


```js


let info = "자바스크립트는 프로래밍 언어이다.";
let firstChar = info.indexOf("프로래밍"); 
console.log(firstChar)  /// 8 
console.log(info.slice(0, firstChar));// '자바스크립트는'
  
  if (firstChar !== -1 {
    info = info.slice(0, firstChar) + "프로그래밍" + info.slice(firstChar+4, info.length);
  }
  
  console.log(info); // "자바스크립트는 프로그래밍 언어이다." 

```

 위 조건문을 확인해보자면 firstChar("프로래밍") 이라는 문구가 있다면 if문을 실행한다.
  
 오타부분을 다른 string으로 바꿔주고 나머지 문장은 slice로 잘라 +연산자를 이용하여 합쳐준다.

