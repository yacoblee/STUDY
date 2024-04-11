## super와 extend?
> 존재하는 class와 유사한 class를 만들어 사용하고 싶을 떄 사용하는 문법. 즉 class를 상속한다.(복사) 


```js

class 부모 {
  constructor(name){
    this.성 = "kim";
    this.이름 = name;
  }
}

class 자식 extends 부모{
  constructor(){
    suepr();
    this.나이 = 20;
  }
}
```

부모 class를 자식 class에서 유사하게 사용하고 싶다면 위와 같이 **extends**로 적용할 수 있다.  

여기서 **extends**로 만든 class는 **this**를 그냥 사용하지 못한다. 그래서 `super()`를 constructor 안에 추가해주어야한다.

`super`은 부모 `constructor`의 내용과 똑같다. 그리고 부모에서 받는 인자 `name`은 자식에서도 `name`을 인식시켜야한다. 

<br>



- 새로운 `자식()` 오브젝트를 생성한다면?


```

const 자식1 =  new 자식("영자"); 

console.log(자식1)

///{성:"kim", 이름: "영자", 나이:50}

```


<br>


- super의 다른 용도

```js 


class 부모 {
  constructor(name){
    this.성 = "kim";
    this.이름 = name;
  }
  sayHi(){
    console.log("첫번쨰함수")
  }
}

class 자식 extends 부모{
  constructor(){
    suepr();
    this.나이 = 20;
  }
  sayHi2(){
    console.log("두번재함수")
    super.sayHi();
  }
}

const 자식1 = new 자식("영자");



```

**자식**class에서 부모에 있는 함수를 사용하고 싶다면 `super.함수()` 이런식으로 실행한다.
결과는 **두번째함수** 다음 **첫번쨰함수**가 출력된다! 가까운 프로토타입부터 실행되므로 `자식->부모`순서대로 실행된다.
이와 같이 `wuper`는 constructor 안에서 사용하면 **부모 class의 constructor**를 의미하고
바깥에서 사용하면 **부모 class의 prototype**을 의미한다. 

