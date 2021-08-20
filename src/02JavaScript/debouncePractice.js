//디바운스 : 지연처리, 어떤 내용을 입력하다가 특정 시간 동안 대기하고 있으면 마지막에 입력된 내용을 바탕으로 서버에 요청을 하는 방법
// eg) 검색창

function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }

    inDebounce = setTimeout(() => func(...args), delay);
  };
}

const run = debounce((val) => console.log(val), 100);
// run에 debounce 함수를 받음
// func >> (val) => console.log(val),
// delay >> 10
// delay걸리고, 그러면 inDebounce가 그대로 걸려 있음
// 그래서 있으면 함수 취소 그리고 inDebounce에 다시 걸고
// 이런 식으로 딜레이를 주면 맨 마지막이 실행되는 구조
// delay 내에 run을 실행하지 않으면 console.log()가 실행됨

/* 
	if(inDebounce)가 undefined이면 false 그래서 inDebnounce가 setTimeaout > 
*/

run('a');
run('ab');
run('abc');
