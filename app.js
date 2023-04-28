// template literals.

// let fname = 'Saad'
// let lname = 'Ali'
// document.write('My first name is '+fname+' and my last name is '+lname+"<br>")

// document.write(`My first name is ${fname} and <br> my last name is ${lname}`)


// destructuring

// let arr = ['Saad','Ali','Hamza','Jalal']

// let [a,b,c,d] = arr

// a = 'Kangaro'

// document.write(a)


// document.write(c)


// let obj = {
//     name: 'Saad',
//     age: 12,
//     roll: 244
// }

// let { name, age, roll } = obj
// document.write(age)



// default parameters

// function foo(a=6,b=10){
//     return a + b
// }
// document.write(foo(2,2))

// spread operators

// let obj = {
//     name: 'Saad',
//     age: 12,
//     roll: 244
// }

// let obj1 = {
//     ...obj,
//     sec: 'A'
// }

// console.log(obj)


// arrow functions

// function foo(a){
//     return a+ b
// }
// foo()

// let foo = a => a

// alert(foo())

let ammi_ki_razamandi = false

let prom = new Promise((resolve,reject)=>{
    
    if(ammi_ki_razamandi == true){
        resolve('Shaadi Hojayegi')
    }
    else{
        reject('Shaadi Nahi ho Payegi')
    }
}).then((pass)=>{
    document.write(pass)
})
.catch((err)=>{
    document.write(err)
})