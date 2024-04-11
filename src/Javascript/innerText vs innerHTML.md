

이 두 속성은 **text element**인지 **html element** 인지에 따라 차이가 있다.


## ✅값을 가져올 때 

### HTML
```html

<div id='content'>
  <div>A</div>
  <div>B</div>
</div>

```

<br>


### JS
```js

////innerTEXT
  const element = document.getElementById('content');

  alert(element.innerText); //A B

  alert(element.innerHTML); // <div>A</div>
		            // <div>B</div>
```

<br>

**innerText** 는 text의 값들만 가져오고 있고

**innerHTML** 은 HTML을 가져오고 있다. 

<br>

## ✅값을 설정할 때 

### html

```html
<div id='content'></div>
```

<br>

### JS


```js
const element = document.getElementById('content');
  element.innerText = "<div style='color:red'>A</div>";
}

/// <div style='color:red'>A</div>

const element = document.getElementById('content');
  element.innerHTML = "<div style='color:red'>A</div>";
}

/// A 
```

**innerText** 경우엔 `content`안에 text로 설정하기 때문에 html코드가 문자열 그대로 설정된다

**innerHTML** 경우 ``html``코드를 입력하면 그 코드가 element안에 포함이 되어 텍스트인 **A**만 나오게 된다. 
