# The basics - Html

The web is based on different types of technologies. One of these is Html. Html is the markup language of the web. With Html we are able to define what the webpage contains. While doing that we are able to arrange our information.

## Html

An html document is defined inside a file by the content. Normaly we use the extension `.html` to identify an html document. An html block is represented below. Only one html block per page is required.

```html
<html>
    <!-- content -->
</html>
```

## Head

The head tag is defined just one level below the html tag. Inside this tag resides information about your webpage. This can be the title of the document, how the document should render on mobile or other extra information. When using exteral stylesheets or markup it is also referenced in the head.

```html
<html>
    <head>
        <!-- content -->
    </head>
</html>
```
## Body

Just as the head tag, the body tag is defined one level below the html tag. This tag defines the real content of the page. Inside this tag you will be able to structure your own content.
```html
<html>
    <head>
        <title>This is the title of the document</title>
    </head>
    <body>
        <!-- Here comes the real content the user will see, this will be rendered by the browser -->
    </body>
</html>
```

## Div

The first constructoral element is the div tag, this element allows you to chop up your page in differen logical components.
```html
<html>
    <head>
        <title>This is the title of the document</title>
    </head>
    <body>
        <div><!-- logical piece one like a header bar --></div>
        <div><!-- logical piece two like a content bar --></div>
        <div><!-- logical piece three like a footer bar--></div>
    </body>
</html>
```

## P (paragraph)

This element is ideal for displaying text.

```html
<html>
    <head>
        <title>This is the title of the document</title>
    </head>
    <body>
        <div><!-- logical piece one like a header bar --></div>
        <div>
            <!-- logical piece two like a content bar -->
            <p>
                Here i am some content which is visible on the screen
            </p>
        </div>
        <div><!-- logical piece three like a footer bar--></div>
    </body>
</html>
```

## ul / ol (unordered / ordered lists)

Usefull for displaying lists. Unordered lists will display icons next to the text, ordered will display a number next to the item. Inside these lists you have to use `li` per item.

```html
<html>
    <head>
        <title>This is the title of the document</title>
    </head>
    <body>
        <div>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
        <div>
            <!-- logical piece two like a content bar -->
            <p>
                Here i am some content which is visible on the screen
            </p>
        </div>
        <div><!-- logical piece three like a footer bar--></div>
    </body>
</html>
```

## img (images)

An image is best display by using the image tag. this image tag has a source property which needs to refer to the image

```html
<html>
    <head>
        <title>This is the title of the document</title>
    </head>
    <body>
        <div>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
        <div>
            <!-- logical piece two like a content bar -->
            <p>
                Here i am some content which is visible on the screen
            </p>
            <img src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg">
        </div>
        <div><!-- logical piece three like a footer bar--></div>
    </body>
</html>
```

## a (reference other pages)

Refering to another page is done through the a tag. These will be defaulted to blue underlined text which when clicked redirects the user to the given page in the href attribute.

```html
<html>
    <head>
        <title>This is the title of the document</title>
    </head>
    <body>
        <div>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
        <div>
            <!-- logical piece two like a content bar -->
            <p>
                Here i am some content which is visible on the screen
            </p>
            <img src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg">
        </div>
        <div><!-- logical piece three like a footer bar--></div>
    </body>
</html>
```

## Many other tags

For our application we can get away only knowing of the elements mentioned above. There are many other tags, a complete list can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

```html
<html>
    <head>
        <title>This is the title of the document</title>
    </head>
    <body>
        <div>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
        <div>
            <!-- logical piece two like a content bar -->
            <p>
                Here i am some content which is visible on the screen
            </p>
            <img src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg">
        </div>
        <div><p><span>&copy 2016</span></p></div>
    </body>
</html>
```
