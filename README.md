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
