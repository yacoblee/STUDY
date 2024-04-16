
#### 복합 선택자 우선순위 경쟁규칙

```css
        #domain a {
            color: red;
        }

        .naver>a {
            color: blue;
        }

        ol>.samsung,
        ol>.lg ,
        ol>.kt {
            color: aqua;

        }

        ol li[class] a {
            color: coral;
        }

    <ul id="domain">
        <li class="naver"><a href="http://www.naver.com">네이버</a></li>
        <li class="daum"><a href="http://www.daum.net/" target="_self">다음</a></li>
        <li class="google"><a href="http://www.google.com/" target="_blank">구글</a></li>
    </ul>
    <hr>

    <ol>
        <li class="samsung"><a href="https://www.samsung.com">삼성</a></li>
        <li class="lg"><a href="https://www.lge.co.kr">LG</a></li>
        <li class="kt"><a href="https://www.kt.com">KT</a></li>
        <li><a href="https://www.hyundai.com">현대자동차</a></li>
        <li><a href="https://www.hanwha.co.kr">한화</a></li>
    </ol>
```


### 속성 상속과 전역속성(inherit, initial, unset) 값

- 상속되는 속성
  * color, font, text-align, white-space, word-spacing ....
- 상속되지 않는 속성
  * display, position, width, height, float, background, overflow ...

```css
   .model2021>div {
            /* 상속 속성 */
            color: red;

            /* 비상속 속성 */
            border: 1px solid blue;
        }

        /* ====================================================== */

        /* 
            < initial >

        - 상속되는 속성에 대하여 그 속성이 가지는 기본값으로 초기화.
          여기서의 기본값은 태그별로 가지는 기본값이 아닌 속성이 가진
          기본값임에 주의.
        */
        .model2021>div:first-child>div {
            color: initial;
        }

        /* ====================================================== */

        /* 
            < inherit >

        - 상속되지 않는 속성에 대하여 부모 요소로터 상속되도록 지정.
        */
        .model2021>div:first-child>div:nth-child(4) {
             border: inherit;
             color: inherit;
        }

        .model2021>div:first-child>div:nth-child(4)>div {
           border: inherit;
            color: initial; 
        }

        /* ====================================================== */

        /* 
            < all >

        - 모든 속성을 지칭하는 속성으로 initial, inherit, unset 등을 지정 가능.


            < unset >

        - 상속되는 속성에는 상속값을 적용하고 상속되지 않는 속성에는 initial 적용.
          display 의 기본값은 inline 이며 div 태그가 가지는 display 속성의
          기본값이 아닌 display 속성 자체가 가지는 기본값 속성이 적용.
        */
        .model2021>div:first-child>div:nth-child(4)>div {
            all:unset; 
        }
<main class="model2021">
        <div>세단
            <div>그랜저</div>
            <div>소나타</div>
            <div>아반떼</div>
            <div>K7
                <div>가솔린</div>
                <div>디젤</div>
            </div>
        </div>

        <div>트럭</div>

        <div>봉고</div>

        <div>SUV
            <div>산타페</div>
            <div>쏘렌토
                <div>가솔린</div>
                <div>디젤</div>
            </div>
            <div>셀토스</div>
        </div>
    </main>
```

```css
body의 자식이면서 h1, ul이 아닌태그
  body>:not(h1, ul) {
            color: gold;
        }

```


### 색상명 지정
- 약속되어있는 고유한 색상명을 직접 지정하는 형식

- 불투명도 (opacity)
  * 모든 색상 지정 방식은 opacity 속성을 이용하여 별도의 불투명도 설정 가능.
0~1.0 범위의 값으로 지정 가능하여 낮을 수록 투명도가 높아짐.(다른 요소와 겹쳤을 경우 같이 투명해짐)



### RGB 16진수 값 지정

- 접두사 # 뒤에 RGB 색상 값을 3byte 16진수 총 6자리로 표현하되. r, g, b 각각 1byte 16진수 2자리씩 묶어서 혼합하는 형태로 지정
- 16진수 값이 클수록 빛의 세기, 명도가 증가 (#ffffff 흰색, #000000 검은색)
또한 6자리 표기 이후 2자리 16진수를 사용하여 opacity 값 설정 가능.


### 함수형 RGB 값 지정

- RGB 색상 값을 1byte로 표현된 10진수 총 3자리 또는 백분율로 표현
- 공백으로 구분하는 경우 opacity 앞에는 슬러쉬(/)로 구분.

