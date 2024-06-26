# white-space

### normal
- white-space 속성 미설정 시 의 디폴트 값으로 white-space 문자(공백, 탭, 개행)를 모두 공백으로처리하고 연속된 white-space 문자도 하나의 공백으로만 인정 
또한 텍스트가 수평 너비 영역 끝에 닿으면 자동으로 개행되는 특성.
```css
h2:nth-of-type(1):hover+p{
  white-space: normal;
}
```
### nowrap
- normal 특성에서 텍스트가 수평 너바 영역 끝에 닿을때 자동 개행되는 특성을 해제
```css
h2:nth-of-type(1):hover+p{
  white-space: nowrap;
}
```

### pre
- pre태그와 동일한 기능. (요소 내의 텍스트는 시스템에서 미리 지정된 고정폭 글꼴(fixed-width font)을 사용하여 표현되며, 텍스트에 사용된 여백과 줄바꿈이 모두 그대로 브라우저 화면에 나타납니다.)
```css
p:nth-of-type(2){
  white-space:pre;
}
```
### pre-wrap
- pre 속성과 동일하게 적용되데 수평 너비 영역을 벗어났을 때 nowrap 되는 특성을 wrap으로 변경.

### pre-line
- pre속성과 동일하게 적용되데 텝과 연속 공백을 제외한 개행만을 인정하고 wrap 특성 적용.

# 텍스트 들여쓰기

### text-ident
- 텍스트에 대한 들여쓰기 및 내어쓰기 설정. text-indent 속성은 들여쓰기할 실제 대상이 아닌 부모요소에 설정해야하며 부모요소 또한
  인라인 요소가 아닌 블럭 또는 인라인 블럭요소인 경우에만 속성 적용이 가능함에 주의
```css
.text-ident1{
  text-ident:50px;
}
```
- 들여쓰기한 공간도 텍스트와 동일하게 취급되어 들여쓰기한 이후의 텍스트가 수평 컨텐트 영역을 넘치면 개행됨에 주의.
```css
.text-ident12
  text-ident:5000px;
}
```

- text-indent를 음수로 지정함으로써 문서에 컨텐트 보존이 되지만 화면에는 표시되지 않도록 설정가능.
```css
.text-ident3{
  text-ident:-9999em;
}
```
### IR (Image Replace)기법
- 검색을 위한 텍스트는 그대로 보존하면서 실제 화면상에는 텍스트 대신에 이미지를 표현하는 기법.

```css

.jeep_logo span{
  display:none; /*검색이 되지도 않고 스크린 리더가 읽을 수 없는 단점으로 사용 안함*/
}

/* text-ident 속성을 부모요소 에 지정하면 a 태그 자체가 보이지 않게됨으써 백그라운드에 대한링크가불가하므라 자식요소인 a 태그에 적용.*/
.starbucks_logo a{
  font-size: 3em;  /*기본 픽셀이 아닌 h2(24px)에 대한 3em이 적용됨에 주의*/
}
```

### backgroud-image
- url 함수를 이용하여 배경 이미지 로드

```css
/* text-ident 속성을 이용하여 검색을 위한 텍스트는 그대로 유지한 채로 화면에 보이지 않는 텍스트를 대체하여 링크가 걸릴 수 있도록 a 태그에 대한 백그라운드 이미지 설정.*/
.starbucks_logo a{
  background-image: url(../);
}
/*
백그라운드 이미지가 들여쓰기된 텍스트의 컨텐트 크기에 맞추어 자리를 차지함으써 본래의 이미지 크기가 텍스트 컨텐트 크기에 맞지 않으면, 이미지가 부분적으로만 표시되는 문제점 발생가능.
따라서 본래 이미지가 갖는 크기로 설정하기 위해 인라인 요소인 a 태그를 블럭또는 인라인 블럭 요소로 변경하여 이미지 킈 설정. 
*/
```

* 부모 태그에 들여쓰기를 지정하여 텍스트를 보이지 않게한 상태에서 백그라운드 지정 시 부모 태그의 너비나 높이가 지정되지 않으면 백그라운드 지정이 되지 않음에 주의.
  즉, 들여쓰기 전의 텍스트의 배경은 부모요소에 너비와 높이가 존재하지 않아도 텍스트의 컨텐트 영역내에서 표시만 되지만, 들여쓰기를 하여 보이지 않게 한 상태에서는 
보이지 않는 텍스트에 대한 배경지정이 되지 않으므로 , 텍스트를 감싸는 부모 요소에 반드시 너비와 높이를 지정해야 배경이 표시

```css
.starbuck_logo a{
  display: inline-block;
  width:643px;
  height:500px;

  text-ident:9999em; /*스크린 리더가 읽은수는 있지만 text-ident 속성이 사용된 요소가 많은 경우네는인덴트에 대한 반복적인 연산으로 인한 웹페이지 로딩 저하의 요인이 될 수 있음에 주의*/ 
}

/* 텍스트에 대한 들여쓰기를 위해 텍스트를 감싸는 별도의 span 태그를 추가하여 인라인 블럭요소로 변경후 text-ident 속성을 통해 화면에 표시되지 않도록 설정.
백그라운드가 아닌 별도의 링크가 걸릴수 있도록 img 태그를 추가함으로써 이미지에 대한 크기 설정 가능.
 */
```

### letter-spacing
- 글자사이 간격 설정 (letter-spacing: 5px;)

### word-spacing
- 단어사이 간격 설정  
```css
h2:nth-of-type(2):hover+p {
    word-spacing: 5px;
}
```

### line-height
- 글자의 중신선을 기준으로 한 top부터 bottom까지의 전체 높이.
  글자의 중심선으로 부터 toop이나 bottom 까지의 개별 높이가 아님에 주의.
  또한 line-height 의 지정은 자식 요소가 아닌 부모요소에 지정함으로써 부모요소 안에서의 자식요소에 대한 요소의 높이가 결정됨에 주의.

```css

```

* line-height 에 대한 % 적용은 상부 부모 요소에 적용된 누적 백분율이 아닌 해당 요소의 font-size 크기에 대한 백분율이 적용됨에 주의.
따라서 아래에서의 line-height 200% 는 기본 16px 이 가지는 line-height에 대한 200%가 지정.

* normal 옵션 적용시 해당 요소가 가지는 font-size 크기에 적용되는 디폴트 line-height 값이 적용.
```css
h2:nth-of-type(6)+div p{
  line-height:200%
}
h2:nth-of-type(7)+div:hover p {
    line-height: normal;
}
```





