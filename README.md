# a challenge to make a blog site with ejs templates

-------------

while using ejs parts, you can change href to the route in order to jumping around pages.
```
<ul class="nav navbar-nav navbar-right">
  <!-- 6 -->
  <li id="home"><a href="/">HOME</a></li>
  <li id="about"><a href="/about">ABOUT US</a></li>
  <li id="contact"><a href="/contact">CONTACT US</a></li>
</ul>


app.get("/", (req,res)=>{
  res.render("home", {content:homeStartingContent})
})

app.get("/contact", (req,res)=>{
  res.render("contact", {contact:contactContent})
})

app.get("/about", (req,res)=>{
  res.render("about", {about:aboutContent})
})

```
-----
for challenge14 you can use eitehr for loop or forEach
```
<% for (let i =0; i < post.length; i++) {%>
  <% console.log(post[i].title)%>
<%}%>

<%post.forEach((item)=>{%>
  <%console.log(item.title)%>
<%})%>
```
-----
you can use `rs` to force restart nodemon when it is running.
---
You can use route params
```
app.get("/post/:postID", (req,res)=>{
  var requestTitle = _.lowerCase(req.params.postID)

  blogs.forEach((item)=>{

    var postTitle = _.lowerCase(item.title)

    postTitle===requestTitle? res.render("post", {postTitle:item.title, postContent:item.body}):console.log("");
  })
})



```
for more details, see [route params](https://expressjs.com/en/guide/routing.html)
----
## intro to lodash

install lodash in npm   `npm i lodash`
require lodash in node  `const _ = require('lodash')`
use lodash `_.lowerCase()`
----

## the final part read more challenge14
you can use anchor tag and together with route params previously set
```

app.get("/post/:postID", (req,res)=>{



<a href="/post/<%=item.title%>">Read more</a>
```

an example to further understand route params
```
app.get("/section/:sectionID/field/:fieldID", (req,res)=>{
  res.write(req.params.sectionID)
  res.write("  ")

  res.write(req.params.fieldID)
    res.write("  ")
  res.send()
})
```
