//Date
/**
 * 표준 빌트인 객체인 Date는 날짜와 시간(연, 월, 일, 시, 분, 초)을 위한 메소드를 제공하는 빌트인 객체이면서 생성자 함수이다.
 * 1970년 1월 1일 0시를 Date객체 내부에서 0으로 가지며 해당 기준을 기준으로 하루가 지나는 1970년 1월 2일 0시를 86,400,000(24*60*60*1000)를 갖는다.
 * 
 * Date생성자 함수로 생성한 Date객체는 기본적으로 현재 날자와 시간을 나타내는 정수값을 가진다.
 * 현재 날짜와 시간이 아닌 다른 날짜와 시간을 다루고 싶은 경우 Date생성자 함수에 명시적으로 해당 날짜와 시간 정보를 인수로 지정한다
 * 
 * Date 생성자 함수로 객체를 생성하는 방법은 4가지가 있다.
 */

//1. new Date()
/**
 * Date 생성자 함수를 인수 없이 new 연산자와 함께 호출하면 현재 날짜와 시간을 가지는 Date객체를 반환한다.
 * Date객체는 내부적으로 날짜와 시간을 나타내는 정수값을 갖지만 Date객체를 콘솔에 출력하면 기본적으로 날짜와 시간 정보를 출력한다.
 */
console.log(new Date()) //2021-12-06T13:48:18.862Z

//Date 생성자함수를 new없이 호출하면 Date객체를 반환하지 않고 날짜와 시간 정보를 나타내는 문자열을 반환한다.
console.log(Date()) // Mon Dec 06 2021 22:48:18 GMT+0900 (대한민국 표준시)


//2. new Date(milliseconds)
/**
 * Date 생성자 함수에 숫자 타입의 밀리초를 인수로 전달하면 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된
 * 밀리초만큼 경과한 날짜와 시간을 나타내느 Date객체를 반환한다.
 */

console.log(new Date(0)); //1970-01-01T00:00:00.000Z
console.log(new Date(86400000)); //1970-01-02T00:00:00.000Z


//3. new Date(dateString)
/**
 * Date 생성자 함수에 날짜와 시간을 나타내는 문자열을 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date객체를 반환한다.
 * 이때 인수로 전달한 문자열은 Date.parse 메소드에 의해 해석 가능한 형식이어야 한다.
 */

console.log(new Date('May 26, 2021 10:00:00')); //2020-03-26T01:00:00.000Z

console.log(new Date('2020/03/26/10:00:00')) //2020-03-26T01:00:00.000Z



//4. new Date(year, month[,day,hour,minute,second,millisecond])
/**
 * Date 생성자 함수에 연, 월, 일, 시,  분, 초, 밀리초를 의미하는 숫자를 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date객체를 반환한다. 
 * 이때 연, 월은 반드시 지정해야한다. 지정하지 않은 옵션 정보는 0 또는 1로 초기화된다.
 * 
 * 	인수 					내용
 * 	year		연을 나타내는 1900년 이후의 정수 0~99는 1900~1999로 처리된다.
 * 	month		월을 나타내는 0~11까지 0 == 1월
 * 	day		일을 나타내는 1~31
 * 	hour		시를 나타내는 0~23
 * 	minute		분을 나타내는 0~59
 * 	second		초를 나타내는 0~59
 * 	millisecond	밀리초를 나타내는 0~999
 */

console.log(new Date(2021,12)); //2021-12-31T15:00:00.000Z
console.log(new Date(2021,11, 26, 00,00,00,0)); //2021-12-25T15:00:00.000Z





//Date.now
// 1970년 1월 1일 00:00:00을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환
console.log(Date.now()); //1638799072453

//Date.parse
/**
 * 1970년 1월 1일 00:00:00을 기점으로 인수로 전달된 지정 시간의 인수와 동일한 형식까지 밀리초를 숫자로 반환한다.
 */
console.log(Date.parse('Jan 2, 1970 00:00:00 UTC')) //1638873657996

//Date.UTC
/**
 * 19070년 1월 1일 00:00:00을 기점으로 인수로 전달된 지정 시간까지 밀리초를 숫자로 반환한다.
 * UTC메소드는 new Date(year,month[, day, hour, minute, second, millisecond])와 같은 형식의 인수를 사용해야한다.
 * Date.UTC메소드의 인수는 로컬 타임(KST)이 아닌 UTC로 인식된다.
 */
console.log(Date.UTC(1970,0,2));


//Date.prototype.getFullYear
//Date 객체 연도를 나타내는 정수를 반환한다.
console.log(new Date('2020/07/24').getFullYear)

//Date.prototype.setFullYear
let today = new Date();

//년도 지정
today.setFullYear(2000);
console.log(today.getFullYear());

// 년/월/일 지정
today.setFullYear(1900, 0, 1);
console.log(today.getFullYear());

//Date.prototype.getMonth
console.log(new Date('2020/07/24').getMonth())//6

//Date.prototype.setMonth
//월 지정
today.setMonth(0); //1월
console.log(today.getMonth()); //1월

today.setMonth(11,1);
console.log(today.getMonth())

//Date.prototype.getDay
//요일을 나타내는 정수를 반환하다.
/**
 * 일요일 : 0
 * 월요일 : 1
 * 화요일 : 2
 * 수요일 : 3
 * 목요일 : 4
 * 금요일 : 5
 * 토요일 : 6
 */
console.log(new Date('2020/07/24').getDay()); //5


//Date.prototype.getHours
console.log(new Date('2020/07/24 12:00').getHours())

//Date.prototype.setHours
//시간 지정
today.setHours(8);
console.log(today.getHours());
//시간/분/초/밀리초
today.setHours(0,0,0,0);
console.log(today.getHours())


//Date.prototype.getMinutes
console.log(new Date().getMinutes())

//Date.prototype.setMinutes
//분(0~59)을 나타내는 정수를 설정한다. 분 이외의 옵션으로 초, 밀리초도 설정할 수 있다.

//분 지정
today.setMinutes(50);
console.log(today.getMinutes())


today.setMinutes(5,10,999)// HH:05:10:999
console.log(today.getMinutes())


//Date.prototype.getSeconds
console.log(new Date().getSeconds())

//Date.prototype.setSeconds
today.setSeconds(30);
console.log(today.getSeconds());

//초/ 밀리초 지정
today.setSeconds(10,0);//HH:MM:10:000
console.log(today.getSeconds)


//Date.prototype.getMilliseconds
console.log(new Date('2020/07/24/12:30:10:150').getMilliseconds())

//Date.prototype.setMilliseconds
today.setMilliseconds(123);
console.log(today.getMilliseconds())


//Date.prototype.getTime
//1970년 1월 1일 00:00:00을 기준으로 Date객체의 시간까지 경과된 밀리초를 반환
console.log(new Date().getTime());

//Date.prototype.setTime
today = new Date();
today.setTime(864000000);
console.log(today)

//Date.prototype.getTimeZoneOffset
today = new Date();

console.log(today.getTimezoneOffset()/60);


//Date.prototype.toDateString
today = new Date();
console.log(today.toString());
console.log(today.toDateString())

//Date.prototype.toTimeString
today = new Date();
console.log(today.toString())
console.log(today.toTimeString());


//Date.prototype.toISOString
//ISO 8601형식으로 반환

console.log(today.toISOString())
console.log(today.toISOString().slice(0,10))
console.log(today.toISOString().slice(0,10).replace(/-/g, ''))


//Date.prototype.toLocaleString
//인수로 전달한 로케일을 기준으로 Date객체의 날짜와 시간을 표현한 문자열을 반환한다. 
//인수가 생략되면 브라우저를 참조한다.
console.log(`kr : ${today.toLocaleString('ko-KR')}`)
console.log(`us : ${today.toLocaleString('en-US')}`)
console.log(`jp : ${today.toLocaleString('ja-JP')}`)



//Date.prototype.toLocaleTimeString
//로케일을 기준으로 시간을 반환
console.log(`kr : ${today.toLocaleTimeString('ko-KR')}`)
console.log(`us : ${today.toLocaleTimeString('en-US')}`)
console.log(`jp : ${today.toLocaleTimeString('ja-JP')}`)


function printNow() {
	const today = new Date();
	const dayNames = [
		'(일요일)',
		'(월요일)',
		'(화요일)',
		'(수요일)',
		'(목요일)',
		'(금요일)',
		'(토요일)',
	]

	const day = dayNames[today.getDay()];
	const year = today.getFullYear();
	const month = today.getMonth()+1;
	const date = today.getDate();
	let hour = today.getHours();
	let minute = today.getMinutes();
	let second = today.getSeconds();
	const ampm = hour >= 12? 'PM' : 'AM';

	hour %= 12;
	hour = hour || 12;

	minute = minute <10 ? '0'+minute : minute
	second = second <10 ? '0'+second : second

	const now = `${year}년 ${month}월 ${date}일 ${day}  ${hour}:${minute}:${second} ${ampm}`
	console.log(now);

	setTimeout(printNow,1000)
}
printNow();