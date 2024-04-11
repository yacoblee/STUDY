# 배열 개념과 예시 

## Q. array를 string으로 변환하려면? => join()
- 배열의 모든 요소를 연결해 하나의 문자열로 만드는 메서드
- 만약에 arr.length가 0 이라면 빈 문자열을 반환한다.

<br>

```js

const fruits = ["apple", "banana", "kiwi"]

console.log(fruits.join()); /// 'apple,banana,kiwi'
console.log(fruits.join('')); ///'applebananakiwi'
console.log(fruits.join('&')); ///  'apple&banana&kiwi'


```

<br>

## Q. string을 array로 변환하려면? => split() 
-  string 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눈다.

<br>

```js
  const fruits = '가나다라마바사';
  
  console.log(fruits.split('')) //// [ '가', '나', '다', '라', '마', '바', '사' ]
  
  console.log(fruits.split()) /// [ '가나다라마바사' ]
  
  console.log(fruits[5]) /// '바'
  
```


<br>

## Q.  배열 [5, 4, 3, 2, 1] 을  [1, 2, 3, 4, 5] 로 배열의 순서를 바꾸려면? => reverse() 
- revers() 메서드는 배열의 순서를 반전합니다

<br>

```js

{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse()) ///[ 5, 4, 3, 2, 1 ]
}

```

<br>

## Q. 첫번째, 두번째 요소를 새로운 배열로 만들려면? => slice()
- slice(시작index, 끝index(미포함)) 에 대하여 복사하여 **새로운 배열**로 반환한다 **원본**배열은 바뀌지 않는다.  

**여기서 splice와 차이점?**

> splice는 **기존 배열**을 수정한다!!!!


<br>


```js

/// slice()

  const array = [1, 2, 3, 4, 5];
  const arr = array.slice(1,4)
  console.log(arr) ///[ 2, 3, 4 ]
  console.log(array) /// [ 1, 2, 3, 4, 5 ] => 기존배열은 수정되지 않는다. 
  
  
/// splice()

  const array = [1, 2, 3, 4, 5];
  const arr = array.splice(1,3)
  console.log(arr)   ///[ 2, 3, 4 ] /// 1번째 index인 2부터 3개를 새로운 배열로 반환했다
  console.log(array) ///[ 1, 5 ] /// 그리고 기존배열이 수정되었다.

```

<br>

## 공통 예시 코드 

```js

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}


const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

```

<br>

## 학생들 점수 중에 90점 미만을 찾으려면? => find() 
-  주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환한다. 없다면 undefined를 반환한다.
-  find는 callback함수를 받는데 this, value, index, obj 네가지 인자가 전달된다.

첫번째로 찾은 요소가 true일때 true의 값을 return한다. 없다면 undefined를 반환한다.


<br>

```js




{
  const found = students.find(ele=> ele.score < 90 );
  console.log(found); /// student A의 정보가 나온다. 
}

```

<br>

## 학생들 중에서 수업에 등록한 학생들만 찾아서 배열로 만들려면? => filter()
- 주어진 함수의 테스트를 통과하는 모든 요수를 모아 **쌔로운 배열**로 반환한다. 

<br>

```js
{
const result = students.filter((student) => student.enrolled)
console.log(result)
}   //// 학생 A, C, E의 정보가 배열형태로 나온다 


```


<br>


## 학생들의 배열들에서 점수만 뽑아서 새로운 배열을 만들려면? = > map()
- 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 **새로운 배열**을 반환한다. <br>
map의 callback함수에는 세가지 인자가 전달되는데 currentValue(현재처리할요소),idex(현재처리할index),array(map을호출한배열)

<br>

```js

{
  const mapping = students.map(function(students){
    return students.score
  })
  console.log(mapping)
}  /////[ 45, 80, 90, 66, 88 ] 

```

<br>

## 학생들 점수에서 50점보다 낮은 점수가 있는지 확인하는 방법은? => some()
- 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트한다.
- 배열중에서 하나라도 조건에 부합하면 true가 나온다. 

<br>

```js

{
  const result = students.some((student) => student.score < 50);
  console.log(result)  ///true
}  
```


**그럼 배열 전부가 조건에 만족하는지 체크할 수 있는 메서드는? => every() **

<br>

## 학생들의 평균 점수를 구하려면? => reduce()
- 배열의 각 요소에 대해 함수를 실행하고, 하나의 결과값을 반환한다.
- reduce는 callback 함수와 이니셜벨류를 인자로 전달한다. 
- callback 함수는 네개의 인자를 전달하는데 **1.누산기 2. 현재 값 3. 현재 인덱스 4. 원본 배열 **
- 이니셜벨류는 최초 호출에서 초기값을 설정할 수 있다. 초기 값을 설정하지 않으면 첫 번째 요소를 사용한다.

```js
{
  const result = (prev,curr) => 
    (prev + curr.score) / students.length
  
  console.log(students.reduce(result,0))///73.80000000000001
}  

```

- 초기값이 0 설정으로 prev는 0, curr은 studentA의 score을 인자로 받아 더한다 = > 45
- 그 다음 prev는 studentA의 45점을 인자로받고 curr은 studentB의 score을 인자로 받아 더한다 = > 125
- 이렇게 students의 배열의 score가 전부 누산이된다


<br>

## Q. 학생들의 점수들만 string으로 변환하여 만들려면?
  1. map()을 사용하여 새로운 배열로 score만 return한다
  2. join()을 사용하여 array를 string으로 변환한다.

