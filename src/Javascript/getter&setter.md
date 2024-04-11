



```js

const 사람 = {
  name: "연주",
  age: 20,
  nextAge(){
    return this.age +1
  }
} 

```

- 계산된 나이를 출력하고 싶을 때?


`사람.age + 1 ;` 의 방법과  `사람.next.Age();` 이 있다. 둘의 결과값은 같다! 

두 번째와 같이 함수를 직접 만들어 데이터를 다루는 이유는 `object`자료가 복잡할 때 수정하거나 접근하기 편리하다.

<br>


- 나이를 변경하는 함수를 추가해보자 ! 


```js

const 사람 = {
  name: "연주",
  age: 20,
  nextAge(){
    return this.age +1
  },
  setAge(나이){
    this.age = 나이; 
  }
} 

사람.setAge(20);

```

직접 변경하는 것이 아니라 변경하는 함수를 만들어 사용할 수 있다. 이것은 데이터타입 실수를 줄일 수 있다. 


```js

setAge(나이) {
  this.age = parseInt(나이);
}


```


만약에 실수로 문자를 넣어도 `parseInt`메서드로 인해 숫자로 치환하여 출력된다. 

여기서 좀 더 쉽게 사용할 수 있는 방법이 있다.

```js
const 사람 = {
  name: "연주",
  age: 20,
  get nextAge(){   ////get을 사용하려면 return이 있어야한다. 
    return this.age +1
  },
  set setAge(나이){   ////set을 사용하려면 파라미터가 1개 있어야한다.
    this.age = 나이; 
  }
} 


사람.setAge = "20"; ///소괄효가 필요없다. 

```

여기서 **set**은 데이터를 변경하는 함수에 사용할 수 있고 **get**은 데이터를 꺼내는 함수 앞에 사용할 수 있다. 


<br>

## setter와 getter ?

