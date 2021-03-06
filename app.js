//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash")

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//create an array to store title and blog textarea
const blogs =[];


app.get("/", (req,res)=>{
  res.render("home", {content:homeStartingContent, post: blogs})
})

app.get("/contact", (req,res)=>{
  res.render("contact", {contact:contactContent})
})

app.get("/about", (req,res)=>{
  res.render("about", {about:aboutContent})
})

app.get("/compose", (req,res)=>{
  res.render("compose")
})

app.post("/compose", (req,res)=>{
  let blog = {title:req.body.newpost, body:req.body.newcontent}
  blogs.push(blog)

  res.redirect("/")

})

app.get("/post/:postID", (req,res)=>{
  var requestTitle = _.lowerCase(req.params.postID)

  blogs.forEach((item)=>{

    var postTitle = _.lowerCase(item.title)

    postTitle===requestTitle? res.render("post", {postTitle:item.title, postContent:item.body}):console.log("");
  })
})
//an example to further understand route params
app.get("/section/:sectionID/field/:fieldID", (req,res)=>{
  res.write(req.params.sectionID)
  res.write("  ")

  res.write(req.params.fieldID)
    res.write("  ")
  res.send()
})





app.listen(3000, function() {
  console.log("Server started on port 3000");
});
