let sq = '?banana=10&apple=20&orange=30';

console.log('\n\n쿼리스트링 파싱');
function parse(qs) {
  var queryString = qs.substr(1);
  var chunks = queryString.split('&');
  var result = {};

  for (let i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    var value = parts[1];

    result[key] = value;
  }

  return result;
}

let result = parse(sq);
for (v in result) {
  console.log(`${v} : ${result[v]}`);
}
console.log(result);

console.log('\n\n 자료형 보존');
//자료형 보존
function parse2(qs) {
  var queryString = qs.substr(1);

  var chunks = queryString.split('&');
  var result = {};

  for (let i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);

    result[key] = value;
  }

  return result;
}

let result2 = parse2(sq);
for (v in result2) {
  console.log(`${v} : ${result2[v]}`);
}
console.log(result2);

//ES6 forEach
function parse3(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  let result = {};
  chunks.forEach((chunk) => {
    const [key, value] = chunk.split('=');
    result[key] = value;
  });
  return result;
}

console.log('\n\n forEach 이용');
let result3 = parse3(sq);
for (v in result3) {
  console.log(`${v} : ${result3[v]}`);
}
console.log(result3);

//ES6 Map
function parse4(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');

  const result = chunks.map((chunk) => {
    const [key, value] = chunk.split('=');
    return { key: key, value: value };
  });

  return result;
}

console.log('\n\n Map 이용');
let result4 = parse4(sq);
console.log(result4);
//결과 값을 바로 반환하여 가변 변수를 사용하지 않아도 된다.

//ES6 reduce
function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(`\n\n reduce 기초 이용`);
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// reduce로 배열의 총합을 구하는데 쓰고 있기는 하지만, reduce()를 통해서 보통 배열을 특정 자료형으로 변환하는데 사용할 수도 있다.   >> 즉 위의 예제는 배열을 숫자로 변환한 예제로 생각하여야한다.

function parse5(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split('=');
      return { key, value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}

console.log('\n\n map-reduce 이용');
let result5 = parse5(sq);
for (v in result5) {
  console.log(`${v} : ${result5[v]}`);
}
console.log(result5);
