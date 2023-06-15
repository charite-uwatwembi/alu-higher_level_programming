#!/usr/bin/node
function add (a, b) {
  return (a + b);
}
const arg = process.argv.slice(2);
const a1 = parseInt(arg[0]);
const a2 = parseInt(arg[1]);
if (arg === null || arg === '') {
  console.log('No argument');
} else if (a1 || a2 === undefined || isNaN(a1,a2)) {
  console.log('NaN');
} else {
  console.log(add(a1, a2));
} 
