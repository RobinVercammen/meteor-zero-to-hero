# A single page application

What we've build until now really is in essence a single page application. A single page application is known for its speed and versatility. We'll now build several pages into our application. Normally in a non-spa we request every page at the server in its full glory. With a spa we request a part of the view or just the data which is needed to render the view. In our example we'll write our 3 pages (Home, About, Contact). These will be rendered when we click the corresponding links.

## Reimplementing our index page
Since we are going to dynamicly change our content we'll be clearing our previous html file's content. It will look now like below

```html
<html>
    <head>
        <title>This is the title of the document</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div id="navigation">
            <ul>
                <li><a href="#/home">Home</a></li>
                <li><a href="#/contact">Contact</a></li>
                <li><a href="#/about">About</a></li>
            </ul>
        </div>
        <div id="content">
            <!-- Here we'll host our spa -->
        </div>
        <div id="footer"><p><span>&copy; 2016</span>Coolest Company Ever</p></div>
        <script type="text/javascript" src="./script.js"></script>
    </body>
</html>
```

As you'll see we'll be replacing the content of the div with id content. We also changed the href tags. If we are preceding a link with `#` our html won't request a new page but just keep navigating on this page.
But by using this href we can catch those clicks as follows `document.querySelector('a[href="#/home"]')`. What we're trying to accomplish is when we press the about page the content get's changed to the about page content. Now for showing the purpose of a single page application i've hardcoded the content in a javascript variable. These variables `homePage, contactPage and aboutPage` normally don't get a string assigned. They get their data by making http request to a server. But as we are illustrating the mechanics of a single page application we can go further with hardcoding them.


Just as before we'll be waiting for the windows to load before taking action. I started with declaring a `setContent` function which accepts one parameter named `content`. This function will make the call to the browser to update the inner html of the div with id `#content`. By declaring this function we can later in code refer to it easily without retyping the `document.querySelector...` syntax. 
With our function in place we now declare three variables to hold our differt pages. Next up we set the initial content to the homepage. We finish by attaching 3 event listeners, just as we did in the previous session with the button. If the user now clicks any of the three links, our `setContent` function gets called with the corresponding parameter to fill the div's content.

```javascript
window.onload = function () {
    // function to set the content div's content to the supplied parameter'
    var setContent = function (content) {
        document.querySelector('#content').innerHTML = content;
    }

    // emulate pages coming from a webserver / getting data from somewhere
    var homePage = '<h1>Home</h1> <p>this is the homepage</p>';
    var contactPage = '<h1>Contact</h1><p>this is the contact page</p>';
    var aboutPage = '<h1>About</h1><p>this is the about page</p>';

    // set initial content
    setContent(homePage);

    document.querySelector('a[href="#/home"]').addEventListener('click', function () {
        setContent(homePage);
    });
    document.querySelector('a[href="#/contact"]').addEventListener('click', function () {
        setContent(contactPage);
    });
    document.querySelector('a[href="#/about"]').addEventListener('click', function () {
        setContent(aboutPage);
    });
}
```

We can take it a bit further by making it more dynamic as follows. This allows for greater extensibility and empowers javascript design.

```javascript
var home = '<h1>Dit is de home pagina</h1>';
var contact = '<h1>Dit is de contact pagina</h1>';
var about = '<h1>Dit is de about pagina</h1>';

var replace = function (id, content) {
    document.querySelector(id)
        .innerHTML = content;
}

var contentReplace = function (content) {
    replace('#content', content);
}

var documentClickQuerySelector = function (selector, functie) {
    document.querySelector(
        selector)
        .addEventListener('click', functie);
}

var routes = [];

var registerRoute = function (route, content) {
    routes.push({
        route: route,
        content: content
    });
}

var matchRouteWithUrl = function () {
    var url = window.location.href;
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i];
        if (url.indexOf(route.route) > -1) {
            contentReplace(route.content);
            return;
        }
    }
    contentReplace(home);
}

window.onload = function () {
    registerRoute('home', home);
    registerRoute('about', about);
    registerRoute('contact', contact);

    matchRouteWithUrl();

    window.onhashchange = function(){
        matchRouteWithUrl();
    }
}
```
