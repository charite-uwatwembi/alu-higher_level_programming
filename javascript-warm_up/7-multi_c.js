#!/usr/bin/node
const arg = process.argv.slice(2);
const c = parseInt(arg[0]);
if (c === undefined || isNaN(c)) {
  console.log('Missing number of occurences');
} else {
  for (let i = 1; i <= c; i++) {
    console.log('C is fun');
    }
}
