/* 
	템플릿을 이용하면 ''와 + 대신 ``으로 문자열을 표시할 수 있다. 또한 $를 이용하여 변수 또는 식을 표현할 수도 있다. 
	
*/

var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = string1 + ' ' + string2;
var product = { name: '도서', price: '4200원' };
var message = '제품' + product.name + '의 가격은' + product.price + '입니다.';
var multiLine = '문자열1\n문자열2';
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = '곱셈 값은 ' + value1 * value2 + ' 입니다.';
var operator2 = '불리언 값은 ' + (boolValue ? '참' : '거짓') + '입니다.';
console.log('\n\n================ 템플릿 미이용 ==============');
console.log(greeting);
console.log(message);
console.log(multiLine);
console.log(operator1);
console.log(operator2);

//위의 것을 템플릿으로 바꿀 수 있다.

var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = `${string1} ${string2}`;
var product = { name: '도서', price: '4200원' };
var message = `제품 ${product.name}의 가격은 ${product.price} 입니다.`;
var multiLine = `문자열1
문자열2`;
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = `곱셈 값은  ${value1 * value2}입니다.`;
var operator2 = `${boolValue ? '참' : '거짓'}입니다.`;
console.log('\n\n================ 템플릿 이용 ==============');
console.log(greeting);
console.log(message);
console.log(multiLine);
console.log(operator1);
console.log(operator2);

//템플릿 문제 -1
/* 
var cart ={name:'도서', price:1500};
var getTotal = function(cart){
	return cart.price+'원';
};

var myCart = "장바구니에 " + cart.name +'가 있습니다. 총 금액은 ' + getTotal(cart) +'입니다.'
*/

var cart = { name: '도서', price: 1500 };
var getTotal = function (cart) {
  return `${cart.price}원`;
};
var myCart = `장바구니에 '${cart.name}'가 있습니다. 총 금액은 ${getTotal(cart)}입니다.`;
console.log('\n\n=========== 템플릿을 이용한 문제풀이 ==============');
console.log(myCart);
