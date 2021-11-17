//클로저의 활용

/**
 *  -  클롲저는 상태를 안전하게 변경하고 유지하기 위해 사용한다. 다시 말해서 상태가 의도치 않게 변경되지 않도록
 * 상태를 안전하게 '은닉' 하고 특정 함수에게만 상태 변경을 허용한다.(캡슐화와 은닉)
 */
//ex) 은닉 안될 때 카운터
console.log('\n1. 은닉 없이 기본적으로 작성된 코드')
	//카운트 상태 변수
	let num = 0;

	//
	const increase = function(){
		//카운트 1만큼 증가
		return ++num;
	}

	console.log(increase()); //1
	console.log(increase()); //2
	console.log(increase()); //3

	//오류를 발생시킬 가능성을 내포하고 있는 코드이다. 
	// 1. 카운트 상태 값(num)은 increase 함수가 호출되기 전까지 변경되지 않고 유지되어야만 한다.
	// 2. 이를 위해 카운트 상태(num)는 increase 함수만이 변경할 수 있어야한다.

	// 하지만 변경될 위험이 있다. 카운트 상태는 전역 변수를 통해 관리되고 있기 때문에 언제든지 누구나 접근할 수 있고 변경할 수 있다(암묵적 결합)



//ex) sol => 전역 변수 num을 increase 함수의 지역 변수로 바꿔서 이를 방지하자
console.log('\n2. 변수에 마음대로 접근할 수 없지만 변수 이전 상태가 유지가 되지 않는다.  ')
	//카운트 상태 변경 함수
	const incraseValue = function(){
		//카운트 상태 변수
		let num = 0;

		//카운트 상태를 1만큼 증가시킨다.
		return ++num;
	};

	console.log(incraseValue()); //1
	console.log(incraseValue()); //1
	console.log(incraseValue()); //1
	//이러면 이전 상태를 유지하지 못한다. 



//ex) 클로저를 사용해서 위의 1,2를 모두 충족시키며 이전의 상태를 유지해보자
console.log('\n3. 클로져로 은닉')
	//카운트 상태 변경 함수
	const increaseWithClosure = (function() {
		//카운트 상태 변수
		let num = 0;

		//클로저
		return function(){
			//카운트 상태를 1만큼 증가
			return ++num;
		};
	}());

	console.log(increaseWithClosure()); //1
	console.log(increaseWithClosure()); //2
	console.log(increaseWithClosure()); //3

	//즉시 실행 함수가 호출되고 반환한 함수가 incraseWithClosure에 할당된다.  해당 변수에 할당된 함수는 자신이 정의된 위치에 의해 결정된 상위 스코프인 즉시 실행 함수의 렉시컬 환경을 기억하는 클로저이다. 
	//즉시 실행 함수가 반환한 클로저는 카운트 상태를 유지하기 위한 자유변수 num을 언제 어디서 호출하든지 참조하고 변경할 수 있다.
	//즉시 실행 함수는 한 번만 실행되므로 num이 초기화될 이유가 없다 .
	//num변수는 클로저 이외에는 접근할 수 없으므로 은닉된 private상태가 된다. 
	//이처럼 클로저는 상태가 의도치 않게 변경되지 않도록 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용한다. 


//ex) 클로저를 이용해서 조금 더 현실적으로 접근하면(여러 가지를 모두 사용하면)
console.log('\n 4. 클로져를 이용하여 조금 더 현실적으로 접근하기')

	const counter = (function(){
		//카운트 상태 변수 
		let num = 0;

		//클로저인 메소드를 갖는 객체를 반환한다.
		//객체 리터럴은 스코프를 만들지 않는다.
		//따라서 아래 메소드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경이다. 
		return {
			//num : 0, //프로퍼티는 public하므로 은닉되지 않는다. (이렇게 쓰면 은닉이 안 된다.)
			increase(){
				return ++num
			},
			decrase(){
				return num>0? --num:0;
			}
		};
	}());
	console.log('\nincrase')	
	console.log(counter.increase());//1
	console.log(counter.increase());//2
	console.log(counter.increase());//3
	console.log(counter.increase());//4
	//
	console.log('\ndecrase')
	console.log(counter.decrase());//3
	console.log(counter.decrase());//2
	console.log(counter.decrase());//1
	console.log(counter.decrase());//0



