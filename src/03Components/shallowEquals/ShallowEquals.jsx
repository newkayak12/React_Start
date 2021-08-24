import { shallowEqualArrays, shallowEqualObjects } from 'shallow-equal';
import React, { Component } from 'react';

class ShallowEquals extends Component {
  constructor() {
    super();
    const obj = { name: 'park' };
    const mylist = [1, 2, 3, obj];
    const list1 = [1, 2, 3, obj];
    const list2 = [1, 2, 3, { name: 'park' }];

    const test1 = [1, 2, 3];
    const test2 = [1, 2, 3];

    const t1 = 1;
    const t2 = '1';

    const st = 'false';
    const bo = false;
    /*
  
  == 는 값을 비교하고
  === 는 자료형까지 비교하는 걸로 알고 있는데

*/
    console.log(`st == bo : ${st == bo}`);
    console.log(`st === bo : ${st === bo}`);

    console.log(`t1==t2 : ${t1 == t2}`);
    console.log(`t1===t2 : ${t1 === t2}`);

    console.log(`test1 == test2 :${test1 == test2}`);
    console.log(`test1 === test2 :${test1 === test2}`);

    console.log(`Object.is(mylist, list1) : ${Object.is(mylist, list1)}`);
    console.log(`Object.is(list1, list1) : ${Object.is(list1, list1)}`);
    console.log(`Object.is(list1, list2) : ${Object.is(list1, list2)}`);

    /* 
 == equality operator, it checks two operands are equal or not
 === strict equality operator or identify operator, it checks two operands are identical or not

 
*/

    console.log(`mylist == list1 :${mylist == list1}`);
    console.log(`mylist === list1 :${mylist === list1}`);
    /* 내용물은 같지만 mylist와 list1이 각각의 새로운 배열_ 참조하고 있는 주소값이 다르기 때문에 false */
    console.log(`list1 == list2 :${list1 == list2}`);
    console.log(`list1 === list2 :${list1 === list2}`);
    /* 내용물은 같지만 list3와 list1이 각각의 새로운 배열_ 참조하고 있는 주소값이 다르기 때문에 false */

    console.log(`shallowEqualArrays(list1, list2) : ${shallowEqualArrays(list1, list2)}`);
    console.log(`shallowEqualArrays(mylist, list1):${shallowEqualArrays(mylist, list1)}`);

    console.log(`shallowEqualObjects(list1, list2):${shallowEqualObjects(list1, list2)}`);
    console.log(`shallowEqualObjects(mylist, list1):${shallowEqualObjects(mylist, list1)}`);
    /* 흠... 자바의 ==과 equals와 같을까??...
     */
  }
  render() {
    return <div></div>;
  }
}
/* git tokenTest */

export default ShallowEquals;
