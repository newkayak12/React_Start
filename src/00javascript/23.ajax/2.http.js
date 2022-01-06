// HTTP 응답 처리 
/**
 * 서버가 전송한 응답을 처리하려면 XMLHttpRequest 객체가 발생시키는 이벤트를 캐치해야 한다. XMLHttpRequest 객체는 onreadystatechange, onload, onerror 같은 이벤트 핸들러 프로퍼티를 갖는다. 
 * 이 이벤트 핸들러 프로퍼티 중에서 HTTP 요청의 현재 상태를 나타내는 readyState 프로퍼티 값이 변경된 경우 발생하는 readystatechange 이벤트를 캐치하여 다음과 같이 HTTP 응답을 처리할 수 있다.
 */
//XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest()

//HTTP 요청 초기화
xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/1')

//HTTP 요청 전송
xhr.send();

//readystatechange 이벤트는 HTTP 요청의 현재 상태를 나타내는 readyState 프로퍼티가 변경될 떄마다 발생한다.
xhr.onreadystatechange=()=>{
	//readyState 프로퍼티는 HTTP 요청의 현재 상태를 나타낸다.
	//readyState 프로퍼티 값이 4(XMLHttpRequest.DONE)가 아니면 서버 응답이 완료되지 않은 상태다.
	//만약 서버 응답이 아직 완료되지 않았다면 아무런 처리를 하지 않는다.
	if(xhr.readyState !== XMLHttpRequest.DONE) return;

	//status 프로퍼티는 응답 상태 코드를 나타낸다.
	//status 프로퍼티 값이 200이면 정상적으로 응답된 상태이고 
	//status 프로퍼티 값이 200이 아니면 에러이다.
	//정상적으로 응답된 상태라면 response 프로퍼티에 서버의 응답 결과가 담겨있다.
	console.log(xhr.status)
	if(xhr.status === 200){
		console.log(JSON.parse(xhr.response));
		/*
			{
				"userId": 1,
				"id": 1,
				"title": "delectus aut autem",
				"completed": false
			}
		*/
	} else {
		console.error('ERROR', xhr.status, xhr.statusText)
	}
}

/**
 * 	send 메소드를 통해 HTTP 요청을 서버에 전송하면 서버는 응답을 반환한다. 하지만 언제 응답이 클라이언트에 도달할지는 알 수 없다. 따라서 readystatechange 이벤트를 통해 HTTP 요청의 현재 상태를 확인해야한다.
 * readsatatechange 이벤트는 HTTP 요청의 현재 상태를 나타내는 readState 프로퍼티가 변경될 때마다 발생한다.
 * 
 * 	onreadystatechange 이벤트 핸들러 프로퍼티에 할당한 이벤트 핸들러는 HTTP 요청의 현재 상태를 나타내는 xhr.readyState가 XMLHttpRequest.DONE인지 확인하여 서버의 응답이 완료되었는지 확인한다.
 * 서버의 응답이 완료되면 HTTP 요처엥 대한 응답 상태(HTTP 상태 코드)를 나타내는 xhr.status가 200인지 확인하여 정상처리와 에러처리를 구분한다. HTTP 요처엥 대한 응답이 정상적으로 도착했다면 요처엥 대한 응답	 몸체를 나타내는
 * xhr.response에서 서버가 전송한 데이터를 취득한다. 만약 xhr.status가 200이 아니면 에러가 발생한 상태이므로 필요한 에러 처리를 한다.
 * 
 * 	readystatechange 이벤트 대신 load 이벤트를 캐치해도 좋다. load이벤트는 HTTP 요처잉 성공적으로 완료된 경우 발생한다. 따라서 load 이벤트를 캐치하는 경우 xhr.readyState가 XMLHttpRequest.DONE인지 확인할 필요가 없다. 
 */