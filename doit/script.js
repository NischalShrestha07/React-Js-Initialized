const nums = [1, 2, 4]

const doubled = nums.map(num => num * 2)

console.log(doubled);


const prices = [100, 120, 1220]

const expensive = prices.filter(price => price > 150)

console.log(expensive);


const users = [
    {
        id: 1,
        name: "hulas"
    }, {
        id: 2,
        name: "mausam"
    }

]
const user = users.map(u => u.id === 0)


console.log(user);


// function add(a, b) {
//     return a + b;
// }


// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 2))

// const add = (a, b) => {
//     return a + b;

// }



function test() {

    let age = 121;

    console.log(age);
}

test()

console.log('haha1');
console.log('haha2');
console.log('haha3');
console.log('haha4');
console.log('haha5');



setTimeout(() => {
    console.log("haahahahahha");
}, 3000);
console.log("heheheheh at first");




async function getProducts() {
    const response = await fetch("api/products");

    const data = await response.json();

    console.log(data);


}