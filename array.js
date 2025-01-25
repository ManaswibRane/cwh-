let arr=[1,2,3,4,5]
let brr=[1,2,3,4,5]
console.log(arr)
console.log(arr.length)
console.log(arr.toString())
console.log(arr.join(" and "))
arr.pop()
arr.push("Harry")
arr.shift()
arr.unshift("Jack")
delete arr[2]
console.log(arr)

console.log(arr.concat(brr))
let numbers=[1,2,3,4,5]
numbers.splice(1,2)
console.log(numbers)
numbers.splice(1,2,111,222)
console.log(numbers)
let num=numbers.slice(1,3)
console.log(num)
