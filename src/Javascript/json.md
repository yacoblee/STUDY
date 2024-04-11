# JSON?
- JavaScript Object Notation, 웹 어플 데이터를 전송할 때 사용한다. 
- json은 {key : value}로 이루어져있다. 

>clint에서 object를 server로 전달될 때 {key:value} 오브젝트를 string type으로 변환하여 server에 전송.

>server에서 다시 받아올 때도 {key: value}의 string type으로 전송 받아와서 object로 변환하여 브라우저에 표기. 


<br>


## object를 json(string)으로 변환하기 => .stringify (value, replacer)

```js

const json = JSON.stringify(['apple', 'banana']);
console.log(json)  ////["apple", "banana"]


///object를 json으로 변환하기


const rabbit = {
  name: 'yeon',
  color: 'white', 
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  }////함수는 josn에 포함되지 않는다!
}

json = JSON.stringify(rabbit);
console.log(json);  /////'{"name":"yeon","color":"white","size":null,"birthDate":"2021-09-30T14:55:05.057Z"}'
///jump()함수가 포함되지 않았다. 함수는 object의 데이터가 아니기 때문에 제외된다. 


//// rabbit 오브젝트에서 name만 가져오고 싶다면?
json = JSON.stringify(rabbit["name"]); 
console.log(json); /// "yeon"


////replacer/callback함수 사용하기

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`)
  return value
});
////'{"name":"ellie","color":"white","size":null,"birthDate":"2021-09-30T15:32:48.414Z"}'
'key: , value: [object Object]'
'key: name, value: yeon'
'key: color, value: white'
'key: size, value: null'
'key: birthDate, value: 2021-09-30T15:32:48.414Z'
'key: jump, value: () => {
    console.log(`${this.name} can jump!`);
  }'

```


<br>

## json(string)을 object으로 변환하기 => .parse (string,reviver)

```js
json = JSON.stringify(rabbit);
console.log(json)
const obj = JSON.parse(json) //우리가 변환하고 싶은 json을 전달한다
console.log(obj)
///
{
  name: 'yeon',
  color: 'white',
  size: null,
  birthDate: '2021-09-30T15:35:07.421Z'
}

///

```
