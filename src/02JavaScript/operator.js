let newTodoItem = 'fix  ';

let value = newTodoItem && newTodoItem.trim();
let value2 = newTodoItem || newTodoItem.trim();
console.log('trim');
console.log(newTodoItem.trim());

console.log(value);
console.log(value.length);

console.log(value2);
console.log(value2.length);

console.log('\nchanged');
value = newTodoItem.trim() && newTodoItem;
value2 = newTodoItem.trim() || newTodoItem;

console.log(value);
console.log(value.length);

console.log(value2);
console.log(value2.length);
