var async=require('async');

function test1(callback) {
        setTimeout(function() { //это асинхронный запрос типа
                callback(null,[new Date()]); //ответ
        },2000);
}
function test2(callback) {
        setTimeout(function() {
                callback(null,[new Date()]);
        },1000);
}

function test3(callback) {
        setTimeout(function() {
                callback("Oh error!",[new Date()]); //ошибка
        },100);
}

function resultShow(err,results) {
        console.log(new Date());
        if (err) {console.error("---====="+err+"=====---");}
        console.log(results);
        console.log('--------');
}

console.log(new Date());
console.log('--------');

async.parallel({one: test1,two: test2},resultShow); //вызываем через 2 секунды
async.series({one: test1,two: test2},resultShow); //вызываем через 3 секунды первым будет one
async.parallel({one: test1,two: test2,three: test3},resultShow); //выпадет через 100 миллисекунд
