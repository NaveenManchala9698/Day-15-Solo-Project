//21
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
 //let cities = ["Munich", "Frankfurt", "Freiberg", "Berlin", "Dresden", "Chemnitz", "Hamburg", "dusseldorf", "Dortmund", "Zwickau"] 

//25
/* for(i=0; i<cities.length; i++) {
    console.log(cities[i])
} */


//26
/* const array = []
while (array.length < 100) {
let numbers = Math.floor(Math.random() * 100) + 1;
if (array.indexOf(numbers) === -1) {
    array.push(numbers)
}
}
console.log(array) */

//27


//28
/* let arr = []
for(let i=0; i<1; i++) {
    let newArr = []
    for(let j=0; j<10; j++) {
        newArr.push(Math.floor(Math.random() * 100))
        arr.push(newArr)
    }
}
console.log(arr) */


//29
/* function longestArray(arr) {
 var max = []
 for (let i=0; i<arr.length; i++) {
     var arrMax = arr[i].length
     if(arr[i].length > arr[i+1].length) {
         
     }
         
} 

longestArray([[1,2,3,4,5][6,7,8,9,10,11]]) */
//[6,7,8,9,10,11]

//30
/* function arraySum() {

} */


//DOM
//31 
/* let containerId = document.getElementById("container") */

//32
/* function getTd () {
let tableData = document.querySelectorAll("td")
console.log(tableData)
} */

//33
/* function getTdText () {
    let tableData =document.querySelectorAll("td")
    for(let i=0; i<tableData.length; i++) {
       console.log(tableData[i].innerText)
    }
} */

//34
/* function changeHeading() {
    let newHeading = document.querySelector("h1")
    newHeading.innerText = "NaveenManchala"
}
changeHeading() */

//35
  /* function extraRow() {
    var table = document.querySelector("table")
    var row = table.insertRow(4)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    cell1.innerHTML = "New cell 1"
    cell2.innerHTML = "New cell 2"
    cell3.innerHTML = "New cell 3"
    cell4.innerHTML = "New cell 4"
    cell5.innerHTML = "New cell 5"
}

function deleteRow() {
    document.querySelector('table').deleteRow(4)
}  
 */
//36
/* function addTest() {
    let newClass = document.querySelectorAll('tr')
    for(let i=0; i<newClass.length; i++) {
newClass[i].classList.add("test")
    }

} */

//37
/* function bgColor () {
    let changebg = document.querySelectorAll('a')
    for( let i=0; i<changebg.length; i++) {
        changebg[i].style.backgroundColor = "red"
    }
}
bgColor()
 */

//38

//39
/* function addItems() {
    let uoList = document.querySelector('ul')
    let newItem = document.createElement('li')
    newItem.innerText = "Naveen"
uoList.appendChild(newItem)
} */

//40
/* function emptyList() {
    let empty = document.getElementById('ul')
    empty.remove()
}
emptyList() */

//41

//42
/* function hideImage() {
    let imagesToHide = document.querySelectorAll('img')
    for(i=0; i<imagesToHide.length; i++) {
        imagesToHide[i].style.visibility = "hidden" 
    }
} */

//43
/* function hideTable() {
    let tableToHide = document.querySelector('table')
    tableToHide.classList.toggle('disappear')
} */

//44



/* function executeOnLoad() {
    alert("Welcome")
} 
window.onload = executeOnLoad */