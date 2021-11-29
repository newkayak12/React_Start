//rest
function sum(){
	//가변 인자 함수는 arguments객체를 통해 인수를 전달 받는다. 
	console.log(arguments)
}
sum(1,2); //[Arguments] { '0': 1, '1': 2 }

function sum2(...args){
	//rest 파라미터 args에는 배열 [1,2,3,4,5]가 할당된다.
	return args.reduce((pre, cur)=> pre+cur, 0);
}

console.log(sum2(1,2,3,4,5)); //15

/**
 * 하지만 화살표 함수는 함수 자체의 argument객체를 갖지 않는다. 따라서 화살표 함수로 가변 인자 함수를 구현해야할 때는 반드시 Rest파라미터를 사용해야 한다. 
 */


//매개변수 기본값 설정
/**
 * 함수를 호출 할 때 매개변수의 개수만큼 인수를 전달하는 것이 바람직하지만 그렇지 않은 경우에도 에러가 발생하지 않는다. 
 * 이는 자바스크립트 엔진이 매개변수의 개수와 인수를 개수를 체크하지 않기 때문이다.
 * 인수가 전달되지 않는 매개변수의 값은 undefined이다. 이를 방치하면 의도치 않는 결과가 나올 수 있다.
 * 
 * 따라서 해당 매개변수에 인수가 전달되었는지 확인하여 인수가 전달되지 않은 경우 매개변수에 기본 값을 할당할 필요가 있다. 즉, 방어 코드가 필요하다. 
 * 	function sum(x,y){
 * 		//인수가 전달되지 않아 매개변수의 값이 undefined인 경우 기본값을 할당한다.
 * 		x = x||0;
 * 		y = y||0;
 * 		return x+y;
 * 	}	
 * 
 * 	console.log(sum(1)); //1
 * 
 * 이와 같은 매개변수 기본값은 매개변수에 인수를 전달하지 않은 경우와 undefined를 전달한 경우에만 유효하다. 
 */
	function logName(name = 'Kim'){
		console.log(name);
	}
	logName(); //Kim
	logName(undefined); //Kim
	logName(null); //null

/**
 * rest 파라미터에는 기본값을 지정할 수 없다. 
 * 매개변수 기본값은 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티와 arguments 객체에 아무런 영향을 주지 않는다. 
 */