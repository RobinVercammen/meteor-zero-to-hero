# Meteor

## Install meteor.

Since meteor is using server side technology we cant just past a script tag on our html. We need to install the meteor runtime on our machine. We do this by going to the [meteor install page](https://www.meteor.com/install) and follow the instructions provided for your operating system.

## Create our first meteor application

We can create a meteor application by running the `meteor create nameofyourapplication` command. With this meteor will create all the nessesary files you need for your application. I've created an application named `application`. Within the folder meteor created you'll find two folders. A `client` folder and a `server` folder. In this application folder we can run the `meteor` command to start our application. When we run it we see our terminal printing the following:

```bash
Robins-MacBook-Pro:06-meteor robin$ meteor create application
Created a new Meteor app in 'application'.    

To run your new app:                          
  cd application                              
  meteor                                      
                                              
If you are new to Meteor, try some of the learning resources here:
  https://www.meteor.com/learn                
                                              
Robins-MacBook-Pro:06-meteor robin$ cd        
application/ readme.md    
Robins-MacBook-Pro:06-meteor robin$ cd application/
Robins-MacBook-Pro:application robin$ meteor
[[[[[ ~/Projects/meteor zero to hero/06-meteor/application ]]]]]

=> Started proxy.                             
=> Started MongoDB.                           
=> Started your app.                          

=> App running at: http://localhost:3000/
```

If we now browse to the url specified in the result of the command. We are welcomed by meteor.

## Port our existing single page application to meteor.

In our client folder meteor has created 3 files.

```bash
/client
    main.css
    main.html
    main.js
```

For starters we are going to copy the content of our css file from the previous module.

`main.css` now looks like:
```css
/* CSS declarations go here */
#navigation{
    background-color: gray;
    padding: 0px;
    margin: 0px;
}

#navigation>ul{
    list-style-type: none;
    padding: 10px;
}

#navigation>ul>li{
    display: inline;
    background-color: black;
    margin: 0;
    padding: 10px;
}
#navigation>ul>li>a{
    color: white;
}

#content{
    border: 1px solid black;
    padding: 10px;
}

#content>p{
    text-align: center;
}

#content>img{
    display: block;
    margin-left: auto;
    margin-right: auto;
}

#footer{
    text-align: center;
}

#footer>p{
    color: #AAAAAA;
}
```

For our html we are going to copy everything between the html tags from our original spa module but we strip out all the script and link tags. We strip them out because meteor will place them there when nessesary. This means that when you add a file meteor will notice it and process it into the served html. Meteor's `main.html` should look like the following:

```html
<head>
  <title>This is the title of the document</title>
</head>

<template name="ApplicationLayout">
  <div id="navigation">
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </div>
  <div id="content">
    <!-- yield is used by the router to mount the template corresponding the url -->
    {{> yield}}
  </div>
  <div id="footer">
    <p><span>&copy; 2016</span>Coolest Company Ever</p>
  </div>
</template>
```
Notice we changed the `body` tag to a `template` tag with a name. Meteor generates it's own body and the router, which we'll configure later, will substitude the body with the corresponding template. 
### Router
So that was the easy part. Now we'll install a router just as we did with angular. Only now we don't include a script tag referencing the router but we install it via a command. `meteor add iron:router`.

Now we can wire templates to routes in our javascript. Clear out the `main.js` file which meteor created and wire our views to routes as follows:

```javascript
var renderTemplate = function (templateName) {
  return function () {
    return this.render(templateName);
  }
}

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', renderTemplate('Home'));
Router.route('/home', renderTemplate('Home'));
Router.route('/about', renderTemplate('About'));
Router.route('/contact', renderTemplate('Contact'));
```

So this is our definition of our routes, you'll notice we are referring to a template name. Before we wrote some html in our javascript. With meteor we can easily write it in our html with meteor's custom `template` tag. The first template tag we've written is the ApplicationLayout. Here we conifigured it so that the router uses it for substitution
In `main.html` we append the following templates:

```html
<template name="Home">
    <h1>Home</h1>
    <p>this is the homepage</p>
</template>

<template name="About">
    <h1>Contact</h1>
    <p>this is the contact page</p>
</template>

<template name="Contact">
    <h1>About</h1>
    <p>this is the about page</p>
</template>
```

When we now browse to our running [meteor application](http://localhost:3000) we see the same result as with our spa module. 
