# The basics - javascript

Javascript will allow us in the first place to add interaction to our webpage. We'll start with some basic javascript paradigms. First as we'll be using a seperate javascript file we should reference it in our index.html. We should do it analogous to the css stylesheet. Since we don't like javascript making our webpage load slower we place the reference to javascript at the bottom of the body tag:

```html
<html>
    <!-- omitted -->
    <body>
        <!-- omitted -->
        <script type="text/javascript" src="./script.js"></script>
    </body>
</html>
```

## Variables

In javascript variables are mostly used to hold state. These can be assigned any kind of object.


### Numbers
In javascript a number can be assigned to a variable:

```javascript
var variable = 1;
variable = 5;
console.log(variable);
// prints 5 to the console
```

### Strings
In javascript text is represented as a string, a string starts and ends with single quotes: `'`

```javascript
var variable = 'this is text';
variable = variable + ' with more text';
console.log(variable);
// prints 'this is text with more text' to the console.
```

### Objects
In javascript there are composed objects. These are handly when data resorts with each other. An object is defined between parantheses `{}`

```javascript
var variable = {
    count: 5,
    type: 'cleaning'
};

variable.count  = variable.count +1;
variable.type = variable.type + ' powder';

var text = 'You will order ' + variable.count + ' times ' + variable.type;

console.log(text);
// prints 'You will order 6 times cleaning powder'
```

### functions
Functions are in our course used to represent an action.

```javascript
var addOneToVariable = function(variableInFunction){
    return variable + 1;
}

var variable = 1;
variable = addOneToVariable(variable);

console.log(variable);
// prints 2 to the console
```

## Add action to our site

We will touch a lot of javascript when we'll read an input field and add it to our content.

### Add an input field
We start by adding an input field and a button to our html.

```html
<!-- omitted -->
<div id="content">
    <input type="text">
    <button type="button">Add Text</button>
    <p>
        Here i am some content which is visible on the screen
    </p>
    <img src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg">
</div>
<!-- omitted -->
```

### Handle click on button

Once we click the button we would like to do something we start now with opening an alert box everytime we click on the button. In our included javascript file we write:

```javascript
window.onload = function () {
    document.querySelector('#content>button').addEventListener('click', function () {
        alert('button clicked');
    });
}
```

This will say `window.onload` equals a function. Now when the browser tells our javascript the page has rendered, we run our function. In this function we use the `document.querySelector` to select our button in the same way as we would using css. When the browser has found that button it will call `.addEventListener`. In the event listener we will subscribe to the `click` event. Now everytime someone clicks on that button the browser will run our function which will just call `alert('button clicked')`.

Now that we are able to listen for click events we should look for a way to read whats inside the input field.

### Read input field

```javascript
window.onload = function () {
    document.querySelector('#content>button').addEventListener('click', function () {
        // get value from document
        var valueInInputField = ' ' + document.querySelector('#content>input').value;
        // set the content to the content appended with the value we read from the input field
        document.querySelector('#content>p').innerHTML = document.querySelector('#content>p').innerHTML + valueInInputField;
        // make the field empty again
        document.querySelector('#content>input').value = ''; 
    });
}
```

Instead of alerting some text we now query the document again. We use `document.querySelector` again but give it the selector for our input field. Then just as we saw with objects we are able to read some property from it. In this case we would like to read the `value` property. We prepend this value with a space to separate the items. Next up we query the dom again but now to get the content of our `p` tag. We get its current content and replace it with it's current content appended with our value which we queried earlier. To finish we clear our input field by setting it's value to an empty string. 

## Much more javascript

Javascript is great for building applications. Because we are in the browser we get access to the `html` element and can manipulate them. This empowers us to build fully functioning client applications.
