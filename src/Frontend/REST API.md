

# REST API

Rest 규격에 맞춰 만들어진 API이다. 

HTTP URI을 통해 내가 받고자하는 리소스를 명시하고 HTTP Method(POST, GET, PUT, DELETE)를 통해 서버에 요청한다.

그럼 서버는 리소스를 확인하여 응답한다. 

기본적으로 REST API는

`URI`, `HTTP Method`, `Payload`로 이루어져있다. 

# 설계 규칙

- URI 명확히 표현하고 동사로 사용하지 않는다.

- resource를 명사/복수

- resource를 요청하는 HTTP METHOD로 요청한다.

- 확장자를 포함하지 않느다.

- URI는 / 구분자를 사용해 계층 관게를 나타내는데 사용한다. 


# URI의 parameter(Path, Query)

Path의 경우는 데이터를 통째로 가져올 때 사용한다.  

Query parameters의 경우는 **Filtering, Sorting, Searching**을 하는 경우에 사용한다.
