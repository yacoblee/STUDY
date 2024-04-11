## Object.assign()
> 열거가능한 자체 속성을 **복사**해 타겟에 붙여넣는다. 

```js
Object.assign(target, ...sources)
```

- Target 
 sources를 복사해와 반영한 후 반환하는 객체
 
- sources
	반영하고자 하는 속성들을 갖고 있는 객체
    
    
<br>

### 기본형 예제

```js

const target = { a: 1, b: 2 }; 
const source = { b: 4, c: 5 }; const returnedTarget = Object.assign(target, source); 
console.log(target); 
console.log(returnedTarget);


```


- 출력한다면?

```js

{ a: 1, b: 4, c: 5 } ///target
{ a: 1, b: 4, c: 5 } ///returnedTarget
```

위와 같이 기존 **target** 속성이 복사해 온 **sources** 값이 `b:4`로 덮어씌워져 변경되고 새로운 속성이 **추가**되었다.
그리고 **returnedTarget**객체는 **target**객체와 같은 **객체를 참조**하고 있다. 


<br>

### sources가 리스트인 경우?

```js

const target = { a: 1, b: 2 }; 
const sources = [ { b: 4, c: 5 }, { b: 6, c: 7, d: 8 }, { b: 9, c: 10, d: 11 }, { b: 12, c: 13, d: 14, e: 15 }, ]; 
Object.assign(target, sources); 
console.log(target);

```


- 출력한다면?

```js
{
  '0': { b: 4, c: 5 },
  '1': { b: 6, c: 7, d: 8 },
  '2': { b: 9, c: 10, d: 11 },
  '3': { b: 12, c: 13, d: 14, e: 15 },
  a: 1,
  b: 2
}
```

**sources**리스트 자체가 **target**오브젝트에 붙여넣기가 되어지는데 **target**의 오브젝트 형태인 `key:value`로 변경되어 복사되었다. 

<br>

- spread 연산자를 사용한다면?

```js

Object.assign(target, ...sources); 

{ a: 1, b: 12, c: 13, d: 14, e: 15 }
```

**spread**연산자를 통하여 **개별적인 요소**가 복사되어지면서 **중복되는 요소**는 덮어씌어졌다!


<br>

### Spread 와 Object.assgin

> 원본의 **불변성**을 지켜야 한다면 **스프레드 연산자**를 사용하는 것이 좋다. 
