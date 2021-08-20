//Throttle은 디바운 개념과 비슷하지만 '입력되는 동안에도 바로 이전에 요청한 작업을 주기적으로 실행한다는 점'이 다르다.
// 예를 들어 무한 스크롤이 디바운스로 구성되어 있으면 스크롤링이 멈추지 않는 한 다음 타임 로딩은 발생하지 않는다.
// 스크롤을 움직이면 여러 번의 서버 요청이 발생한다. 스로틀의 경우는 이 여러 번의 중복 요청을 무시하고 첫 번째 요청을 지연 실행하여 중복 요청을 생략한다.

function throttle(func, delay) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.call(context, ...args);
      lastRan = Date.now();
      //       처음 실행하면 날짜 찍음
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      // 만약 이전에 호출하면 clearTimeout으로 지우고
      // 새로 설정
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= delay) {
          // 빠른 시간 내에서 중복 호출하면 무시하도록
          func.call(context, ...args);
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
}

var checkPosition = () => {
  const offset = 500;
  const currentScrollPosition = window.pageYOffset;
  //   현재 스크롤 상태 == 페이지에 의해서 가려진 위쪽 영역 높이
  const pageBottomPosition = document.body.offsetHeight - window.innerHeight - offset;
  //   Body의 높이에서 브라우저 높이 뺴고, 내가 미리 부르고 싶은 픽셀 위치를 뺸다.
  if (currentScrollPosition >= pageBottomPosition) {
    //fetch!
    //     만약
    console.log('다음 페이지 로딩');
  }
};

var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);

// 그냥 스로틀링을 구현하기 위한 예시코드인 것 같고 실제로 사용하려면 보완이 필요해보임
