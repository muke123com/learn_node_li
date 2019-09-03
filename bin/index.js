#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('你想说什么？', answer=>{
    console.log(`${answer}`);
    process.exit(0);
})

// let arg = process.argv[2]
// console.log(`hello ${arg || 'world'}`);
