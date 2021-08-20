console.log('가변 변수');
let num = 1;
console.log(`num : ${num}`);

num = num * 3;
console.log(`num=num*3 : ${num}`);

let str = '문자';
console.log(`\n문자 : ${str}`);

str = '다른 문자';
console.log(`문자 : ${str}`);

let arr = [];
console.log(`arr : ${arr}`);

arr = [1, 2, 3];
console.log(`arr : ${arr}`);

let obj = {};
console.log(`obj(empty) : ${obj}`);
for (v in obj) {
  console.log(`${v} : ${obj[v]}`);
}
console.log(`[]`);

obj = { name: '새 객체' };
console.log(`obj : ${obj}`);
for (v in obj) {
  console.log(`${v} : ${obj[v]}`);
}

//불변 변수를 내장 함수로 조작
console.log('\n======== ES6 ========');

const arr2 = [];
arr2.push(1);
console.log(`arr2 : ${arr2}`);

arr2.splice(0, 0, 0, 2, 3, 4);
console.log(`arr2 : ${arr2}`);

let temp = arr2.pop();
console.log(`arr2.pop() : ${temp}`);

const obj2 = {};

obj2['name'] = '내이름';
console.log(`obj2['name'] : ${obj2['name']}`);

Object.assign(obj2, { name: '새이름' });
console.log(`obj2['name'] _ assign: ${obj2['name']}`);

delete obj2.name;
console.log(`obj2['name'] _ del : ${obj2['name']}`);

/* 
	slice : slice(Start[,end])
		start : 추출 시작점에 대한 인덱스
			 undefined인 경우 0부터 slice
			 음수를 지정하면 배열의 끝에서부터 길이를 나타낸다.
			 배열의 길이와 같거나 큰 수를 지정한 경우 : 빈 배열을 반환
		end : 추출을 종료할 기준 인덱스 
			지정하지 않을 경우 배열의 끝까지 slice
			음수를 지정하면 배열의 끝에서부터 길이를 나타낸다.
	
	splice(start[,deleteCount[,item1[,tiem2[, ...]]])
		start : 배열을 변경할 시작할 인덱스
			음수를 지정하면 배열의 끝에서부터 요소를 샌다.
			배열의 길이보다 큰 수를 지정하면 실제 시작인덱스는 배을의 길이로 선정
			절대값이 배열의 길이보다 크면 0으로 세팅

		deleteCount : 배열에서 제거할 요소의 수
			생력/ 값이 array.length - start보다 큰 경우  start부터 모든 요소를 제거
			0이하의 수 : 어떠한 요소도 제거되지 않음

*/

// const로 진행
console.log('\nconst로 진행');
const num1 = 1;
console.log(`num1 : ${num1}`);

const num2 = num1 * 3;
console.log(`num2 : ${num2}`);

const str1 = '문자';
console.log(`str1 : ${str1}`);

const str2 = str1 + ' 추가';
console.log(`str2 : ${str2}`);

const arr3 = [];
console.log(`arr3 : ${arr3}`);

const arr4 = arr3.concat(1);
console.log(`arr4 : ${arr4}`);

const arr5 = [...arr4, 2, 3];
console.log(`arr5 : ${arr5}`);

const arr6 = arr5.slice(0, 1);
console.log(`arr6 : ${arr6}`);

const [first, ...arr7] = arr5;
console.log(`[first, ...arr7] : ${arr5}`);

const obj3 = { name: '내이름', age: 20 };
console.log('\nobj3');
for (v in obj3) {
  console.log(`${v} : ${obj3[v]}`);
}

const objValue = { name: '새 이름', age: obj3.age };
console.log('\nobjValue');
for (v in objValue) {
  console.log(`${v} : ${objValue[v]}`);
}

const obj4 = { ...obj3, name: '새이름' };
console.log('\nobj4');
for (v in obj4) {
  console.log(`${v} : ${obj4[v]}`);
}

const { name, ...obj5 } = obj4;
console.log('\n{name, ...obj5} = obj4');
for (v in obj4) {
  console.log(`${v} : ${obj4[v]}`);
}

/* 
	배열에 새로운 값을 추가할 때는 push() 대신 concat()함수를, 
	삭제할 떄는 pop(), shift() 대신 slice(),concat() 하뭇에 전개 연산자를 사용하면
	새 값을 할당하는 것이 아니라 기존의 값을 추출하여 새 불변 변수에 할당하는 방식이다. 


	1. 가변 내장함수 :  push(...items), splice(s,c,...items), pop(), shift()
	2. 무결설 내장함수 : concat(...items), slice(0,s)||concat(...itmes, slice(s+c)), slice(0,len-1), slice(1)

	-- 무결성 제약 규칙을 지켜주는 것이 좋다. 
*/
