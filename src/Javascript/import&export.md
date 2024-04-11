


## 1) export default / import 

> 다른 파일에 있는 특정한 변수 등을 가져다쓸 수 있다.

<br>

```js

var a = 10; 

export default a;

```


- 위 파일을 import를 한다면?

```js

<script type="module">

import a(작명) from "경로";


```


`type`을 `module`로 정해주고 가져오고싶은 값이 있는 파일을 `import`로 연결한다. 

그리고 가져오고 싶은 값을 지정할 수 있다. 또 내보내는 파일에서는 `export default`를 잊지말고 해주어야 한다. 


<br>

## 2) 여러 개를 export 할 수 있습니다.

> Js파일에 변수를 여러 개 만들고 다 내보내고싶으면 `export`키워드를 사용하면 된다.

```js

var a = 10;
var b = 20;

export {a,b};
```

- 위 파일을 import를 한다면?

```js
import {a,b} froom "경로";
```

import할 때 {변수명}으로 export으로 내보냈던 변수명과 똑같이 써줘야한다.

<br>

## export default와 export차이점은?

`export default`는 **한번**만 쓸 수 있고  import시엔 변수명을 **새롭게 작명**이 가능하다. 


<br>


## 3)export default 와 export 동시에 사용하면? 

```js
var a = 10;
var b = 20;
var c = 30;
export {a, b};
export default c;
```

```js


import c, {a,b} from '경로';
```


<br>

##  4) `as`를 사용하면?

```js


var a = 10;
var c = 30;
export {a};
export default c;

```

```js

 import c as 변수1, {a as 변수2} from 'library.js';
```

**변수명 as 새변수명**으로 작성하여 변경할 수 있다. 



