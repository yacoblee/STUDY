## Type Narrowing 

Narrowing를 하는 이유는?

> 유니온 타입 같은 경우에는 타입을 정해주지 않아 에러가 뜬다. 그래서 유니온타입에도 타입을 하나로 지정해주어야한다 <br>
방법으로는 **if문과 typeof**키워드로 타입 검사를 해준다. 이 외에 방법으로는 **속성명 in 오브젝트자료**, **인스턴스 instanceof 부모** 가 있다.
<br>


예시)

```ts
function 내함수(x :number|string){
  return x + 1 /// 유니온타입 x에 number1을 더해주기 때문에 error 
}
```

```ts

function 내함수(x :number|string){
  if(typeof x === "number"){
    return x + 1
  } else {
    return
    }
}
```

<br>

## Type Assertion

> 타입을 간편하게 덮어씌우는 방식이다. 


예시)

```ts
function 내함수(x : number|string){
	return (x as number) + 1
	///x를 number로 
}
```

유니온 타입인 x를 **number**타입으로 덮어씌운다.

**as**문법을 사용할 때는?

1. Narrowing할 때 사용한다.(변경할 때 사용X)
2. 들어오는 타입이 확실할 때 사용한다. 







## ✔ Narrowing(방법 추가)

```ts

function 함수(a: string | undefined){
	if( a && typeof a === "string"){
    } 
}

```

인자 a의 논리연산자(&&)를 걸어주면서 `true`라면 조건의 뒤가 실행된다. 

<br>

```ts

type Fish = {swim:string}
type Bird = {fly:string}

function 함수(animal :Fish | Bird) {
	if( "swim" in animal ){
       
       }
}

```
animal 인자에는 Fish나 Bird 형태만 들어올 수 있다.

조건문에 `속성명 in 오브젝트자료`를 걸어주어 animal 인자에 swim이라는 속성이 있는 체크한다.

<br>



## ✔ class로부터 생산된 object라면 instanceof로 narrowing

어떤 클래스로부터 `new`키워드로 생산된 object들이 있는데

이 object들은 `instanceof`키워드를 붙여 부모 클래스를 검사할 수 있다. 


```ts

let 날짜 = new Date();

if(날짜 instanceof Date){
	
}

```


<br>

## ✔ 인자에 들어오는 Type이 유사할 때 


```ts

type Car ={
  ///리터럴 타입으로 구분하여 특정지어준다. 
  wheel: "4개",
  color : string
}
type Bike = {
  wheel: "2개",
  color : string
}

function 함수(x: Car | Bike){
  if(x.wheel === "4개"){
     }
}
```

<br>


## ✔ never타입

```ts

function 함수() :never{
}

```

함수에 `return type`에 `never` 타입으로 지정이 가능하다.(무언가 return하지 않을 때)

이것을 사용할 때 조건은?

- return 값이 있으면 안된다. 
- 함수 실행이 끝나지 않아야 한다.(endpoint가 없어야한다.

<br>


끝나지 않는 함수를 만들고 싶다면?


```ts

function 함수() :never{
  throw new Error() 
  //강제에러로 도중에 중단된다.함수 실행이 끝나지는 않는다. 
}

function 함수() :never{
	while(true){
    	//조건을 true로 while 내부를 무한으로 돈다. 
    }
}


```

<br>

사실 `never타입`은 `void`로 대처가 가능하다. 

