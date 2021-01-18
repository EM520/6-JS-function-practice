// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// --------------------------
console.log (Math.max.apply(null,numbers))




// ---------------------------
// 2. Find longest string
// ---------------------------
let longest = strings.sort(
    function(a,b){
        return b.length-a.length;
    }
)[0]
console.log(longest)
// ---------------------------
// 3. Find even numbers
// ---------------------------
let evenNum = numbers.filter(function(item){
    return item%2 == 0
})
console.log(evenNum)

// ---------------------------
// 4. Find odd numbers
// ---------------------------

let oddNum = numbers.filter(function(item){
    return item%2 !== 0
})
console.log(oddNum)
// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

let s = strings.indexOf('is')
let sWords = strings[s]
console.log(sWords)






// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
let joinArr = instructors.map(function(item){
    return `${item.firstname} ${item.teaches}`
})
console.log(joinArr)


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

let filArr = instructors.filter(function(item){
    return item.teaches== "JavaScript"
})
console.log(filArr)

let sortFilArr = filArr.map(function(item){
     return item.firstname
}).sort()
console.log(sortFilArr)