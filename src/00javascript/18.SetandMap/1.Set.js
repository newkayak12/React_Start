//Set
/**
 * Set 객체는 중복되지 않는 유일한 값들의 집합이다.
 * Set객체는 배열과 유사하지만 아래와 같은 차이가 있다.
 * 
 * --------------------------------------------------
 *            구분                      배열        Set
 * 동일 한 값을 중복하여 포함할 수 있다.        O          X
 *      요소 순수에 의미가 있다.             O          X
 *  인덱스로 요소에 접근할 수 있다.            O          X
 * ---------------------------------------------------
 * 
 * 
 * 이와 같은 Set객체의 특성은 수학적 집합의 특성과 일치한다. 
 * Set은 수학적 집합을 구현하기 위한 자료구조이다.
 * 따라서 Set을 통해 교집합, 합집합, 차집합, 여집합 등을 구현할 수 있다.
 * 
 */

//Set의 생성
/**
 * set 객체는 set생성자 함수로 생성한다. Set생성자 함수에 인수를 전달하지 않으면 빈 set객체가 생성된다. 
 */
    let set = new Set();
    console.log(set) //Set(0) {}

// Set 생성자 함수는 이터러블을 인수로 전달받아 Set객체를 생성한다. 이떄 이터러블의 중복된 값은 set객체에 요소로 저장되지 않는다. 

      let set1 = new Set([1,2,3,3]);
      console.log(set1) //Set(3) { 1, 2, 3 }

      let set2 = new Set('hello');
      console.log(set2) //Set(4) { 'h', 'e', 'l', 'o' }

//  중복을 허용하지 않는 set 객체의 특성을 활용하여 배열에서 중복된 요소를 제거할 수 있다.

      let unique = array => array.filter((v,i,self)=> self.indexOf(v)===i)
      console.log(unique([2,1,2,3,4,3,4]));

// Set을 사용한 배열의 중복 요소 제거
      unique = array => [...new Set(array)];
      console.log(unique([2,1,2,3,4,3,4]));

// 요소 개수 확인
/**
 * Set객체의 요소 개수를 확인할 떄는 Set.prototype.size 프로퍼티를 사용한다.
 */
   let {size} = new Set([1,2,3,3]);
   console.log(size)

   //size 프로퍼티는 setter 없이 getter 함수만 존재하는 접근자 프로퍼티이다. 
   // 따라서 size 프로퍼티에 숫자를 할당하여 Set객체의 요소 개수를 변경할 수 없다. 
   console.log("SETSS")
   console.log(Object.getOwnPropertyDescriptors(Set.prototype, 'size'));
   /*
      {
         constructor: {
            value: [Function: Set],
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
         add: {
            value: [Function: add],
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
         keys: {
            value: [Function: values],
            writable: true,
            enumerable: false,
            configurable: true
         },
         [Symbol(Symbol.toStringTag)]: {
            value: 'Set',
            writable: false,
            enumerable: false,
            configurable: true
         },
         [Symbol(Symbol.iterator)]: {
            value: [Function: values],
            writable: true,
            enumerable: false,
            configurable: true
         }
      }
   */

   set.size = 10; //무시된다.
   console.log(set.size)



   //요소 추가
   // set에 요소를 추가할 때는 Set.prototype.add 메소들르 사용한다.
   set = new Set();
   console.log(set) //Set(0) {}

   set.add (1);
   console.log(set) //Set(1) { 1 }


   // add 메소드는 새로운 요소가 추가된 Set객체르 ㄹ반환한다. 따라서 add 메소드를 호출한 후에 add메소드를 연속적으로 호출할 수 있다.
   set.add(1).add(2).add(3); 
   //Set 객체에 중복된 요소의  추가는 허용되지 않는다. 이떄 발생하는 에러는 무시된다.
   console.log(set) //Set(3) { 1, 2, 3 }

   //일치 비교 연산자 '==='를 사용하면 NaN과 NaN을 다르다고 평가한다. 하지만 Set객체는 NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다. +0, -0은 일치 비교 연산자 ===와 마찬가지로 같다고 평가하여 중복 추가를 허용하지 않는다. 
   set = new Set();
   console.log(NaN === NaN); //false
   console.log(+0 === -0) //true
   set.add(NaN).add(NaN).add(NaN)
   //NaN을 같다고 평가하여 중복 추가하지 않는다. 
   console.log(set) //Set(1) { NaN }

   set = new Set();
   set.add(+0).add(-0);
   console.log(set) //Set(1) { 0 }



   //Set 객체는 객체나 배열과 같이 자바스크립트의 모든 값을 요소로 저장할 수 있다. 
   set = new Set();
   set.add(1)
      .add('a')
      .add(true)
      .add(undefined)
      .add(null)
      .add({})
      .add([])
      .add(()=>{});

   console.log(set)
   /*
      Set(8) {
               1,
               'a',
               true,
               undefined,
               null,
               {},
               [],
               [Function (anonymous)]
            }
    */


// 요소 존재 여부 확인 
//Set 객체에 특정 요소가 존재하는지 확인하려면 Set.prototype.has 메소드를 사용한다. 
// has 메소드는 특정 요소의 존재 여부를 나타내는 boolean 값을 반환한다. 

            set = new Set([1,2,3]);
            console.log(set.has(2)) // true
            console.log(set.has(4)) // false


//요소 삭제
/**
 * set객체의 특정 요소를 삭제하려면, Set.prototype.delete 메소드를 사용한다. 
 * delete 메소드는 삭제 성공 여부를 나타내는 boolean 값을 반환한다. 
 * 
 * delete 메소드에는 인덱스가 아니라 삭제하려는 요소 값을 인수로 전달해야 한다. 
 * set 객체는 순서에 의미가 없다. 즉, 인덱스를 갖지 않는다. 
 */

            set = new Set([1,2,3]);
            set.delete(2);
            console.log(set)

            set.delete(1)
            console.log(set)

// 만약 존재하지 않는 set 객체의 요소를 삭제하려 하면 에러 없이 무시된다.
            set.delete(0);

// delete 메소드는 삭제 성공 여부를 나타내는 boolean 값을 반환한다. 따라서 set.prototype.add 메소드와 달리 연속적으로 호출할 수 없다. 
            set = new Set([1,2,3]);
            // set.delete(1).delete(2) //TypeError: set.delete(...).delete is not a function 


//요소 일괄 삭제 
/**
 * set 객체의 모든 요소를 일괄 삭제하려면 set.prototype.clear메소드를 사용한다.
 * clear 메소드는 언제나 undefined를 반환한다. 
 */
            set.clear();


// 요소 순회
/**
 * Set 객체의 요소를 순회하려면 Set.prototype.forEach 메소드를 사용한다. 
 * Set.prototype.forEach 메소드는 Array.prototype.forEach메소드와 유사하게 
 * 콜백 함수와 forEach 메소드의 콜백 함수 내부에서 this로 사용될 객체(옵션)를 인수로 전달한다.
 * 이때 콜백 함수는 다음과 같이 3개의 인수를 전달받는다. 
 * 
 * 
 *    첫 번쨰 인수 : 현재 순회 중인 요소 값
 *    두 번째 인수 : 현재 순회 중인 요소 값
 *    세 번째 인수 : 현재 순회 중인 Set객체 자체 
 * 
 *    첫 번쨰 인수와 두 번째 인수는 같은 값이다. 이처럼 동작하는 이유는 Array.prototype.forEach 
 *    메소드와 인터페이스를 통일하기 위함이며 다른 의미는 없다. 
 *    Array.prototype.forEach 메소드의 콜백 함수는 두 번쨰 인수로 현재 순회 중인 요소의 인덱스를 전달받는다.  하지만 Set 객체 순서에 의미가 없어 배열과 같이 인덱스를 갖지 않는다. 
 */


            set = new Set([1,2,3]);
            set.forEach((v,v2,set)=>{console.log(v,v2,set)});
            // 1 1 Set(3) { 1, 2, 3 }
            // 2 2 Set(3) { 1, 2, 3 }
            // 3 3 Set(3) { 1, 2, 3 }  
            
            
            // set 객체는 이터러블이다. 따라서 for...of 문으로 순회할 수 있으며, 스프레드 문법과 배열 디스트럭처리으이 대상이 될 수도 있다 

            set = new Set([1,2,3]);

            //Set 객체는 Set.prototype의 Symbol.iterator메소드를 상속받는 이터러블이다.
            console.log(Symbol.iterator in set);

            //이터러블인  Set 객체는 for...of 문으로 순회할 수 있다.
            for(const value of set){
               console.log(value)
            }

            //이터러블인 Set객체는 스프레드 문법의 대상이 될 수 있다.
            console.log([...set])

            //이터러블인 Set객체는 배열 디스트럭처링 할당의 대상이 될 수 있다.
            const [a,...rest] = set;
            console.log(a,rest)
      /**
       * set 객체는 요소의 순서에 의미를 갖지는 않지만 Set객체를 순회하는 순서는 요소가 추가된 순서를 따른다.
       *  이는 다른 이터러블의 순회와 호환성을 유지하기 위함이다.
       */



//집합 기능
            
              //set 객체는 수학적 집합을 구현하기 위한 자료구조이다. 따라서 set객체를 통해 교집합, 합집합, 차집합 등을 구현할 수 있다. 
             

      // 교집합
      
        Set.prototype.intersection = function (set){
           const result = new Set();
            for(const value of set){
               //2개의 set의 요소가 공통되는 요소이면 교집합의 대상이다.
               if(this.has(value)){
                  result.add(value);
               }
            }

            return result;
        }
        
        let setA = new Set([1,2,3,4]);
        let setB = new Set([2,4]);

        //A와 B의 교집합
        console.log(setA.intersection(setB));
        //B와 A의 교집합
        console.log(setB.intersection(setA));


        //혹은 아래와 같이 구현할 수도 있다.


        Set.prototype.intersection = function(set){
           return new Set([...this].filter(v=>set.has(v)));
        }

         //A와 B의 교집합
         console.log(setA.intersection(setB));
         //B와 A의 교집합
         console.log(setB.intersection(setA));


      //합집합
      //합집합은 A와 B의 중복 없는 모든 요소로 구성된다. 