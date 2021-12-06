//Math 프로퍼티


//Math.PI
// 원주율
console.log(Math.PI);

//Math.abs
// 인수로 전달된 숫자의 절대값을 반환한다.
// 절대값은 반드시 0 또는 양수이어야 한다.
console.log(Math.abs(-123));
console.log(Math.abs(0))
//NaN
console.log(Math.abs(undefined))
console.log(Math.abs({}))
console.log(Math.abs('string'))

//Math.round
//Math.round 메소드는 인수로 전달된 숫자의 소수점 이하를 반올림한 정수를 반환한다.
console.log(Math.round(1.4)); //1
console.log(Math.round(-1.6)); //-2
console.log(Math.round()); //NaN

//Math.ceil
//Math.ceil은 인수의 소수점 이하를 올림한 정수를 반환한다.
console.log(Math.ceil(1.4)); //2
console.log(Math.ceil(-1.6)); //-1
console.log(Math.ceil()); //NaN

//Math.floor
//Math.floor은 인수의 소수점 이하를 내림한 정수를 반환한다.
console.log(Math.floor(1.9)); //1
console.log(Math.floor(-1.9)); //-2
console.log(Math.floor()); //NaN


//Math.sqrt
//전달된 인수의 제곱근을 반환한다.₩
console.log(Math.sqrt(9)); //3
console.log(Math.sqrt(-9)); //NaN
console.log(Math.sqrt(0)); //0
console.log(Math.sqrt(1)); //1
console.log(Math.sqrt(2)); //1.4142135623730951
console.log(Math.sqrt()); //NaN


//Math.random
// 임의의 난수를 반환한다. 난수는 0에서 1미만의 실수이다. 0은 포함되지만 1은 포함되지 않는다. (0 <= x < 1)
const random = Math.floor( (Math.random() * 10 ) +1 );
console.log(random)


//Math.pow
//Math.pow 메소드는 첫번째 인수를 base로 두 번째 인수를 exponent로 거듭제곱한 결과를 반환한다.
console.log(Math.pow(2,8)); //256
console.log(Math.pow(2)); //NaN
console.log(Math.pow(2,-1)); //0.5


//Math.max
//전달받은 인수 중에서 가장 큰 수를 반환한다. 인수가 전달되지 않으면 -Infinity를 반환한다.
console.log(Math.max(1,2,3,4)); //4
console.log(Math.max()); //-Infinity
// 배열을 인수로 전달받아 배열의 요소 중에서 최대값을 구하려면 Function.prototype.apply 메소드 또는 스프레드 문법을 사용해야한다.
console.log(Math.max.apply(null, [1,2,3,4])); // 4
//ES6스프레드
console.log(Math.max(...[1,2,3])); //3



//Math.min
//전달받은 인수 중에서 가장 작은 수를 반환한다. 인수가 전달되지 않으면 Infinity를 반환한다.
console.log(Math.min(1));
console.log(Math.min(1,2));
console.log(Math.min(1,2,3,4));
console.log(Math.min()); //Infinity

// 배열을 인수로 전달받아 배열의 요소 중에서 최대값을 구하려면 Function.prototype.apply 메소드 또는 스프레드 문법을 사용해야한다.
console.log(Math.min.apply(null, [1,2,3,4])); // 4
//ES6스프레드
console.log(Math.min(...[1,2,3])); //3
