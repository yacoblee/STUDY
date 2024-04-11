# 웹소켓?

일반적으로 **서버**와 **유저**가 데이터를 주고받으려면 클라이언트가 **HTTP요청**을하면 서버가 **데이터**를 보내준다.

하지만 이런 경우 서버가 **먼저 데이터를 보내는 경우는 없다 .** 만약 **실시간**으로 서버와 통신하여 데이터를 받아오는 경우에

초단위로 HTTP통신을 하기엔 복잡하고 비효율적이다. 그래서 이 해결책으로 나온 것이 **WebSocket**이다. (예를들어 코인거래소)

**WebSocket**을 사용하면 **tcp(Transmission Control Protocol)**연결 기반으로 유저 간 **양방향 통신**이 가능하다. 

<br>


# WebSocket에 연결하려면?

클라이언트가 서버에게 HTTP요청으로 **웹소켓 리퀘스트**를 보낸다. 그리고 서버는 **웹소켓**을 사용하여 **양방향 웹소켓 통신**을 시작할 수 있다.


<br>

# node.js 기반으로 시작해보기

```js
npm init 
npm install express ws  /// express는 server를 만들어주는 라이브러리, ws는 웹소켓 연결을 해주는 라이브러리
```


<br>

웹서버 만들기 

```js 

- server.js

const express = require("express");
const app = express();

app.use("/", function(req, res){
    res.sendFile(__dirname +  "/index.html");
    });
    
    app.listen(8080);
    
const WebSocket = require("ws");

const soket = new WebSocket.server({
        port: 8081
        }); 

```

<br>

```html

-index.html

<script>
    let socket = new WebSocket("ws://localhost:8081");
///웹소켓을 서버에게 요청하는 코드 

</script>
```

