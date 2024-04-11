# 컴포넌트란?

컴포넌트 안에는 **html js(데이터) style** 가 존재하며 **재사용**이 가능하다.

그러므로 중복되는 함수와 기능을 합칠 수 있으며 뷰컴포넌트도 **인스턴스**이다.

src 폴더 밑에 components 폴더를 확인할 수 있다.(vue-router를 추가하면 src 폴더 밑에 views 폴더가 생성된다.) 

components는 **전역**과**지역** 두가지가를 사용할 수 있다. 

<br>

# 컴포넌트의 기본 구조

뷰 컴포넌트 내에는 **name, components, data, computed**같은 기본 프로퍼티가 존재한다. 이 기본프로퍼티 외에도 메소드들이 있다. 

<br>

## ✔️전역 component(어떤 tag안에서도 사용이 가능하다.)

### 기본구조

```vue

<컴포넌트명></컴포넌트명> 으로 사용할 수 있다.

<script>
	Vue.component('컴포넌트명`, {
    	template: `
        <div>
        	{{name}}
        </div>
        `,
        data() {
        	return {
            	name: 'kozy'
            	}
        },
    })
</script>
```

<br>
컴포넌트를 다른 컴포넌트 인스턴스에서 사용하는 것이 가능하다.


```vue

<script>

	Vue.component('컴포넌트2', {
    	template: `
        <div>
        	hello
        </div>
        `
    })
    
    
	Vue.component('컴포넌트명`, {
    	template: `
        <div>
        	<컴포넌트2></컴포넌트2> //컴포넌트2를 다른 컴포넌트 내부에서 사용할 수 있다. 
        	{{name}}
        </div>
        `,
        data() {
        	return {
            	name: 'kozy'
            	}
        },
    })
</script>
```

<br>

## ✔️지역component

### 기본구조

```vue

<script>
	const Test = {
    template: `
        <div>
        	hello
        </div>
        `,
    data() {
        	return {
            	name: 'kozy'
            	}
        },
    }  // 지역 컴포넌트 생성
    
    
    const app =new Vue({
    el: '#app',
    components: {
    	`butoon`: Test  ///인스턴스 내부에서 등록하여 사용한다.
        				///만약에 등록하지않는다면?
                        ///에러가 발생한다! 
        }
    )}
    

<script>

```
