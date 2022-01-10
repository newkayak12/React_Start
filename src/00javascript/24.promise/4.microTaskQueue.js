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