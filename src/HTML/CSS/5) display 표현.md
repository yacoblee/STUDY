### display
- 해당 요소가 컨텐트 영역을 차지하지 않으면서 숨김 (display:none)

### visibility
- hidden: 해당 요소가 컨텐트 영역을 차지한 상태로 숨김.
- visible: visibility 속성의 디폴트 값

```css

img[src = "../image/ .jpg"]{
  width: 400px;
}

h2:nth-of-type(1):hover+img{
  display: inline-block;
  visibility: visible;
}


```

### overflow
- 부모요소의 프레임 내에서 자식요소가 흘러 넘치는 경우에 대한 설정

* visible: 부모요소에 대하여 자식요소가 흘러 넘쳐도 보이는 그대로 표시
  overflow 속성 미설정 시의 디폴트 값.
* hidden: 부모요소에 대하여 자식요소가 흘러 넘쳐 표시되는 부분을 숨김.
* overflow-(x/y): hidden : 부모요소에 대하여 자식요소가 (수평/수직)으로 흘러 넘쳐 표시되는 부분을 숨김
* scroll: 자식 요소가 부모의 수평 또는 수직 영역을 벗어나 흘러 넘치는 경우, 
흘러 넘치는 방향에 상관ㅇ벗이 수평과 수직 모두에 대하여 스크롤 바 생성.
* auto: 자식 요소가 부모의 수평 또는 수직 영역을 벗어나 흘러넘치는 경우, 흘러 넘치는 방향에 대해서만 스크롤바 생성
```css

        p:nth-of-type(4) {
            overflow-y: hidden;
            overflow: scroll;
        }
        p:nth-of-type(4):hover {
            overflow: auto;
        }


```


### white-space: nowrap
- 텍스트는 기본적으로 지정된 컨텐트 너비 영역에 둘러싸이는 특성응로 인해 오른쪽 끝 영역에 닿으면 자동으로 개행되는
특성을 가지는데, 이 특성을 해제하는 값이 nowrap. (white-space: nowrap)


