//1
/* let x = "John"
let y = "Doe"
let result = x + " <> " + y
console.log(result) */

//22
   /* let data = {
    name: "Naveen",
    surname: "Manchala",
    age:  23,
    email: "mnaveen9698@gmail.com",
    gender: "male",
    Country: "INDIA"
}
console.log(data) */ 

//23
/* delete data.email;
console.log(data) */

//24
/* let cities = ["Munich", "Frankfurt", "Freiberg", "Berlin", "Dresden", "Chemnitz", "Hamburg", "dusseldorf", "Dortmund", "Zwickau"] */

//25
/* console.log(cities) */

//26
const array = []
while (array.length < 100) {
let numbers = Math.floor(Math.random() * 100) + 1;
if (array.indexOf(numbers) === -1) {
    array.push(numbers)
}
}
console.log(array)

//27


//28
let arr = []
for(let i=0; i<1; i++) {
    let newArr = []
    for(let j=0; j<10; j++) {
        newArr.push(Math.floor(Math.random() * 100))
        arr.push(newArr)
    }
}
console.log(arr)

