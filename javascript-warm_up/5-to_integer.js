#!/usr/bin/node
const arg = process.argv.slice(2);
const c = parseInt(arg[0]);
if (c === undefined || isNaN(c)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + c);
}
