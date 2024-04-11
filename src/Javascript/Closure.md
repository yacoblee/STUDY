# 클로저란?

<br>


클로저는는 자바스크립트 고유의 개념이 아니라 ECMA Script 에서 정의를 다루지 않고 있고 다양한 문헌에서 제각각 클로저를 다르게 정의 하고 설명하고 있다.

정리해보자면 아래와 같다.

1. 자신을 `내포` 하는 함수의 컨텍스트에 접근할 수 있는 함수 
2. 함수가 특정 스코프에 접근할 수 있도록 의도적으로 `그 스코프에서 정의`하는 것.
3. 함수를 선언할 때 만들어지는 유효범위가 `사라진 후에도 호출`할 수 있는 함수
4. 이미 생명 주기상 끝난 `외부 함수의 변수를 참조`하는 함수


일단 클로저를 이해하려면 자바스크립트가 어떻게 변수의 유효범위를 지정하는지 먼저 이해해야한다.
이 유효범위를 지정하는것을 **Lexical scoping** 이라고 한다. 

<br>


## Lexical scoping

```jsx
function myname() {
  var name = "yeonju"; 
  function displayName() { 
    alert(name); // 부모 함수에서 선언된 변수를 사용한다.
  }
  displayName();
}
myname();
```

`myname()` 은 지역 변수 `name`과 함수 `displayName()`을 생성한다. 

`displayname()`은 `myname()`함수 본문에서만 사용할 수 있다.

`displayname()`은 지역 변수가 없다. 그런데 함수 내부에서 `myname`의 변수에 접근할 수 있다. 

(만약 `displayName()` 이 자신만의 `name`변수를 가지고 있다면, `this.name`을 사용할 수 있다.)

그렇기 때문에 내부에서 `alert(name)`을 호출하면 부모 함수에서 정의한 변수 `name`의 값을 성공적으로 출력한다.

여기서 **lexical**이란 범위 지정 과정에서 변수가 소스코드 내 어디에서 선언되었는지 고려한다는 것이다. 

즉 중첩된 함수는 외부 범위에서 선언한 변수에도 접근할 수 있다.


<br>

# 클로저(Closure)

예제

```jsx
function b() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
  
  var a = b();
//a변수에 displayName을 리턴함
//유효범위의 어휘적 환경을 유지

a();
//리턴된 displayName 함수를 실행(name 변수에 접근)

```

<br>

이 예제는 바로 위의 예제와 동일한 결과가 실행된다.

하지만  `displayName()` 함수가 실행되기 전에 외부함수인 `b()`로부터 return되어 `a()`에 저장된다는 것이다.

`지역변수`(name경우)는 함수 실행이 끝날때 종료되지만 위의 예시와 Js 경우는 다르다.

**왜?** 자바스크립트는 함수를 리턴하고, 리턴하는 함수가 **클로저**를 형성하기 때문이다.

**클로저**가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다. 

`a()` 는 `b()`가 실행될 때  `displayName` 함수의 인스턴스에 대한 참조다.

`displayName`의 인스턴스는 변수 `name` 의 참조다.

이러한 이유로 `a()`가 호출될 때 변수 `name`은 사용할 수 있는 상태로 남게되고 alert가 출력된다.



