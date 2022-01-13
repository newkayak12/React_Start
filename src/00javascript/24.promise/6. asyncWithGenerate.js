//비동기 처리
/**
 * 제너레이터 함수는 next 메소드와 yield 표현식을 통해 함수 호출자와 함수의 상태를 주고받을 수 있다. 이러한 특성을 활용하면 프로미스를 사용한 비동기 처리를 동기 처리처럼 구현할 수 있다.
 * 다시 말해, 프로미스의 후속 처리 메소드 then/catch/finally 없이 비동기 처리 결과를 반환하도록 구현할 수 있다.
 */
const fetch = require('node-fetch')
//제너레이터 실행기
const async = generatorFunc => {
    const generator = generatorFunc()  //2

    const onResolved = arg =>{
        const result = generator.next(arg) //5

        return result.done? result.value//9
            : result.value.then(res=>onResolved(res))//7
    }
    return onResolved //3
}

(async(function*fetchTodo(){ //1
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const response = yield fetch(url); //6
    const todo = yield response.json() //8
    console.log(todo)
})())//4
/**
 * 1. async 함수가 호출(1)되면 인수로 전달받은 제너레이터 함수 fetchTodo호출하여 제너레이터 객체를 생성(2)하고 onResolved 함수를 반환(3)한다. onResolved 함수는 상위 스코프의 generator 변수를 기억하는 클로저이다.
 *  async 함수가 반환한 onResolved함수를 즉시 호출(4)하여 (2)에서 생성한 제너레이터 객체의 next 메소들를 처음 호출(5)한다.
 *
 * 2. next 메소드가 처음 호출(5)되면 제너레이터 함수 fetchTodo의 첫 번쨰 yield문(6)까지 실행된다. 이때 next메소드가 반환한 이터레이터 result 객체의 done 프로퍼티 값이 false, 즉 아직 제너레이터 함수가 끝까지
 *  실행되지 않았다면 이터레이터 result 객체의 value 프로퍼티 값, 즉 첫 번쨰 yield된 fetch 함수가 반환한 프로미스가 resolve한 Response 객체를 onResolved 함수에 인수로 전달하면서 재귀 호출(7)한다.
 *
 * 3. onResolved 함수에 인수로 전달된 Response 객체를 next 메소드에 인수로 전달하면서 next메소드를 두 번쨰로 호출(5) 한다. 이떄 next 메소드에 인수로 전달한 Response 객체는 제너레이터 함수 fetchTodo의 Response 변수(6)
 *  에 할당되고 제너레이터 함수 fetchTodo의 두 번쨰 yield 문(8)까지 실행된다.
 *
 * 4. next메소드가 반환한 이터레이터 result 객체의 done 프로퍼티 값이 false, 즉 아직 제너레이터 함수 fetchTodo가 끝가지 실행되지 않았다면 이터레이터 result 객체의 value 프로퍼티 값, 즉 두 번째 yield된  response.json
 *  메소드가 반환한 프로미스가 resolve한 todo객체를 onResolved 함수에 인수로 전달하면서 재귀호출(7)한다.
 *
 * 5. onResolved 함수에 인수로 전달된 todo객체를 next메소드에 인수로 전달하면 next메소드를 세 번째로 호출(5)한다. 이때 next 메소드에 인수로 전달한 todo객체는 제너레이터 함수 fetchTodo의 todo변수(8)에 할당되고
 *  제너레이터 함수 fetchTodo가 끝까지 실행된다.
 *
 * 6. next 메소드가 반환한 이터레이터 result 객체의 done 프로퍼티 값이 true, 즉 제너레이터 함수 fetchTodo 끝까지 실행되었다면 이터레이터 result 객체의 value 프로퍼티 값, 즉 제너레이터 함수 fetchTodo의 반환 값인
 *  undefined를 그대로 반환(9)하고 처리를 종료한다.
 *
 *  async/await을 사용하면 async 함수와 같은 제너레이터 실행기를 사용할 필요가 없지만 혹시 제너레이터 실행기가 필요하면 co라이브러리를 사용하는 것이 좋다.
 */