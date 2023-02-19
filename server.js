const http=require('http')
const fs=require('fs')
const fileContent=fs.readFileSync('pawan.html')

const server=http.createServer(()=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fileContent)
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("listing on port 8000")
});