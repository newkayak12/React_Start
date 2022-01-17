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
const $elem = document.querySelector('#1');
// DOMException : Failed to execute 'querySelector' on 'Document' : '#1' is not a valid selector
/**
 * 하지만 querySelector 메소드는 인수로 전달한 CSS  선택자 문자열로 DOM에서 요소 노드를 찾을 수 없는 경우 에러를 발생시키지 않고 null을 반환한다.
 * 이때 if문으로 querySelector 메쇼ㅗ드의 반환값을 확인하거나 단축 평가 또는 옵셔널 체이닝 연산자 ?.를 사용하지 않으면 다음 처리에서 에러로 이어질 가능성이 크다.
 *
 * DOM에 button 요소 존재하는 경우 querySelector 메소드는 에러를 발생시키지 않고 null을 반환한다.
 */
const $btn = document.querySelector("button"); // null
$btn?.classList.add('disabled')
/**
 * 이처럼 에러나 예외적인 상황에 대응하지 않으면 프로그램은 강제 종료될 것이다. 에러나 예외적인 상황은 너무나 다양하기 때문에 아무런 조치 없이 프로그램이 강제 종료된다면 원인을 파악하여 대응하기 어렵다.
 * 에러가 발생하지 않는 코드를 작성하는 것이 이상적이지만 안타깝게도 그것은 불가능하다. 따라서 우리가 작성한 코드에서는 언제나 에러나 예외적인 상황이 발생할 수 있다는 것을 전제하고 이에 대응하는 코드를 작성하는 것이 중요하다.
 *
 */