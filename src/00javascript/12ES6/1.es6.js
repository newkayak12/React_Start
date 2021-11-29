//ES6 함수의 추가 기능

// 	함수의 구분
	/**
	 * 자바스크립트의 함수는 일반적인 함수로서 호출할 수 있고, 
	 * new 연산자와 함께 호출하여 인스턴스를 생성할 수 있는 생성자 함수로서 호출할 수도 있으며,
	 * 객체에 바인딩되어 메소드로서 호출할 수도 있다. 
	 * 
	 * >> 그러나 이는 손해다
	 * ES6전 예시
	 */

	var foo = function (){
		return 1;
	}
	//일반적인 함수로서 호출
	foo(); //1

	//생성자 함수로서 호출
	new foo();// foo{}

	//메소드로서 호출
	var obj ={foo:foo};
	obj.foo();
	
	//이처럼 ES6이전의 함수는 사용 목적에 따라 명확히 구분되지 않는다.
	//즉, ES6이전의 모든 함수는 일반 함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수 있다. (ES6 이전의 모든 함수는 callable이면서 constructor이다.)
	// 이는 ES6 이전의 모든 함수는 사용 목적에 따라 명확한 구분이 없으므로 호출 방식에 특별한 제약이 없고 생성자 함수로 호출되지 않아도 프로토타입 객체를 생성한다. 


	/**
	 * ES6에서는 함수의 목적에 따라서 세 가지 종류로 분류했다. 
	 * 
	 * ES6 함수 구분  |  constructor  |  prototype  |  super  |  arguments  |
	 *    일반함수    |        O      |      O      |    X    |      O      |
	 *     메소드    |         X     |       X     |    O    |      O      |
	 *   화살표 함수   |        X      |       X     |   X     |      X      |
	 * 
	 * 
	 * 일반 함수는 함수 선언문이나 함수 표현식으로 정의한 함수를 말하면 ES6이전의 함수와 차이가 없다. 
	 * 하지만 메소드, 화살표 함수는 ES6 전후로 차이가 있다. 
	 */

		//2.메소드
		/**
		 * 일반적으로 메소드는 객체에 바인딩된 함수를 일컫는다. ES6 사양에서 메소드는 메소드 축약 표현으로 정의된 함수만을 의미한다.
		 */
		const objs = {
			x:1,
			getX(){return this.x},
			bar:function(){return this.x}
			//bar에 바인딩된 함수는 메소드가 아닌 일반 함수이다.
		};
		console.log(objs.getX());
		console.log(objs.bar());

		//ES6사양에서 정의한 메소드는 인스턴스를 생성할 수 없는 non-constructed이다. 따라서 ES6메소드는 생성자 함수로서 호출할 수 없다. 
		//ES6메소드는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다. 
		//참고로 표준 빌트인 객체가 제공하는 프로토타입 메소드와 정적 메소드는 모두 non-constructed이다.

		/**
		 * String.prototype.toUpperCase.prototype // undefined
		 * String.fromCharCode.prototype //undefind
		 * 
		 * ES6메소드는 자신을 바인딩한 객체를 가리키는 내부 슬롯 [[HomeObject]]를 갖는다. 이로 이해 super참조를 할 수 있다. 
		 * 이는 반대로 ES6메소드가 아닌 함수는 super키워드를 사용할 수 없다는 것을 의마한다. [[HomeObject]]가 없기 때문이다. 
		 * 
		 * 이처럼 ES6메소드는 본연의 기능(super)을 추가하고 의미적으로 맞지 않는 기능을 제거했다.
		 * 따라서 메소드를 정의할 때 프로퍼티 ㄱ밧으로 익명 함수 표현식을 할당하는 ES6이전의 방식을 사용하지 않는 것이 좋다. 
		 */


		//3. 화살표 함수 
		/**
		 * 화살표 함수는 function 키워드 대신 화살표(=>)를 사용하여 기존의 함수 정의 방식보다 간단하게 함수를 정의할 수 있다. 
		 * 화살표 함수는 표현만 간략한 것이 아니라 내부 동작고 기존의 함수보다 간략하다.
		 * 특히 화살표 함수는 콜백 함수 내부에서 this가 전역 객체를 가리키는 문제를 해결하기 위한 대안으로 유용하다 .
		 */

			//함수의 정의
			//화살표 함수는 함수 선언문으로 정의할 수 없고 함수 표현식으로 정의해야한다. 호출 방식은 기존 함수와 동일하다.
			console.log("=>")
			const multiple = (x,y) => console.log(x*y);
			multiple(2,3);

			//매개변수 선언
			//매개변수가 여러 개인 경우 소괄호 ()안에 매개변수를 선언한다.
			// const arrow = (x,y) => {...}

			//매개변수가 하나라면 ()를 생략할 수 있다.
			// const arrow = x => {...}

			//매개변수가 없는 경우 ()를 생략할 수 없다.
			// const arrow = () =>{...}




			//함수 몸체 정의 
			//함수 몸체가 하나의 문으로 구성된다면 함수 몸체를 감싸는 중괄호를 생략할 수 있다.
			//이때 함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식인 문이라면 암묵적으로 반환된다.

			const power = x => x**2;
			console.log(power(2))
			//표현식이 아닌 문이라면 에러가 난다.
			// const arrows = () => const x= 1;


			//객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호 ()로 감싸줘야한다.
			const create = (id, content) => ({id,content});
			// () 감싸지 않으면 객체 리터럴의 중괄호를 함수 몸체를 감싸는 중괄호로 잘못 해석한다. 
			// 함수 몸체가 여러 개의 문으로 구성된다면 함수 몸체를 감싸는 중괄호를 생략할 수 없다. 이때 반환값이 있다면 명시적으로 반환해야한다. 

			
			
			//화살표 함수도 즉시 실행 함수로 이용할 수 있다.
			const person = (name => ({
				sayHi(){return `Hi! My name is ${name}.`;}
			}))('lee')
			// 화살표 함수도 일급 객체이므로 Array.prototype.map, Array.prototype.filter, Array.prototype.reduce
			//같은 고차 함수에서 인수로 전달할 수 있다. 이 경우 일반적인 함수 표현식보다 표현이 간결하고 가독성이 좋다. 
			
			
			//ES5
			// [1,2,3].map(function (v){
			// 	return v*2;
			// })


			//ES6
			// [1,2,3].map(v=> console.log(v*2))
			
			//이처럼 화살표 함수는 콜백함로서 정의할 때 유용하다. 화살표 함수는 표현만 간략한 것만이 아니다.
			//화살표 함수는 일반 함수의 기능을 간략화했으며, this도 편리하게 설계되었다.


			//화살표 함수와 일반 함수의 차이
			/**
			 * 
			 * 1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor이다.
			 */
			const Zoo = () =>{};
			//화살표 함수는 생성자 함수로서 호출할 수 없다. 
			// new Zoo(); //TypeError : ~

			//화살표 함수는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.
			console.log(Zoo.hasOwnProperty('prototype'))//false



			/**
			 * 2. 중복된 매개변수 이름을 선언할 수 없다.
			 * 일반 함수는 중복된 매개변수 이름을 선언해도 에러가 나지 않는다.
			 * //Strict 모드에서는 사용하면 에러가 난다.
			 */
			function normal(a,a){return a+a;}
			console.log(normal(1,2)); // 마지막 a가 a가 된다.
			/**
			 * 화상표 함수에서도 중복된 매개변수 선언하면 에러가 발생한다.
			 */
			// const arrow = (a,a) => a+a;
			//SyntaxError



			/**
			 * 3. 화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.
			 * 따라서 화살표 함수 내부에서 this, arguments, super, new.target을 참조하면 스코프 체인을 통해 사위 스코프의 this, arguments, super, new.target을 참조한다. 
			 * 
			 * 만약 화살표 함수와 화살표 함수가 중첩되어 있다면 상위 화살표 함수에도 this, arguments, super, new.target
			 * 바인딩이 없으므로 스코프 체인 상에서 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this, arguments, super, new.target을 참조한다.
			 */

				/**
				 * This
				 * 화살표 함수가 일반 함수와 구별되는 가장 큰 특징은 바로 this이다. 그리고 화살표 함수는 다른 함수의 인수로 전달되어 
				 * 콜백 함수로 사용되는 경우가 많다. 
				 * 
				 * 화살표 함수의 this는 일반 함수의 this와 다르게 동작한다. 이느 "콜백 함수 내부의 this 문제", 즉 콜백 함수 내부의 this가 
				 * 외부 함수 this와 다르기 때문에 발생하는 문제를 해결하기 위해 의도적으로 설계된 것이다.
				 * 
				 * 
				 * this 바인딩은 함수의 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.
				 * 다시 말해, 함수를 정의할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 
				 * 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다. 
				 * 
				 * 주의해야할 것은 일반함수로서 호출되는 콜백 함수의 경우이다.
				 * 고차 함수의 인수로 전달되 고차 함수 내부에서 호출되는 콜백 함수도 중첩 함수라고 할 수 있다.  
				 */
				
				class Prefixer{
					constructor(prefix){
						this.prefix = prefix
					}

					add(arr){
						//add 메소드는 인수로 전달된 배열 arr을 순회하며 배열에 요소 추가
						//[1] this는 메소드를 호출한 객체를 가리킨다. 
						return arr.map(function(item){
							// return this.prefix + item; //[2] this는 undefined를 가리킨다. Array.prototype.map 메소드가 콜백 함수를 일반 함수로서 호춣하기 때문이다. 
							// > TypeError
						})
					}
				}

				const prefixer = new Prefixer('-webkit-');
				console.log(prefixer.add(['transition', 'user-select']));
				
				/**
				 * this는 일반함수로서 호출되는 모든 함수 내부에서 전역 객체를 가리킨다. 
				 * 그런데 클래스 내부의 모든 코드에는 strict mode가 암묵적으로 적용된다. 
				 * strict mode에서 일반 함수로서 호출된 모든 함수 내부의 this에는 전역 객체가 아니라 undefined가 바인딩되므로 
				 * 일반 함수로서 호출되는 메소드의 콜백 함수 내부의 this에서는 undefined가 바인딩된다. 
				 * 
				 * 
				 * 이때 발생하는 문제가 바로 '콜백 함수 내부의 this 문제'이다. 즉, 콜백 함수의 this[2]와 외부 함수의 this[1]가 
				 * 서로 다른 값을 가리키고 있기 때문에 TypeError가 발생한다. 
				 * 이와 같은 콜백 함수 내부의 this 문제를 해결하기 위해 ES6에서는 아래와 같은 방법을 사용했다. 
				 * 
				 * 
				 * 
				 * 01. add
				 * add(arr){
				 * 	//this를 회피시킨다.
				 * 	const that = this;
				 * 	return arr.map(function(item){
				 * 		//this 대신 that을 참조한다. 
				 * 		return that.prefix + ' ' + item;
				 * 	})
				 * }
				 * 
				 * 02. Array.prorotype.map의 두 번째 인수로 add메소드를 호출한  prefixer객체를 가리키는 this를 전달한다.
				 * 
				 * add(arr){
				 * 	return arr.map(function(item){
				 * 		return this.prefix + ' ' + item;
				 * 	},this) //this에 바인딩된 ㄱ밧이 콜백 함수 내부의 this에 바인딩된다.
				 * }
				 * 
				 * 03. Function.prototype.bind 메소드를 이용해서 add메소드를 호출한 prefixer객체를 가리키는 this를 바인딩한다.
				 * add(arr){
				 * 	return arr.map(function(item){
				 * 		return this.prefix + ' ' + item
				 * 	}.bind(this))//this에 바인딩된 ㄱ밧이 콜백 함수 내부의 this에 바인딩된다. 
				 * }
				 * 
				 * 04. ES6에서 화살표 함수를 사용하여 콜백 함수 내부의 this 문제를 해결하기 
				 * 
				 * class Prefixer{
				 * 	constructor(prefix){
				 * 		this.prefix = prefix
				 *	 }
				 *	add(arr){
				 *		return arr.map(item=>this.prefix + item) 
				 *	}
				 * }
				 * 
				 * const prefixer = new Prefixer('-webkit-');
				 * console.log(prefixer.add(['transition', 'user-select']));
				 * 
				 * 
				 * 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 this를 찾조하면 상위스코프의 this를 그대로 참조한다. 이를 lexcial this라고 한다. 
				 * 이는 마치 렉시컬 스코프와 같이 화살표 함수의  this가 함수가 정의된 위치에 의해 결정된다는 것을 의미한다. 
				 * 
				 * 
				 * 화살 함수를 제외한 모든 함수에서 this 바인딩이 존재한다. 따라서 ES6에서 화살표 함수가 도입되기 이전에는 일반적인 식별자처럼 스코프 체인을 탐색할 필요가 없었다. 
				 * 하지만 화살표 함수는 함수 자체의 this바인딩이 존재하지 않는다. 따라서 화살표 함수 내부에서 this를 참조하면 일반적인 식별자처럼 스코프 체인을 통해 상위 스코프에서 this를 탐색한다.
				 * 
				 * 
				 * ()=>this.x // 상위 스코프의 this를 참조한다.
				 * (function () {return this.x;}).bind(this); //익명 함수에 상위 스코프의 this를 주입한다. 위 화상표 함수와 동일하게 동작한다. 
				 * 
				 * 만약 화살표 함수가 중첩되어 있다면 상위 화살표 함수에도 this바인딩이 없으므로 스코프체인 상에서 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의  this를 참조한다. 
				 * 
				 * ex)
				 */
					//중첩 함수의 foo의 상위 스코프는 즉시 실행 함수이다. 
					//따라서 화살표 함수의 foo의 this는 상위 스코프인 즉시 실행 함수의 this를 가리킨다.
					(function(){
						const foo = () =>console.log(this)
						foo();
					}).call({a:1}); //{a:1}

		
					//bar 함수는 화살표 함수를 반환한다.
					//bar 함수가 반환한 화살표 함수의 상위 스코프는 화살표 함수 bar이다. 
					//하지만 화살표 함수는 함수 자체의  this 바인딩을 갖지 않으므로 bar함수가 반환한 
					// 화살표 함수 내부에서 참조하는 this는 화살표 함수가 아닌 즉시 실행 함수의 this를 가리킨다.

					(function(){
						const bar = () => () => console.log(this);
						bar()();
					}).call({a:1}); //{a:1}

				// 만약 화살표 함수가 전역 함수라면 화살표 함수의  this는 전역 객체를 가리킨다. 
				//전역 함수의 상위 스코프는 전역이고 전역에서 this는 전역 객체를 가리키기 떄문이다.

					//전역 함수 foo의 상위 스코프는 전역이므로 화살표 함수 foo의 this는 전역 객체를 가리킨다.
					const foo1 = () => console.log(this);
					foo1();//Window {0: global, 1: global, 2: global, 3: global, 4: global, 5: global, 6: global,
							// 7: global, 8: global, window: Window, self: Window, document: document, name: '', location: Location, …}
					
					// 프로퍼티에 할당한 화살표 함수도 스코프 체인 상에서 가장 가까운 상우 ㅣ함수 중에서 화살표 함수가 아닌 함수의 this를 참조한다.

					//Ex)
					// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역이다.
					// 따라서 increase 프로퍼티에 할당한 함수 의 this는 전역 객체를 가리킨다. 
					const counter ={
						num : 1, 
						increase : () => ++this.num
					};

					console.log(counter.increase()); //NaN

					//화살표 함수는 함수 자체의 this바인딩을 갖지 않기 때문에 Function.prototype.call, Function.prototype.apply, Function.prototype.bind 메소드를 사용해도 화살표 함수 내부의  this를 교체할 수 없다. 

					// window.x = 1;
					const normal1 = function () {return this.x};
					const arrow = () => this.x;

					console.log(normal1.call({x:10})); //10
					console.log(arrow.call({x:10})); //1

					/**
					 * 화살표 함수가 Function.prototype.call, Function.prototype.apply, Function.prorotype.bind 메소드를 호출할 수 없다는 의미가 아니다.
					 * 화살표 함수는 함수 자체의 this 바인딩을 갖지 않기 떄문에 this를 교체할 수 없고 언제나 상위 스코프의 this바인딩을 참조한다. 
					 */

					const add = (a,b)=> a+b;
					console.log(add.call(null,1,2));//3
					console.log(add.apply(null,[1,2])); //3
					console.log(add.bind(null,1,2)());//3






					//함수에 ()=>{} 쓰지 말아야 하는 이유
					
					const personz = {
						name:'lee',
						//Bad
						sayHi: ()=>console.log(`Hi ${this.name}`),//화살표 함수 내부의 this는 사위 스코프인 전역 this가 가리키는
											// 전역 객체를 가리키므로 결과적으로 window.name과 같다.
						//Good
						sayBye(){
							console.log(`Hi ${this.name}`)
						}

					}
					personz.sayHi();

					

					//혹은 클래스 필드 정의 제안을 사용하여 클래스 필드에 화살표 함수를 할당할 수도 있다. 
					//Bad
					class Personal{
						//클래스 필드 정의 제안
						constructor(){
						name = 'Lee';
						//Bad
						sayHi = () => console.log(`Hi ${this.name}`);
							//이렇게 하면 상위 스코프의 this바인딩을 참조한다. >> constructor 
						this.sayBye = () => console.log(`Hi ${this.name}`);
							//위와 같이 하면 sayBye는 인스턴스 프로퍼티가 된다. 
							//constructor 내부의 this 바인과 같다. 
						}
					}







		//super
		//화살표 함수는 함수 자체의 super바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 super를 참조하면 this와 마찬가지로 상위 스코프의 super를 참조한다. 
		//ex)
		class Base1{
			constructor(name){
				this.name = name;
			}
			sayHi(){
				return `Hi ${this.name}`
			}
		}

		class Derived1 extends Base1{
			//화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다.
			sayHi = () => `${super.sayHi()} how are you doing`;
		}

		const derived1 = new Derived1('LEE');
		// console.log(derived1.sayHi())
		/**
		 * super는 내부 슬롯 [[HomeObject]]를 갖는 ES6메소드 내에서만 사용할 수 있는 키워드이다. 
		 * sayHi 클래스 필드에 할당한 화살표 함수는 ES6메소드는 아니지만 함수 자체의 super 바인딩을 갖지 않으므로 super를 참조해도
		 * 에러가 발생하지 않고 상위 스코프인 constructor의 super 바인딩을 참조한다. 
		 */


		//Arguments
		// 화살표 함수는 함수 자체의 argument 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 arguments를 참조하면
		// this와 마찬가지로 상위 스코프의 arguments를 참조한다. 

		(function () {
			//화살표 함수 foo의 arguments는 상위 스코프인 즉시 실행 함수의 arguments를 가리킨다.
			const foo = () => console.log(arguments); //[Arguments] {'0':1, '1':2}
			foo(3,4)
		}(1,2));

		//화살표 함수 foo의 arguments는 상위 스코프인 전역 arguments를 가리킨다.
		//하지만 전역에는 arguments 객체가 존재하지 않는다. arguments 객체는 함수 내부에서만 유효하다. 
		const foo2 = () => console.log(arguments);
		// foo2(1,2);         //ReferenceError


		//Argument객체는 함수를 정의할 떄 매개변수의 개수 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다.
		//하지만 화살표 함수에서는 arguments 객체를 사용할 수 없다. 
		//상위 스코프의 arguments객체를 참조할 수는 있지만 화살표 함수 자신에게 전달된 인수 목록을 확인할 수 없고
		//상위 함수에게 전달된 인수 목록을 참조하므로 그다지 도움이 되지 않는다.

		//따라서 화살표 함수로 가변 인자 함수를 구현해야 할 때는 반드시 Rest 파라미터를 사용해야 한다. 






		//Rest 파라미터
		/**
		 * Rest 파라미터는 매개변수 앞에 '...'를 붙여서 정의한 매개변수를 의미한다.
		 * Rest파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
		 * @param Number param1
		 * @param Number param2
		 * @param Object   {p1,p2,p3}
		 * @param Number ... rest
		 */

		function restParam(param1, param2,{a,b,c}, ...rest){
			//매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest파라미트이다.
			console.log(param1)
			console.log(param2)
			console.log(a)
			console.log(b)
			console.log(c)
			console.log(rest);
		}
		let obz = {a:'a',b:'b',c:'c'}
		restParam(1,2,obz,3,4,5,6,7,8,9,10);

		//Rest 파라미터는 단 하나만 선언할 수 있다.
		//rest 파라미터는 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티에 영향을 주지 않는다. 


		//rest 파라미터와 arguments객체
		/**
		 * ES6에서는 함수를 정의할 때 매개변수의 개수를 확정할 수 없는 가변 함수의 경우 매개변수를 통해 인수를 전달받는 것이 불가능하므로 arguments객체를 활용하여 인수를 전달받았다.
		 * arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용할 수 있다. 
		 * 
		 */

		//매개변수 개수를 알 수 없으면
		function sum(){
			//가변 인자 함수는 arguments객체를 통해 인수를 전달 받는다. 
			console.log(arguments)
		}
		sum(1,2); //[Arguments] { '0': 1, '1': 2 }