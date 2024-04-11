# Class?

특정 객체를 반복해서 생성하기 위해 **변수와 메소드**를 정의하는 틀.

**new연산자**를 사용해 객체 지향 프로그래밍이 가능하다.


## 기본문법
```js

class Test{
  constructor(name){
   ///초기화
   this.name= name
  }
  method(){} 
}

let test = new Test("연주");



```

`new Test`를 호출하면 새로운 객체가 생성되고, 넘겨받은 인자로 `constructor`가 자동으로 실행된다.

이때 인자로 받은 `"연주"`가 `this.name`에 할당된다. 

## class 상속하기

```js

class Person{

}

test exrends Person{

}
```
다른 클래스를 만들기 위해 extends키워드를 사용한다 
