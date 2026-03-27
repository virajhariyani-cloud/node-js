const http=require('http');
const fs =require['fs'];
const server=http.createServer((req,res)=>{
const url=req.url;
const method=req.method;
// console.log(req.url,req.method,req.headers);
if (url==='/'){
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head>HTTP REQUEST</head>');
res.write('<body><form action="" method="POST"><input type="text" value="Message"></input></from></body>');
res.write('</html>');
return res.end();
} 

if (url==='/message'&& method=='POST')
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head>HTTP REQUEST</head>');
res.write('<body><h1>Hello! Welcome to the Node SERVER!</h1></body>');
res.write('</html>');
return res.end();

});

server.listen(3000)