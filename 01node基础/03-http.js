const fs = require('fs');
const http = require('http');

let server = http.createServer((req, res) => {
    let {
        url,
        method
    } = req;
    if(url == '/index' && method == "GET"){
        fs.readFile('index.html', (err,data)=> {
            if(err){
                res.writeHead(500, {
                    "Content-Type": "text/plain;charset=UTF-8"
                })
                res.end("server Error")
            }
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html")
            res.end(data)
        })
    }else if(url == '/user' && method == 'GET'){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({name: 'baby'}))
    }else {
        res.end('404')
    }
})
server.listen(4000, () => {
    console.log("server is on localhost:4000")
})







// let serve = http.createServer((req, res) => {
//     let {
//         url,
//         method
//     } = req;
//     if(url == "/index" && method == "GET"){
//         fs.readFile('index.html', (err, data) => {
//             if(err){
//                 res.writeHead(500, {
//                     "Content-Type": "text/plain;charset=UTF-8"
//                 })
//                 res.end("Server Error")
//             }
//             res.statusCode = 200;
//             res.setHeader("Content-Type","text/html")
//             res.end(data)
//         })
//     }else if(url == "/users" && method == "GET"){
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json")
//         res.end(JSON.stringify({name: "wangyi"}))
//     }else {
//         res.end('404');
//     }
// })
// serve.listen(3000)