//프로미스의 에러 처리
/**
 * 콜백 패턴은 에러 처리가 곤란하다는 문제가 있다. 프로미스는 에러를 문제없이 처리할 수 있다. 
 */ 
 
 const promisedGet2( url ) => {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send()

        xhr.onload = () =>{
            if(xhr.status === 200){
                //성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
                resolve(JSON.parse(xhr.response))
            } else {
                //에러 처리를 위해 reject 함수를 호출한다.
                reject(new Error(xhr.status))
            }
        }
    })
}

//promiseGet 함수는 프로미스를 반환한다.
promisedGet2('https://jsonplaceholder.typicode.com/posts/1')
.then(res=> console.log(res))
.catch(err=>console.error(err))
.finally(()=> console.log('bye!')); 
/*  
 * 위의 예제의 비동기 함수 get은 프로미스를 반환한다. 비동기 처리 결과에 대한 후속 처리는 프로미스가 제공하는 후속 처리 메소드 the, catch, finally를 사용하여 수행한다. 비동기 처리에서 발생한 에러는 then 메소드의 두 번쨰 콜백 함수로 처리할 수 있다. 
 */


const wrongURL = 'https//jsonplaceholder.typicode.com/xxx/1'

promisedGet2(wrongURL)
.then(res=>{console.log(res)}, err=>{console.error(err)}) //(첫 번쨰 콜백에서 발생한 에러를 잡지 못한다.)
//비동기 처리에서 발생한 에러는 프로미스의 후속 처리 메소드 catch를 사용해 처리할 수도 있다.

promisedGet2(wrongURL)
.then(res=>{console.log(res)})
.catch(err=>{console.error(err)})

//catch를 호출하면 then(undefined, onRejected)를 호출한다. 따라서 위 예제는 내부적으로 다음과 같이 처리된다.

promisedGet2(wrongURL)
.then(res=>{console.log(res)})
.then(err=>{console.error(err)})

// 단 then 메소드의 두 번쨰 콜백 함수는 첫 번쨰 함수에서 발생하는 에러를 캐치하지 못하고 코드가 복잡해진다.


//즉, catch를 모든 then메소드를 호출한 이후에 호출하면 비동기 처리에서 발생한 에러(reject 상태) 뿐만 아니라 then 내부에서 발생한 에러까지 모두 캐치할 수 있다.
//또한 then 메소드에 두 번쨰 콜백 함수를 전달하는 것보다 가독성이 좋고 명확하다. 따라서 에러 처리는 catch에서 하는 것이 낫다.

