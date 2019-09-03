const shell = require('shelljs')

console.log(shell.pwd())
shell.mkdir('txt');
shell.cd('txt');
shell.touch('1.txt')
let i = 0;
let s = setInterval(() => {
    
    let now = new Date();
    shell.exec(`echo ${now} >> 1.txt`)
    i++;
    console.log(i)
    if(i > 10) {
        console.log(123)
        clearInterval(s)
    }
}, 1000)