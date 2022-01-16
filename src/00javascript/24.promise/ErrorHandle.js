//에러 처리의 필요성
/**
 *  Error가 발생하지 않는 코드를 작성하는 것은 불가능하다. 따라서 에러는 언제나 발생할 수 있다. 발생한 에러에 대해 대처하지 않고 방치하면 프로그램은 강제 종료된다.
 */
// console.log('[Start]');
// foo(); // ReferenceError : foo is not defined
// 발생한 에러를 방치하면 프로그램은 강제 종료된다.
// 에러에 의해 프로그램이 강제 종료되어 아래 코드는 실행되지 않는다.
// console.log('[End]');

// try...catch 문으로 에러에 적절히 대응하면 프로그램이 강제 종료되지 않고 계속해서 코드를 실행시킬 수 있다.
console.log('[start]')
try{
    foo();
}catch(error){
    console.error('[ERROR!]', error)
    //에러 발생
}
//발생한 에러에 적절한 대으을 하면 프로그램이 강제 종료되지 않는다.
console.log('[End]')

//직접적으로 에러를 발생하지는 않는 예외적인 상황이 발생할 수도 있다. 예ㅚ적인 상황에 적절하지 대응하지 않으면 에러로 이어질 가능성이 크다.


//DOM에 button 요소가 존재하지 않으면 querySelector는 에러를 발생시키지 않고 null을 반환한다.
const $btn = document.querySelector('button')

// $btn.classList.add('disabled')
//TypeError ....

//위 예제의 querySelector 메소드는 인수로 전달한 문자열이 CSS 선택자 문법에 맞지 않는 경우 에러를 발생시킨다.  