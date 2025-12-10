const { addToCart,addToQrt, name } = require("./cartModule")

console.log('Welcome to Panchagarh')
console.log(30+40)
let arr = [10,20,30,40,50,60]
arr.forEach((index,value)=>{
    console.log(index,value)
})
console.log(addToCart())
console.log(addToQrt())
console.log(name)