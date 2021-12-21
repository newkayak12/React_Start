let user = {firstName : 'yj', lastName:'kim'};
/**
 * 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다.
 * 프로퍼티 키가 lastName인 프로퍼티 값을 ln을 할당하고,
 * 프로퍼티 키가 firstName인 프로퍼티 값을 fn에 할당한다.
 */
let {lastName: ln1, firstName:fn1} = user;
console.log(fn1, ln1);

//객체 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다.

let {firstName = 'Ungmo', lastName} = {lastName : 'lee'};
console.log(firstName, lastName)

let {firstName : fn2 = 'Ungmo', lastName : ln2} = {lastName: 'lee'};
console.log(fn2, ln2);


/*
  객체 디스트럭처링 할당은 객체ㅔㅇ서 프로퍼티 키로 필요한 프로퍼티 값만 추룰하여 변수에 할당하고 싶을 떄 유용하다.
 */

  let str = 'Hello';
  //String 래퍼 객체로부터 length 프로퍼티만 추출한다.

  const{ length } = str;
  console.log(length) //5

  let todo = {id:1, content:'HTML', completed:true};
  let {id} = todo;
  console.log(id);

  //객체 디스트럭처링 할당은 객체를 인수로 전달받는 함수의 매개변수에도 사용할 수 있다. 
  function printTodo(todo){
      console.log(`할일 ${todo.content}은 ${todo.completed ? '완료': '비완료'} 상태입니다.`);
  }

  printTodo({id:1, content: "HTML", completed:true})


  //위 예제에서 객체를 인수로 전달받은 매개변수 todo에 객체 디스트럭처링 할당을 사용하면 좀 더 간단하고 가독성 좋게 표현할 수 있다.
  function printTodo2({content, completed}){
      console.log(`할일 ${content}은 ${completed? '완료':'비완료'}상태입니다.`);
  }

  printTodo2({id:1, content: "HTML", completed:true})

  //배열의 요소가 객체인 경우 배열 디스트럭처링 할당과 객체 디스트럭처링 할당을 혼용할 수 있다.

  let todos = [
      {idx:1, content:"HTML", completed:true},
      {idx:2, content:"CSS", completed:false},
      {idx:3, content:"JS", completed:false},
  ]

  //todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출한다.
   let [, {idx}] = todos
  console.log(idx) //2
  
  
  //중첩 객체의 경우는 아래와 같이 사용한다.
  let users = {
      name:'lee',
      address:{
          zipcode:'03068',
          city:'Seoul'
      }
  }
  //Address 프로퍼티 키로 객체를 추출하고 이 객체의 city프로퍼티 키로 값을 추출한다.
  let { address :{city}} = users;
  console.log(city) //'Seoul'

  /**
   * 객체 디스트럭처링 할당을 위한 변수에 Rest 파라미터나 Rest요소와 유사하게 Rest * * 프로퍼티 ... 을 사용할 수 있다.
   * Rest프로퍼티는 Rest 파라미터나 Rest 요소와 마찬가지로 반드시 마지막에 * * *
   * 위치해야한다. 
   * 
   */

    let { x, ...rest} = {x:1, y:2, z:3}
    console.log(x, rest);

    