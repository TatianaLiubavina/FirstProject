/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelectorAll('button');

button.forEach(button => {
    button.addEventListener('click', function() {
        console.log(button);
        alert("Что нас не убивает, делает нас сильнее!")
    })
})

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
// button.addEventListener('click', function() {
// 	alert("Что нас не убивает, делает нас сильнее!")
// })


function test(a, b) {
    return a + b;
}

console.log(test(1, 2));
console.log(test(5, 142));
console.log(test("one", "two"));

function test2(a, b) {
    if(a > b) {
        return "a is greater than b";
    } else if(a < b) {
        return "b is greater than a";
    } else {
        return true;
    }

}

console.log(test2(2, 2));
console.log(test2(4747, 142));
console.log(test2("one", "two"));

var i = 0;
let j = 0;
const k = 0;

i = 10;
// k = 2999;


let obj = {
    name: "John",
    age: 20,
    city: "Moscow",
    isStudent: true,
    skills: ["JavaScript", "Python", "Java"],
    address: {
        street: "123 Main St",
        city: "New York",
    }
}

console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
console.log(obj.address.city);

console.log(obj);