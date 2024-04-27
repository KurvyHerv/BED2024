const path = require('node:path');
const fs = require('node:fs')
const note = '/week1/prac1/note.txt';
const content = 'hello world'
const chalk = require('chalk');

path.dirname(note);
path.basename(note);
path.extname(note);

fs.writeFile('note.txt', content, err => {
    if (err) {
        console.error(err);
    } else {

    }
});

fs.readFile('note.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

console.log(chalk.yellow('hi!'));