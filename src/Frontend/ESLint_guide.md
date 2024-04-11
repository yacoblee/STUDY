# ESLint?
> 우선 **린트**라는 것은 소스 코드에 문제가 있는지 **탐색**하는 작업이며, **린터**는 이 작업을 도와주는 소프트웨어 도구이다.
최근엔 ESLint를 자바스크립트 린터로 주로 사용하고 있다.
vscode내부에 있는 extensions에서 인스톨 하여 사용할 수 있다.


<br>

# ESLint의 옵션 


## root 설정 
`true`로 설정되어 있는 설정 파일을 만나면 더 이상 상위 폴더로 올라가지 않는다.

```json
{
   "root":true

}
```

## plugins 옵션

다양한 plugin을 추가할 수 있다. 예를들어 React와 관련된 규칙을 설정할 수 있다 
```json
{
   "plugins":["import", "react"] /// eslint-plugin-import와 eslint-plugin-react를 의미함
}
```


플러그인의 npm패키지 이름은 `eslin-plugin-`으로 시작한다. 
설치 후에 규칙을 설정해주어야한다(error, warn, off) 
규칙은 `extends`나 `rules`를 통해 추가 설정해준다. 
```node
npm i -D eslint-plugin-import eslint-plugin-react
```

## extends옵션
Google, Facebook, Airbnb등 기업들의 ESLINT 규칙을 가져와 사용할 수 있다. 
이렇게 확장 가능한 패키지 이름은 `eslint-config-`로 시작한다.

```json
{
   "extends":["airbnb"]

}
```

## rules 옵션

규칙 하나하나를 세세하게 제어하기 위해서 사용한다. 일반적으로 `extends` 옵션에 설정한 규칙을 덮어쓰고 싶을 때 유용하게 쓸 수 있다.
아래 예시의 경우 "airbnb"설정에서 `no-console`r규칙을 어기면 "error", "import/prefer-default-export"는 비활성화.

```json

{
  "extends": ["airbnb"],
  "rules": {    
     "no-console": "error",    
     "import/prefer-default-export": "off"  
     }
}
```

규칙값 규칙은 일반적으로 "eroor"로 설정한다. 

>off or 0 - 규칙을 끈다
>warn or 1 - 경고로 규칙을 킴
>error or 2 - 에러로 규칙을 킴


## overrides
파일마다 구성을 다르게 하고 싶을 때 overrides옵션을 사용한다.
같은 프로젝트 내부에서 일부 파일만 설정을 다르게 하고 싶을 때 사용한다.
```json
{
   "overrides":[
      {
         "files":["*-test.js", "*.spec.js*"],
         "rules": {
            "no-console": "off"
         }
      }
   ]
   

}
```

## env 옵션
자바스크립트는 다양한 런타임, 버전, 확장프로그램 그리고  프레임워크에서 실행될 수 있는데 
각각 다른 전역 변수를 가질 수 있다.


```json

{
  "env": {
    "browser": true,
    "node": true
  }
}

```



