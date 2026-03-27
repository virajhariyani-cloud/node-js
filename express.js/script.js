const express = require('express')
const app = express()
const port = 3000
app.set('view engine','ejs');
app.set('views','views');

app.use(function(req,res,next){
    console.log("Middleware working");
    next();
})

// Page no Found using middleware
// app.use(function(req,res,next){
//     res.status(400).send("Page not Found");
//     next();
// })

app.get('/ ', (req, res) => {
  res.send('Page not found!')
  // res.redirect(`index.html`);
})

app.get('/', (req, res) => {
  // res.send(    'Hello World!')
  res.render(`404.ejs`);
})

app.get('/profile', (req, res) => {
  res.send('Hello from profile World!')
})

app.get('/profile/:username', (req, res) => {
  res.send(`Hello ${req.params.username}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// app.use(function(req,res,next){
//     // console.log("Middleware working");
//     res.redirect('404.ejs');
//     next();
    
// });


    