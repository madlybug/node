
const fs = require("fs");

// 同步读取
// let data = fs.readFileSync("read.txt", (err, data) => {
//     console.log("?", data.toString())
// });
// console.log(data)
// console.log(data.toString())

// 异步读取文件
// fs.readFile('read.txt', (err, data) => {
//     console.log(data.toString())
// })

// promise方式异步读取
// const {
//     promisify
// } = require("util"); // node内置方法库
// const readFile = promisify(fs.readFile);
// readFile('read.txt').then(data => {
//     console.log(data.toString())
// })

// async await
// const {
//     promisify
// } = require("util"); // node内置方法库
// const readFile = promisify(fs.readFile);
// async function mypro(){
//     let data = await readFile('read.txt')
//     console.log(data.toString(), 12313)
// }
// mypro()


function myReadFile(file){
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if(err) reject(err)
            resolve(data) 
        })
    })
}
myReadFile('read.txt').then((data) => {
    console.log(data.toString())
}, (err) => {
    console.log(err)
})