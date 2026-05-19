// const multiply = (a, b, c) => {
//     return a * b * c;
// }
// const haha = multiply(1, 2, 2)
// console.log(haha);



const user = {
    name: "nischal",
    address: "brt",
    age: 23
}

console.log(user["name"]);
console.log(user.age);
console.log(user.address);




const employee = {
    name: "haha",
    age: 12,
    address: {
        city: "Kathmandu",
        country: "Nepal"
    }
}

console.log("Employees Details");

console.log(employee.name);
console.log(employee['name']);
console.log(employee.address.city);





function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }

}

console.log(checkEvenOrOdd(2));
console.log(checkEvenOrOdd(123));


function reverse(data) {
    return data.split("").reverse().join("")
}


console.log(reverse("hello"));
