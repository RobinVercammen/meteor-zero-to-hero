# The basics - css

Css is a style sheet. It lets you specify what an element needs to look like. It does this by using a selector. There are many different selectors but we'll start with the most common ones. As we stated in the html basics we should include a stylesheet in our html we do this in the head tag.
Because the file where the css resides is at the same level as the html file we reference it using `./` to indicate the browser should search on the same pad.

```html
<html>
    <head>
        <title>This is the title of the document</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <!-- ommited for brevety -->
</html>
```

## The html elements

An html element can be used as a selector. Then the style will be applied to all matches. Let's look at an example:
We'll be styling the example from the html intro.

```css
li{
    background-color: red;
}
```

If we save this stylesheet we will be appling a red background to all the li items present on the page.

## Classes

Applying styles to all elements might not seem like a good idea. We can make our own components with a class. A class is representented with a `.` preceding the classname.

```css
.red-background{
    background-color: red;
}
```

In html we'll be using it like this:

(excerpt from hmtl intro)
```html
<!-- excerpt -->
<ul>
    <li><a href="/home">Home</a></li>
    <li class="red-background"><a href="/contact">Contact</a></li>
    <li><a href="/about">About</a></li>
</ul>
<!-- end excerpt -->
```

By doing this only the second `li` item will have a red background

## Id

A class can be used on many different elements. But what if we want to identify one single element. We can use an id instead. This will allow us to refer to our elements as one. An id is formed by a `#` preceding the id name.

```css
#navigation{
    background-color: gray;
}
#content{
    border: 1px solid black;
}
#footer{
    text-align: center;
}
```

Remember our three divs from the html basics? We can now identify our three divs with an id so we can logicly separate the content

```html
<div id="navigation">
    <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
    </ul>
</div>
<div id="content">
    <!-- logical piece two like a content bar -->
    <p>
        Here i am some content which is visible on the screen
    </p>
    <img src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg">
</div>
<div id="footer"><p><span>&copy; 2016</span>Coolest Company Ever</p></div>
```

## Combine selectors

Suppose in the previous example we want to make text in the footer which is encapsulated in a p tag lighter but not on all p tags on the page. We could write a class for it or we can combine selectors!

```css
#footer>p{
    color: #AAAAAA;
}
```

## Our stylesheet

```css
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

## Many more selectors
For us to get started the above described selectors are good to go. If you want to know every last bit of css check [here](https://www.w3.org/wiki/CSS_basics)
