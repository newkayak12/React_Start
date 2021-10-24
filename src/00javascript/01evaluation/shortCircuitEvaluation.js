// shortCircuit Evaluation
/*
 

||
 'Cat' || 'Dog' >> cat
 fasle || 'dog' >> dog
 'cat' || false >> cat


 &&
 'cat' && 'dog' >> cat
 false && 'dog' >> false
 'cat' && false >> false

*/

operator = {
  first: () => {
    console.log(`'cat'||'dog' : ${'cat' || 'dog'}`);
    console.log(`'cat'||'false' : ${'cat' || false}`);
    console.log(`false||'dog' : ${false || 'dog'}`);
    console.log('\n');
  },
  second: () => {
    console.log(`'cat' && 'dog' : ${'cat' && 'dog'}`);
    console.log(`false && 'dog' : ${false && 'dog'}`);
    console.log(`'cat' && false : ${'cat' && false}`);
    console.log('\n');
  },
  third: () => {
    var done = true;
    var message = '';

    if (done) message = '완료';
    console.log(`if(done) message = '완료' : ${message}`);

    console.log('\n======\n');
    message = '';
    message = done && '완료';
    console.log(`message = done && '완료' : ${message}`);
    console.log('\n--------------------\n');
  },
  fourth: () => {
    var done = false;
    var message = '';

    if (!done) message = '미완료';
    console.log(`if(!done) message = "미완료" : ${message}`);
    console.log('\n=======\n');

    message = '';
    message = done || '미완료';
    console.log(`message = done || '미완료' : ${message}`);
  },
  fifth: () => {
    var elem = null;
    var value = elem && elem.value;

    console.log(`var value = elem&& elem.value : ${value}`);

    //     value = elem.value;  >> 여기서 에러가 난다.
    //     console.log(`value = elem.value : ${value}`);

    //     optional Chaining

    value = elem?.value;
    console.log(value);
    console.log('elem이 null 또는 undefined면 undefined 반환 그렇지 않으면 우황의 프로퍼티 참조');
  },
  sixth: () => {
    console.log('\n\n\n');
    var foo = null ?? 'defaultValue';
    console.log(foo);
  },
};

operator.first();
operator.second();
operator.third();
operator.fourth();
operator.fifth();
operator.sixth();
