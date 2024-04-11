## 예시


```js
const a = { name: "yeon" };
const b = { name: "yeon" };
const c = a;

console.log( a == b ); /// false가 출력된다. object는 레퍼런스형태로 저장된다. 
a와 b는  똑같은 데이터여도 실제로는 다른 레퍼런스를 참조하기 때문에 true가 나올 수 없다.

console.log( a === b); //false가 출력된다. 똑같은 타입인지 구별하기 전에 다른 레퍼런스를 참조하기 때문에 false가 나온다.

console.log( a === c); //true가 출력된다. c에 a를 할당해주었기 때문에 a의 오브젝트를 참조하고있다. 

```
