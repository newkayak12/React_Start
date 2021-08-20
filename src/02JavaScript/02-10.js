//비동기 처리
function work1(onDone) {
  setTimeout(() => onDone('작업1 완료'), 100);
}

function work2(onDone) {
  setTimeout(() => onDone('작업2 완료'), 200);
}

function work3(onDone) {
  setTimeout(() => onDone('작업3 완료'), 300);
}

function urgentWork() {
  console.log('긴급 작업');
}

console.log('\n\n=== 비동기 처리 ===');
work1(function (msg1) {
  console.log('done after 100ms : ' + msg1);

  work2(function (msg2) {
    console.log('done after 200ms : ' + msg2);

    work3(function (msg3) {
      console.log('done after 300ms : ' + msg3);
    });
  });
});
urgentWork();

//callback이 계단 모양으로 구성되어있다. 만약 callback이 100개라면 100개의 함수가 계단 형태로 구성될 것이다.
//promise객체로 ...

//개선

const worker1 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업 1 완료!'), 100);
  });

const worker2 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업 2 완료!'), 200);
  });

const worker3 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업 3 완료!'), 300);
  });

function urgentWorker() {
  console.log('긴급 작업');
}

const nextWorkOnDone = (msg1) => {
  console.log('done after 100ms : ' + msg1);
  return worker2();
};

setTimeout(() => {
  console.log('\n\n === 개선 === ');
  worker1()
    .then(nextWorkOnDone)
    .then((msg2) => {
      console.log('done after 200ms : ' + msg2);

      return worker3();
    })
    .then((msg3) => {
      console.log('done after 600ms : ' + msg3);
    });

  urgentWorker();
}, 1000);
