# HTML 태그

### trarget 태그

- 링크가 열릴 프레임(웹페이지) 지정.

target = "_self" : 현재 프레임(웹페이지)에 로드. 미설정 시 디폴트.
target = "_blank" : 새로운 프레임(웹페이지)에 로드.

```html
<a href="./hamburger/hamburger.html" target="_blank"></a>
```

#img 태그

- 이미지를 웹상에 표시해주는 태그.

src : 이미지 파일의 경로나 URL 지정.

alt(alter) : 잘못된 경로 설정이나 서버등의 문제로 이미지를 정상적으로 로드하지 못하는
경우 이를 대체하기 위한 문자열 지정.

※ a 태그의 링크 대상은 텍스트뿐만 아니라 브라우저에서 허용하는 범위에서 이미지나 문서, 동영상 등이 가능.

```html

<img src="../image/hamburger_img.JPG" alt="햄버거 이미지">
``` 

<br>


### map, area (이미지관련)태그

- 이미지 클릭 영역을 별도로 지정하고 클릭시 지정된 주소로 호출 설정정

<br>


<br>
# 이미지 설정하기

이미지를 원하는 형태로 분할하여 좌표가 생성된 링크 코드를 자동 완성하여 제공해주는 유틸사이트. Rect, Poly, Circle 형태로 이미지를 분할 가능.
단, 상대 경로를 지정하는 경우 분할 이미지ㄹ에 대한 링크 설정 시 ㄱ사이트에서 지정하느 것보다는 링크 코드를 로드할 파일에서 직접 링크를 설정하는 것이 안전.

Image Map Generator(Free Online Image Map Generator): https://www.image-map.net

```html

    <img src="../image/paldal-gu_map_img.jpg" alt="체인점 권역 지도" usemap="#image-map">


    <map name="image-map">
        <area target="_blank" alt="ingye-dong" title="ingye-dong" href="../chain_store/ingye-dong_chain.html"
            coords="312,207,306,220,304,231,310,238,309,246,304,259,308,272,314,283,319,286,383,304,391,309,385,318,382,328,392,337,412,349,421,337,430,321,432,308,442,299,442,284,405,272,405,260,422,254,428,244,425,232,430,226,417,214,425,206,432,204,439,210,445,208,420,196,399,189,385,185"
            shape="poly">
        <area target="_blank" alt="uman1-dong" title="uman1-dong" href="../chain_store/uman1-dong_chain.html"
            coords="351,112,367,134,374,149,379,167,387,184,396,175,396,158,410,148,427,142,438,133,443,141,451,147,471,132,478,122,471,109,463,98,452,84,433,78,414,74,394,86,376,88"
            shape="poly">
    </map>

```

<br>


### form 태그

-폼(form) 태그를 구성하는 태그중의 하나로 입력 형식 지정.

-type: 사용자가 입력가능한 형식(text, password, email, radio, checkbox,button, submit, reset, hidden, file) 을 지정.

    <input 태그의 type 속성 값이 text 인 경우>
-입력 상자 형태로 구현

    -size: 화면상에 보이는 필드폭을 지정. 단, 일반적으로 CSS에서 지정하는 것을 권장.
    -minlenght: 필드에 입력가능한 최소 글자수 지정. 단, from 태그 내에서 전송(submit) 해야만 브라우저에서 제공되는 유효성 어시스트 확인 가능.
    -maxlength: 필드에 입력 가능한 최대 글자수 지정. 단, 지정한 max값 보다 한 글자 더 추가 입력 가능함에 주의.
    -value: 기본적으로 필드에 보여줄 hint 텍스트 지정. 단, 입력을 하여도 hint 텍스트가 자동으로 삭제되지는 않음.
    placeholder: value 속성과 같이 기본적으로필드에 보여줄 hint 텍스트 지정. 약간의 음영처리, 입력시 자동으로 삭제됨.
    readonly: 쓰기가 금지되는 읽기 전용 입력 상자/ 차후 스크립트를 통해 속성 설정에 따라 상황에 따른 입력 허용 불가를 지정 가능.

```html
<div>입력 텍스트1 :
        <input type="text">
    </div>

    <div>입력 텍스트2 :
        <input type="text" size="3">
    </div>

    <!-- form 태그 내에서 전송(submit)을 해야만 유효성 체크 확인 가능. -->
    <div>입력 텍스트3 :
        <input type="text" minlength="5">
    </div>

    <!--
        입력 시 텍스트가 maxlength 만큼만 제한되는 것을 바로 확인 가능.
        ( 한글의 경우 한 글자 더 추가 입력 가능. )
    -->
    <div>입력 텍스트4 :
        <input type="text" maxlength="5">
    </div>

    <div>입력 텍스트5 :
        <input type="text" value="텍스트를 입력하세요^^ 저는 자동으로 지워지지 않아요~" size="50">
    </div>

    <div>입력 텍스트6 :
        <input type="text" placeholder="텍스트를 입력하세요^^ 저는 자동으로 지워진답니다~" size="50">
    </div>

    <!-- readonly 속성과 같이 속성명(Property)과 값(Value)이 동일한 경우에는 속성명만 지정 가능. -->
    <div>입력 텍스트7 :
        <input type="text" value="읽기 전용 텍스트입니다~" readonly size="50">
    </div>


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
  
  
  
