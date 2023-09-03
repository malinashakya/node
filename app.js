const express= require("express")//requiring express package
const app=express() //storing it in app, app vaneko variable throughout project use garxam

//localhost:3000/ halda aaune output
app.get('/',(req,res)=>
{
    res.send("<h1>hello world</h1>")
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
    res.send("about page")
}
)
//port number-> room number jastai
app.listen(3000,()=>
{
    console.log("NodeJS Project has started on port 3000")
}
)