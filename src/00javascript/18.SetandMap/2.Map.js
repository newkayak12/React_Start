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