console.log(1)
setTimeout(()=>{
    console.log(2)
},0)
setTimeout(()=>{
    console.log(3)
},1000)
console.log(4)

/*
1
4
2
3     


*/