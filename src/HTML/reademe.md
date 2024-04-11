# HTML 태그

### trarget 태그

- 링크가 열릴 프레임(웹페이지) 지정.

target = "_self" : 현재 프레임(웹페이지)에 로드. 미설정 시 디폴트.
target = "_blank" : 새로운 프레임(웹페이지)에 로드.

```html
<a href="./hamburger/hamburger.html" target="_blank"></a>
```

### img 태그

- 이미지를 웹상에 표시해주는 태그.

src : 이미지 파일의 경로나 URL 지정.

alt(alter) : 잘못된 경로 설정이나 서버등의 문제로 이미지를 정상적으로 로드하지 못하는
경우 이를 대체하기 위한 문자열 지정.

※ a 태그의 링크 대상은 텍스트뿐만 아니라 브라우저에서 허용하는 범위에서 이미지나 문서, 동영상 등이 가능.

```html

<img src="../image/hamburger_img.JPG" alt="햄버거 이미지">
``` 

<br>


#### map, area (이미지관련)태그

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


    - 입력 컨트롤을 이용해서 사용자로부터 입력 받음 데이터를 서버에 전송하기 ㅜ이해 입력 컨트롤
    요소들을 그호 ㅏ하고 서버측에 전송할 입력 데이터 연결을 위한 실질적인 중간 매개체 역할을 담당
    input, button, select, textarea 태그 등으로 구성.

   #### form 태그 속성
   - actionL 사용자로부터 입력된 데이터를 전송할 서버 url 등을 지정
   - name: 서버에서 인식 가능한 식별자 지정
            서버에서의 식별자는 nmae 속성만 가능하며, id는 CSS 나 자바스크립트에서 구분하기 위한 식별자임에 유의.
   - method: get은 소량의 빠른 데이터 전송, post는 보안에 필요되는 데이터나 대량 데이터 전송에 적합
   - novalidate: form 그룹에 속해 있는 모든 태그 및 속성에 대한 유효성 검사 해제.
                form 태그에 지정함으로 브라우저 별로 제공되는 유효성 텍스트와 같은 인터페이스를 스크립트를 통해 일관된 인터페이스로 통합하기 위해
     form 그룹 차원에서 임시로 지정
   - value: submit 버튼에 표시할 텍스트 지정. 서버측에서 인식하기 위한 부분은 name 값.
            
```html


<form action="./html/server.html" name="studentInfo" method="get" novalidate>
       <div>
            <label for="named">이름 :</label>
            <input type="text" id="named" name="named" minlength="3" maxlength="5" required>
        </div>

        <div>
            <label for="stNum">학번 :</label>
            <input type="text" id="stNum" name="stNum" placeholder="2자리만 입력 가능" minlength="2" maxlength="2" required>
        </div>

        <input type="submit" name="transBtn" value="전송">
</form>

```
     
<br>









### fieldset

- form 태그 내에서 여러 컨트롤 내에서 여러 컨트롤 요소들을 그룹화.

- legend : 그룹화된 fieldset 에 대한 제목 표시
  * fieldset, legend 는 외형상 보이지 않게 하고 싶다고 하더라도 반드시 설정. css로는 표현 바꿀수있음

'
```html
<fieldset>
            <legend>필수입력</legend>

            <div>
                <label>이름
                    <input type="text" name="userName" required>
                </label>
            </div>
</fiedlset> 
```

<br>

### input

#### input / email
- 기본적인 이메일 형식에 부합되는지의 여부를 브라우저 차원에서 유효성 검사.
이메일 형식에 포함되는 @ 의 앞뒤에 들어가는지 정도의 유혀성 체크만 가능.

#### input / radio

- 다중 라디오 버튼 중 하나만 선택 가능한 인터페이스 제공
radio 단일 요소만 선택 가능하게 하기위해 name 속성의 값을 동일하게 설정해야만 함에 주의.
* value: DB field에 대응되어 할당되는 데이터.

#### input / checkbox

- 다중 체크박스 버튼을 다중 선택가능한 형태의 인터페이스 제공.
name 속성의 값을 같거나 다르게 하여도 상관은 없으나, 효율적인 로직을 위해 동일하게 설정하는 것을 권장.

#### input / file

- 파일 업로드 할 수 있는 형태의 인터페이스를 제공.
파일을 지전하면 선택도니 파일의 로컬 경로를 표시.

#### input / range

- 컨트롤의 정확한 값의 측정이 목적이 아닌 대략적인 비율을 슬라이드나 다이얼 형태로 표시.
* min: 컨트롤의 최솟값, 미설정시 0
* max: 컨트롤의 최대값, 미설정시 100
* value: 컨트롤의 디폴드 설정값

  
```html
    <label>화면 밝기
        <input type="range" min="1" max="10" value="8">
    </label>
```



### textarea

- 텍스트 데이터를 입력할 수 있는 게시판 형태의 텍스트 상자 제공.
인라인 스타일 지정시에는 아래 속성으로 이용하지만, 외부 스타일 적용시 width, height로 지정
* cols: 텍스트 상자의 너비를 텍스트 단위로 지정.
* rows: 텍스트 상자의 높이를 텍스트 단위로 지정.


### select

- 콤보박스나 리스트 박스를 구성하기 위한 태그로 목록을 구성하는 option 태그로 구성.
size나 multiple 속성 지정 시에는 리스트박스 형태로 구현.
* size: 리스트 박스에 표시될 항목 수 지정.
* multiple : 목록에 대한 다중 선택 지정.
* option>value: 서버엥 전송할 실제 데이터 지정.
 
```html
            <select name="favorite_game" multiple size="3">
                <!-- favorite(페이버릿) : 좋아하는, 잘하는-->
                <option value="전략시뮬레이션">전략시뮬레이션</option>
                <option value="RPG" selected>RPG</option>
                <option value="FPS">FPS</option>
                <option value="슈팅게임">슈팅게임</option>
                <option value="스포츠게임">스포츠게임</option>
            </select>
```

#### optgroup

- option 항목들에 대한 그룹 지정이 가능
* label: option 그룹에 대한 그룸명을 지정. 단, label은 리스트에 표시는 되지만 선택은 불가.
  
  ```html
            <select name="learning_program">
                <optgroup label="Front-end">
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                </optgroup>

                <optgroup label="Back-end">
                    <option value="ASP">ASP</option>
                    <option value="JSP">JSP</option>
                    <option value="PHP">PHP</option>
                </optgroup>
            </select>
  ```


#### datalist

- select 태그와 유사한 콤보상자 형태로 인터페이스가 제공되지만, select 태그와 달리 목록에 존재하는 값만 선택적으로
입력 가능한 형태가 아니라 입력에 도움을 받을 수 있는 option 태그를 이용하여 선택 가능하게 하거나 직접 입력한 값과
option 태그에 존재하는 값이 일치하는 형식이 있으면 해당 목록을 보여줌으로써 입력 자동완성 기능을 부여.
직접 입력도 가능하묘 데이터 전송을 한 이후에는 직접 입력한 값이 브라우저에 의해 저장되어 콤보상자 버튼을 클릭하면 직접 입력한 값도 option 태그를 통해 저장된 목록 하단에 표시 및 자동완성 기능 제공.

* input 태그에 datalist 적용 ㅅ 별도의 type = "list" 시 text 상자 형식 그대로 제공 되며 포커스 지정시 콤보 상자로 표시
* list 속성 값은 datalist에 지정에 id 식별자와 일치해야만 datalist와 연동 가능.

  ```html
      <fieldset>
            <label>현재 거주지
                <input list="residenceList" name="currentResidence">
            </label>
            <!-- 기록이력이 남는 태그 -->
            <datalist id="residenceList">
                <option value="수원시"></option>
                <option value="서울시"></option>
                <option value="안양시"></option>
                <option value="성남시"></option>
                <option value="광주시"></option>
            </datalist>
        </fieldset>



  ```








