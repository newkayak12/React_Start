//Micro Task Queue

// 아래 예제에서 로그가 어떤 순서로 출력될까?
setTimeout(()=>console.log(1), 0);
Promise.resolve()
    .then(()=>console.log(2))
    .then(()=>console.log(3))
//2->3->1 순서대로 출력된다.
/**
 * 그 이유는 프로미스의 후속 처리 메소드의 콜백 함수는 태스크 큐가 아니라 마이크로 태스크 큐에 저장되기 떄문이다.
 * 마이크로태스크 큐는 태스크 큐와는 별도의 큐이다. 마이크로 태스크 큐에는 프로미스의 후속 처리 메소드의 콜백 함수가 일시 저장된다.
 *
 * 마이크로태스크 큐는 태스크 큐와는 별도의 큐이다. 마이크로태스크 큐에는 프로미스의 후속 처리 메소드의 콜백 함수가 일시 저장된다. 그 외의 비동기 함수의 콜백 함수나 이벤트 핸들러는 태스크 큐에 일시 저장된다.
 * 콜백 함수나 이벤트 핸들러를 일시 저장한다는 점에서 태스크 큐와 동일하지만 마이크로 태스크 큐는 태스크 큐보다 우선순위가 높다. 즉, 이벤트 루프는 콜 스택이 비면 먼저 마이크로 태스크 큐에서 대기하고 있는 함수를 가져와 실행한다.
 * 이후 마이크로 태스크 큐가 비면 태스크 큐에서 대기하고 있는 함수를 가져와 실행한다.
 */


//fetch
/**
 * fetch 함수는 XMLHttpRequest 객체와 마찬가지로 Http 요청 전송 기능을 제공하는 클라이언트 사이드 Web API다. fetch 함수는 XMLHttpRequest 객체보다 사용법이 간단하고 프로미스를 지원하기 떄문에 비동기 처리를 위한
 * 콜백 패턴의 단점에서 자유롭다. fetch 함수는 비교적 최근에 추가된 Web API로서 IE를 제외한 대부분의 모던 브라우저에서 제공한다.
 * fetch 함수는 HTTP 요청을 전송할 URL과 HTTP 요청 메소드, HTTP 요청 헤더, 페이로드 등을 설정한 객체를 전달한다.
 *
 *
 *      const promise = fetch(url, [,options])
 *
 *  fetch 함수는 HTTP 응답을 나타내는 Response 객체를 래핑한 Promise 객체를 반환한다. fetch 함수로 GET 요청을 전송해보자 첫 번쨰 인수로 HTTP 요청을 전송할 URL만 전달하면 GET 요청을 전송한다.
 */
fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response))
/**
 * fetch 함수 HTTP 응답을 나타내는 Response 객체를 래핑한 프로미스르 반환하므로 후속 처리 메소드 then을 통해 프로미스가 resolve한 Response 객체를 전달받을 수 있다.
 * Response 객체는 HTTP 응답을 나타내는 다양한 프로퍼티를 제공한다.
 * Response.prototype에는 Response 객체에 포함되어 있는 HTTP 응답 몸체를 위한 다양한 메소드를 제공한다. 예를 들어, fetch 함수가 반환한 프로미스가 래핑하고 있는 MIME 타입이 application/json인 HTTP 응답 몸체를 취득하려면
 * Response.prototype.json 메소드를 사용한다. Response.prototype.json 메소드는 Response 객체에서 HTTP 응답 몸체를 취득하여 역직렬화 한다.
 */
fetch('https://jsonplaceholder.typicode.com/todos/1')
//response는 HTTP 응답을 나타내는 Response 객체다.
//json 메소드를 사용하여 Response 객체에서 HTTP 응답 몸체를 취득하여 역직렬화한다.
.then(response=>response.json())
    //json은 역직렬화된 HTTP 응답 몸체이다.
.then(json=>console.log(json))
    //{userId : 1, id:1, title: 'delectus aut autem", completed:false}

//fetch 함수를 통해 HTTP 요청을 전송해보자. fetch 함수에 첫 번째 인수로 HTTP 요청을 전송할 URL과 두 번쨰 인수로 HTTP 요청 메소드 HTTP 요청 헤더, 페이로드 등을 설정한 객체를 전달한다.

const request = {
    get(url){
        return fetch(url);
    },
    post(url, payload){
        return fetch(url, {
            method:"POST",
            headers:{'content-Type' : 'application/json'},
            body: JSON.stringify(payload)
        });
    },
    patch(url, payload) {
        return fetch(url, {
            method: 'PATCH',
            headers : {'content-Type' : 'application/json'},
            body:JSON.stringify(payload)
        })
    },
    delete(url){
        return fetch(url, {method : 'DELETE'})
    }
}



//1. GET 요청
request.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(todos => console.log(todos))
.catch(err => console.error(err));

//2. POST 요청
request.post('https://jsonplaceholder.typicode.com/todos', {
    userId:1,
    title:'JavaScript',
    completed:false
})
.then(response => response.json())
.then(todos => console.log(todos))
.catch(err=>console.error(err))

//3. PATCH
request.patch('https://jsonplaceholder.typicode.com/todos/1', {
    completed: true
})
.then(response => response.json())
.then(todos => console.log(todos))
.catch(err => console.error(err))


//4. DELETE
request.delete('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(todos => console.log(todos))
.then(err => console.error(err))