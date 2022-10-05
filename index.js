#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');



const max = 2;
const min = 1

if ('fileName' == undefined) {
    console.log('нет файла для логов')
    process.exit(0);
}

const writerStream = fs.createWriteStream('fileName.txt');
console.log('Загадано случайное число (1 или 2). \nДля выхода введите - C');

const input = readline.createInterface(process.stdin)
input.on('line', (number) => {
    if (number == 'C') {
        process.exit(0);
    }
    insertNumber(number);

})

function random() {
    const result = Math.floor(Math.random() * (max - min)) + max;
    console.log(result)

    return result
}

function insertNumber(number) {
    const numberCheck = random();
    const res = number == numberCheck;
    res ? console.log('Угадал') : console.log('Не угадал')

    const content = {
        dateTime: new Date(),
        resultate: res ? 'Победа' : 'Проигрыш',
        Ход: numberCheck,
        Ответ: number
    }
    writerStream.write(JSON.stringify(content) + '\n', 'UTF8')
}


