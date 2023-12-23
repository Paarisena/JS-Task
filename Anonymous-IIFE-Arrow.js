//Odd numbers
//1. Anonymous Function
let arr = function(){
    let number = [1,2,3,4,5,6,7,8,9,10];
    let arr= number.filter((num)=> num % 2 === 1)
    console.log(arr)
} 
arr()

//2.IIFE

(function(){
    let number = [1,2,3,4,5,6,7,8,9,10];
    let ar= number.filter((num)=> num % 2 === 1)
    console.log(ar)
})();

//3.Arrow function

let v = (number)=> number.filter((num)=> num % 2 === 1)
console.log(v([1,2,3,4,5,6,7,8,9,10]))

//title upper case

//1. Anonymous Function
let st = function(){
    let title = ["paari"]
    let out = title.map(title => title.toUpperCase())
    console.log(out)
}
st()

//2.IIFE
(function(){
    let title = ["paari"]
    let out = title.map(title => title.toUpperCase())
    console.log(out)
})()

//3.Arrow function

let v = (title)=> title.map(title => title.toUpperCase())
console.log(v(["paari"]))


//sum of all number in array

//1. Anonymous Function
let str = function(){
    let num = [1,2,3,4,5]
    sum = 0
    num.forEach(x=> {
        sum += x
    });
    console.log(sum)
}
str()

//2.IIFE

(function(){
    let num = [1,2,3,4,5]
    sum = 0
    num.forEach(x=> {
        sum += x
    });
    console.log(sum)
})()

//3.Arrow function
let calc = () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.reduce((prev, cur) => prev + cur);
      console.log(result)
}
calc()


//Return all the palindromes in an array

//1. Anonymous Function
let main = function(){
    let arr1 = ["madam"]
    let strsplit = arr1[0].split('').reverse().join('')
    if (arr1[0] === strsplit){
        console.log(true)
    
    }else{
        console.log(false)
    }
    }
    main()

//2.IIFE

(function(){
    let arr1 = ["madam"]
    let strsplit = arr1[0].split('').reverse().join('')
    if (arr1[0] === strsplit){
        console.log(true)
    
    }else{
        console.log(false)
    }
    })()

//3. Arrow

let v=()=>{
    let arr1 = ["madam"]
    let strsplit = arr1[0].split('').reverse().join('')
    if (arr1[0] === strsplit){
        console.log(true)
    
    }else{
        console.log(false)
    }
    }
v()
    
//Return median of two sorted arrays of the same size.

//1. Anonymous Function
    let array = function(){
        let a = [1,3]
        let b = [2,4]
        let arr1 = a.concat(b)
        arr1.sort((a,b)=>(a-b))
        let n = arr1.length
        if(n%2===0){
            console.log((arr1[n/2]+arr1[n/2 -1]))/2
        }else{
            console.log(arr1[Math.floor(n/2)])
        }
        }
        array()
//2.IIFE
(function(){
    let a = [1,3]
    let b = [2,4]
    let arr1 = a.concat(b)
    arr1.sort((a,b)=>(a-b))
    let n = arr1.length
    if(n%2===0){
        console.log((arr1[n/2]+arr1[n/2 -1]))/2
    }else{
        console.log(arr1[Math.floor(n/2)])
    }
    })()

//Remove duplicates from an array
//1. Anonymous Function
    let b = function(){
        let a = [1,2,3,3,4,4,8,8]
        console.log([...new Set(a)])
        }
        b()
//2.IIFE
(function(){
    let a = [1,2,3,3,4,4,8,8]
    console.log([...new Set(a)])
})()

//Rotate an array by k times

//1. Anonymous Function
let arrayroatation = function(){
    let a = [1,2,3,4,5,6]
    let k = 3
    for(i=0;i<k;i++)
    a.unshift(a.pop())
    console.log(a)
}
arrayroatation()


//2.IIFE
(function(){
    let a = [1,2,3,4,5,6]
    let k = 4
    for(i=0;i<k;i++)
    a.unshift(a.pop())
    console.log(a)
}
)()