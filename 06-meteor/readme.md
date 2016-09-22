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

### Write to the database.
When meteor launches it spins up a MongoDB database. Wouldn't it be nice if we could store some data. Well strive towards a similar experience as in our javascript module where we added text to a div. Now we'll save it to the database and then list it.

Meteor uses a concept called Collections to save our data. What we first need to do is make a collection. We do this by making a `lineCollection.js` file in a newly made `imports` folder.

```bash
/client
/imports
    lineCollection.js
/server
```

Within this file we write: 

```javascript
export default LineCollection = new Mongo.Collection('lines');
```

This will make a new collection which we'll be able to use in our own code. But first we need to tell the server to make this collection avaible. We do this by importing this collection in the `server.js` file.

```bash
/server
    server.js
```

```javascript
import { Meteor } from 'meteor/meteor';
import LineCollection from '../imports/lineCollection';

Meteor.startup(() => {
  // code to run on server at startup
});
```

So here we've added the `import LineCollection from '../imports/lineCollection'`

With all this in place we can use the collection in our client. So within our main.js of the client

```bash
/client
    main.js
```

we are again import the collection `import LineCollection from '../imports/lineCollection'`. Next up we'll use its magic.

### View binding

Withing meteor there are two type of items to attach to the frontend. A helpers function and a events function. Helpers allow you to write data to the view, while events capture data from the view. In this example we'll first modify our main.html file so that we include a button and input field and can display data from the helper:

```html
<--! omitted -->
<template name="Home">
  <h1>Home</h1>
  <p>this is the homepage</p>
  <input type="text">
  <button>Add text</button> 
  {{#each line in lines}}
  <div>
    <p>{{line.text}}</p>
  </div>
  {{/each}}
</template>
<--! omitted -->
```

what we see here is similar syntax to our angular module. Beneath the button we included an `each` statement. This statement will loop over all the different lines which well add to the database. These lines have a text property which gets printed repeatedly.

To allow this kind of interaction we need to define the events and helpers in our javascript file. We can define events and helpers per template so in this case we are going to define them on the home template.

```javascript
import LineCollection from '../imports/lineCollection';

// router configuration
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

// these reference the Home template
Template.Home.helpers({
    // add a property called lines which we can use in withing the template
  'lines': function () {
    // reference the Linecollection and do a find. This will return all the lines from the collection.
    return LineCollection.find({});
  }
});

Template.Home.events({
// the function specified will be called
  'click button': function (event, template) {
    // read the value from the input field.
    // Within the find method we can use the same selectors as we discussed before.
    // This will select all input field but since we only have one, no problem  
    var value = template.find('input').value;
    // insert a new entry in the collection. We use the value as the text property. This text property gets read by the each statement in the template.
    LineCollection.insert({ text: value });
    // clear the input field by settings its value to an empty string
    template.find('input').value = '';
  }
});
```
We've now succesfully implemented our previous modules in Meteor. We've leveradged Meteor power to quickly build applications with minimal hassle and are working completly reactive. Open a second browser window, add text in one screen and see it instantainiously update on the second screen.
