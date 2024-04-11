# Vue.js란 무엇일까?

<br>

- **프레임워크** 이며**양방향 데이터 바인딩**을 하지만 컴포넌트 간 통신은 **단뱡향 데이터 흐름(부모 -> 자식)**을 사용한다. 
- 다른 프레임워크와 비교했을 때 상대적으로 가볍고 빠르다.
- 문법이 단순하고 간결하여 **쉽게 접근이 가능**하다. 


<br>

# 설치방법

**1.  **index.html**에 **script**를 추가하는 방법**

```vue
<script>src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js">
</script>
```

**2. NPM **

대규모 애플리케이션을 구축할 때 권장하는 방법이다.
NPM은 **Webpack**또는 **Browserfy**와 같은 모듈 번들러와 잘 작동합니다. 
또 **싱글 파일 컴포넌트**를 만들기 위한 도구도 제공합니다. 

<br>

**3. CLI**

**Vue CLI(Command Line interface)**는 Vue 프로젝트를 빠르게 구성하고, 빌드, 디플로이 할 수 있게 도와주는 도구이다.

터미널에서 다음 명령어를 입력한다


**-g(global)**

 이 옵션을 사용하면 설치하는 패키지가 현재 디렉토리뿐만 아니라 앞으로 생성하게 되는 모든 프로젝트에서 사용할 수 있는 global 패키지로 등록된다. 
Vue CLI는 앞으로 Vue 프로젝트를 생성할 때마다 사용해야 하므로 -g(global)로 설치합니다.


> npm install -g 패키지명  



**--save**

 **./node_modules**에 패키지를 설치한다. 그 다음에 **package.json**파일에 있는 **dependencies**객체에 지금 설치한 패키지 정보를 추가한다. 
> npm install 패키지명 --save


[vue CLI 문서](https://cli.vuejs.org/)

<br>

**4. Vue-Rounter 설치**

>vue add router 

설치가 끝나면 src 폴더에 router,views 폴더와 파일이 생성된다.

이 상태에서 다음 명령어를 입력하여 서버를 재시작한다.

>npm run serve 

브라우저에  **http://localhots:8080** 을 입력한다. 

**App.vue** 파일을 열어보면 코드에 *router-link to="/"* 와

*router-link to="/about"* 부분을 확인할 수 있다.

그리고 브라우저에서 home과 about을 클릭하면 주소창이 바뀌는것을 볼 수 있다.

[Router에 대해 더 알아보기](https://velog.io/@duswn38/Vue-Vue-Router-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
