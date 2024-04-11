# ref와 DOM

일반적인 React의 데이터플로우에서 `props`는 부모와 자식이 상호작용할 수 있는 유일한 수단이다.

자식을 수정하려면 새로운 props를 전달하여 자식을 다시 렌더링해야한다.

하지만 일반적인 데이터 플로우에서 벗어나 직접적으로 자식을 수정해야 하는 경우가 있다. 

리액트에서는 `DOM` 요소를 직접적으로 사용하지 않기 때문에 리액트에서 리액트의 다른 요소에 접근하고 싶다면 **ref**를 사용하면 된다. 

**하지만 선언적으로 해결할 수 있는 문제에선 ref사용을 지양하자!!**

<br>

# Ref 생성하기

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
 ```
 
 Ref는 `React.createRef()` 함수를 호출하면 Ref라는 오브젝트가 생긴다. 그리고 원하는 요소에 아래와 같이 `Ref`를 전달해주면된다.
 
 
 <br>
 
 ```jsx
 const node = this.myRef.current;
 ```
                
 `React.createRef()`로 생성된 ref는 current 프로퍼티의 값을 받는다. 
 
 함수컴포넌트는 ref를 사용할 수 없다. 



<br>

# Ref 사용하기

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // textInput DOM 엘리먼트를 저장하기 위한 ref를 생성합니다.
    this.textInput = React.createRef();
  }
  
  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
       
      </div>
    );
  }
}
```


