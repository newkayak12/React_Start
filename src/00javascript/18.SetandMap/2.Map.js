//Map 객체의 생성
/**
 * Map 객체는 키와 값으로 이루어진 컬렉션이다.
 * Map 객체는 객체와 유사하지만 아래와 같은 차이점이 존재한다.
 * 
 *        구분                 객체             Map
 * 키로 사용할 수 있는 값     문자열 또는 심벌    객체르 포함한 모든값
 *      이터러블                X                O
 *  요소 개수 확인   Object.keys(obj).length    map.size
 */


// Map 객체의 생성
//Map 객체는 Map 생성자 함수로 생성한다. Map 생성자 함수에 인수를 전달하지 않으면 빈 Map 객체가 생성된다.

let map = new Map();
console.log(map); //Map(0) {}

// Map 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성한다. 이떄 인수로 전달되는
// 이터러블은 키와 값의 쌍으로 이루어진 요소로 구성되어야 한다. 

map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map) //Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// map = new Map([1,2]); //typeError : Iterator value 1 is not an entry object

/**
 * Map 생성자 함수의 인수로 전달한 이터러블에 중복된 키를 갖는 요소가 존재하면 값이 덮어써진다.
 * 따라서 Map 객체에는 중복된 키를 갖는 요소가 존재할 수 없다. 
 */

map = new Map([['key1', 'value1'], ['key1', 'value2']]);
console.log(map) //Map(1) { 'key1' => 'value2' }



// 요소 개수 확인
/**
 * Map 객체의 요소 개수를 확인할 때는 Map.prototype.size 프로퍼티를 사용한다.
 */
 let {size} = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(size)
//size 프로퍼티는 setter 함수 없이 getter 함수만 존재하는 접근자 프로퍼티이다.
//따라서 size 프로퍼티에 숫자를 할당하여 Map 객체의 요소 개수를 변경할 수 없다. 

map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(Object.getOwnPropertyDescriptors(Map.prototype, 'size'));
map.size = 10; //무시된다.
console.log(map.size)
/*
    {
        constructor: {
            value: [Function: Map],
            writable: true,
            enumerable: false,
            configurable: true
        },
        get: {
            value: [Function: get],
            writable: true,
            enumerable: false,
            configurable: true
        },
        set: {
            value: [Function: set],
            writable: true,
            enumerable: false,
            configurable: true
        },
        has: {
            value: [Function: has],
            writable: true,
            enumerable: false,
            configurable: true
        },
        delete: {
            value: [Function: delete],
            writable: true,
            enumerable: false,
            configurable: true
        },
        clear: {
            value: [Function: clear],
            writable: true,
            enumerable: false,
            configurable: true
        },
        entries: {
            value: [Function: entries],
            writable: true,
            enumerable: false,
            configurable: true
        },
        forEach: {
            value: [Function: forEach],
            writable: true,
            enumerable: false,
            configurable: true
        },
        keys: {
            value: [Function: keys],
            writable: true,
            enumerable: false,
            configurable: true
        },
        size: {
            get: [Function: get size],
            set: undefined,
            enumerable: false,
            configurable: true
        },
        values: {
            value: [Function: values],
            writable: true,
            enumerable: false,
            configurable: true
        },
        [Symbol(Symbol.toStringTag)]: {
            value: 'Map',
            writable: false,
            enumerable: false,
            configurable: true
        },
        [Symbol(Symbol.iterator)]: {
            value: [Function: entries],
            writable: true,
            enumerable: false,
            configurable: true
        }
    }
*/


//요소 추가
//Map 객체에 요소를 추가할 떄는 Map.prototype.set 메소드를 사용한다. 
map = new Map();
console.log(map)

map.set('key1', 'value1');
console.log(map) //Map(1) { 'key1' => 'value1' }

// Set 메소드는 새로운 요소가 추가된 Map 객체를 반환한다. 따라서 Set 메소드를 호출한 후에 Set 메소드를 연속적으로 호출할 수 있다. 

map.set('key2','value2').set('key3','value3');
console.log(map)

// Map 객체에는 중복된 키를 갖는 요소가 존재할 수 없기 때문에 중복된 키를 갖는 요소를 추가하면
//값이 덮어써진다. 에러는 없다.
map = new Map();
map.set('key1', 'value1').set('key1', 'value2');
console.log(map)

//일치 비교 연산자 ===은 사용하면 NaN과 NaN을 다르다고 평가한다. 
// 하지만 Map 객체는 NaN과 NaN을 갘다고 평가하여 중복 추가를 허용하지 않는다.
// +0, -0은 일치 비교 연산자 ===와 마찬가지로 같다고 평가하여 중복 추가를 허용하지 않는다. 

map = new Map();
console.log(NaN === NaN)//false
console.log(+0 === -0) //true

//NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다. 
map.set(NaN, 'value1').set(NaN, 'value2');
console.log(map);

// +0, -0을 같다고 평가하여 중복 추가를 허용하지 않는다.
map.set(+0, 'value1').set(-0, 'value2');
console.log(map)

//객체는 문자열 또는 심벌 값만 키로 사용할 수 있다. 하지만, Map 객체는 키 타입에 제한이 없다.
//따라서 객체를 포함한 모든 값을 키로 사용할 수 있다. 이는 Map객체와 일반 객체의 가장 두드러지는 차이점이 있다. 

map = new Map();
let lee = {name : 'lee'};
let kim = {name : 'kim'};

map.set(lee, 'developer').set(kim, 'publisher');
console.log(map)



// 요소 취득
//Map객체에서 특정 요소를 취득하려면 Map.prototype.get 메소드를 사용한다.
// get 메소드의 인수로 키를 전달하면 Map객체에서 인수로 전달한 키를 갖는 값을 반환한다.
//Map 객체에서 인수로 전달한 키를 갖는 요소가 존재하지 않으면 undefined를 반환한다.
console.log(map.get(lee));
console.log(map.get('key')) // undefined

//요소 존재 여부 확인
// Map객체에 특정요소가 존재하는지 확인하려면 Map.prototype.has 메소드를 사용한다.
//has 메소드는 특정 요소의 존재 여부를 나타내는 boolean 값을 반환한다. 
console.log(map.has(lee)); //true
console.log(map.has('key'))//false

//요소 삭제
// Map 객체의 요소를 삭제하려면 Map.prototype.delete메소드를 사용한다.
//delete 메소드는 삭제 성공 여부를 나타내는 boolean 값을 반환한다. 
map.delete(kim)
console.log(map) //Map(1) { { name: 'lee' } => 'developer' }

//delete 메소드는 삭제 성공 여부를 나타내는 boolean 값을 반환한다. 따라서 set메소드와 달리
//연속적으로 호출할 수 없다. 
map.set(lee, 'developer').set(kim, 'publisher');
console.log(map.set(lee))

map.set(lee, 'developer').set(kim, 'publisher');
// map.delete(lee).delete(kim) // TypeError: map.delete(...).delete is not a function 


//요소 일괄 삭제
//Map 객체의 요소를 일괄 삭제하려면 Map.prototype.clear 메소들르 사용한다. clear 메소드는 언제나 undefined를 반환한다.
map = new Map();
map.set(lee, 'developer').set(kim, 'publisher');
map.clear()
console.log(map)


//요소 순회
//Map객체의 요소를 순회하려면 Map.prototype.forEach 메소드를 사용한다.
//Map.prototype.forEach 메소드는 Array.prorotype.forEach메소드와 유사하게 콜백 함수와
//forEach메소드의 콜백 함수 내부에서 this로 사용될 객체(옵션)을 인수로 전달한다.
//이때 콜백 함수는 다음과 같이 3개의 인수를 전달받는다.

/**
 *  첫 번쨰 인수 : 현재 순회 중인 요소 값
 *  두 번째 인수 : 현재 순회 중인 요소 키
 *  세 번째 인수 : 현재 순회 중인 Map 객체 자체
 */

map = new Map();
map.set(lee, 'developer').set(kim, 'publisher');

map.forEach((v, k, map)=> console.log(v,k,map));
/*
    developer { name: 'lee' } Map(2) {
        { name: 'lee' } => 'developer',
        { name: 'kim' } => 'publisher'
    }

    publisher { name: 'kim' } Map(2) {
        { name: 'lee' } => 'developer',
        { name: 'kim' } => 'publisher'
    }
*/
//Map객체는 이터러블이다. 따라서 for...of 문으로 순회할 수 있으며, 스프레드 문법과 배열 디스트럭처링 할당의 대상이 될 수도 있다.

//Map 객체는 Map.prototype의 Symbol.iterator 메소드를 상속받는 이터러블이다. 
console.log(Symbol.iterator in map) // true

//이터러블인 Map객체는 for...of 문으로 순위할 수 있다.
for( const entry of map ){
    console.log(entry)
}

//이터러블인 Map 객체는 스프레드 문법의 대상이 될 수 있다.
console.log([...map]);
//[ [ { name: 'lee' }, 'developer' ], [ { name: 'kim' }, 'publisher' ] ]

//이터러블인 Map 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다.
const [a,b] = map;
console.log(a,b)

//Map 객체는 이터러블이면서 동시에 이터레이터인 객체를 반환하는 메소드를 제공한다. 


/**
 *      Map 메소드                                  설명
 * Map.prototype.keys       Map객체에서 요소키를 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환한다.
 * Map.prototype.values     Map객체에서 요소키를 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환한다.
 * Map.prototype.entries    Map 객체에서 요소키와 요소 값을 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환한다. 
 */



 map = new Map();
 map.set(lee, 'developer').set(kim, 'publisher');

 //Map.prototype.keys는 Map 객체에서 요소키를 값으로 갖는 이터레이터를 반환한다.
 for(const key of map.keys()){
     console.log(key)
 }

 //Map.prototype.values는 Map 객체에서 요소값을 값으로 갖는 이터레이터를 반환한다.
 for(const value of map.values()){
     console.log(value)
 }

 //Map.prototype.entries는 Map 객체에서 요소키와 요소 값을 값으로 갖는 이터레이터를 반환한다.
 for(const entry of map.entries()){
     console.log(entry)
 }

 //Map객체는 요소의 순서에 의미를 갖지는 않지만 Map객체를 순회하는 순서는 요소가 추가된 순서를 따른다. 
//  이는 다른 이터러블의 순회와 호환성을 유지하기 위함이다.