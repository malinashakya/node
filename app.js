const express= require("express")//requiring express package
const app=express() //storing it in app, app vaneko variable throughout project use garxam

//I'm using ejs what you have to perform do it.
app.set("view engine","ejs")

//If we used pug instead of ejs
//app.set("view engine","pug")
//localhost:3000/ halda aaune output
app.get('/',(req,res)=>
{
    // res.send("<h1>hello worldheheabba!!</h1>")
   //home.ejs page ma lagdeu vaneko
    res.render("home.ejs")
})

//localhost:3000/contact halda aaune output
app.get('/contact',(req,res)=>
{
    res.send("contact page")
}
)



//localhost:3000/about halda aaune output
app.get('/about',(req,res)=>
{
    res.render("about.ejs")
}
)
//port number-> room number jastai
app.listen(3000,()=>
{
    console.log("NodeJS Project has started on port 3000")
}
)