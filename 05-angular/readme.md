# SPA - Angular

One of the most popular frameworks for building single page applications is Angular. Currently there are two versions of angular avaiable. Angular 1.x and Angular 2.0. They are both supported. Angular 2.0 is a little bit more complex to set up. Therefor we'll be demonstrating a simple angular 1.x application. Angular 2.0 and 1.x carry a lot of differences. They are build with a totaly different mindset, therefor knowing angular 2.0 doesn't grant you angular 1.x knowledge and vice versa.

In this step we'll rebuild the previous application using angular.

## Setup angular 1.x

Since angular is a library we need to include it like we include our own script. Angular is hosted on `https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js`. Therefor we'll modify our body to the following:

```html
<!-- omitted -->
<head>
    <title>This is the title of the document</title>
    <link rel="stylesheet" href="./style.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-route.min.js"></script>
</head>
<!-- omitted -->
```

We've added two dependencies, angular and angular-route. Angular route we need for binding our routes. 

Next up we need to define in our hmtl we are making it an angular app we do this by adding the `ng-app="nameofourapp"` attribute to our html tag.

```html
<html ng-app="spa">
<!-- omitted -->
</html>
```

So in this particular case we are naming our angular app `spa`.

For the use of routing our router needs to know where it can mount the html corresponding the url. We do this by adding the `ng-view` attribute to our content div in which we placed our previous html. The view now looks like the following:

```html
<html ng-app="spa">
    <head>
        <title>This is the title of the document</title>
        <link rel="stylesheet" href="./style.css">
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-route.min.js"></script>
    </head>
    <body>
        <div id="navigation">
            <ul>
                <li><a href="#/home">Home</a></li>
                <li><a href="#/contact">Contact</a></li>
                <li><a href="#/about">About</a></li>
            </ul>
        </div>
        <div ng-view>
            <!-- Here we'll host our spa -->
        </div>
        <div id="footer"><p><span>&copy; 2016</span>Coolest Company Ever</p></div>
        <script type="text/javascript" src="./script.js"></script>
    </body>
</html>
```

With our view in place we can proceed to the heavy lifting. Writing our javascript. Since we now have angular to take care of the nifty detail we don't need to wait for the page to render so our code becomes less complex.
We start by declaring our views just as before, in javascript. Dont mind the curly braces in the homepage, we'll get to that.

```javascript
var homePage = '<h1>Home</h1> <p>this is the homepage it\'s {{vm.date | date : \'HH:mm:ss\'}}</p>';
var contactPage = '<h1>Contact</h1><p>this is the contact page</p>';
var aboutPage = '<h1>About</h1><p>this is the about page</p>';
```

Now we need to do some standard angular bootstrapping. We need to make our application `spa` just the same as we declared in our html. Followed by its dependencies. We only got one dependency, the router. We register it with its name `ngRoute`, which can be found in the corrosponding documentation.

```javascript
angular.module('spa', ['ngRoute']);
```

Now we have registered the appliction to angular. Now we can map the corresponding pages to the routes. Again, dont mind the syntax in the home route, we'll get to that. Just remark `<home></home>` isn't a valid html tag.

```javascript
angular.
    module('spa').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {

            $routeProvider.
                when('/home', {
                    template: '{{myDate}}<home date="myDate"></home>'
                }).
                when('/contact', {
                    template: contactPage
                }).
                when('/about', {
                    template: aboutPage
                }).otherwise({
                    template: '<home date="myDate"></home>'
                });
        }
    ]);

```
Now we get to the nice stuff. We can now build specific angular components. So in this example we're building a custom `<home></home>` tag. Every component can be mounted with a controller. A controller is a piece of javascript which can modify the data. This data is represented in the view and will update the moment it changes in javascript. So before building the componentent. We start by declaring its functionallity in a controller. Within this controller we are going to set a date variable every second to the current date.

```javascript
// component
angular.module('spa').controller('homeController', function ($interval) {
    var vm = this;
    vm.date = new Date();
    $interval(function () {
        vm.date = new Date();
    }, 1000);
});
```

With the controller in place we can attach it to our component. Within this component we reference the previously defined homePage variable `var homePage = '<h1>Home</h1> <p>this is the homepage it\'s {{vm.date | date : \'HH:mm:ss\'}}</p>';`. Within this variable you'll notice the curly braces. These are angular's way to say, "hey substitute this with something from the controller". We use in this syntax some formatting to display the date nicely. Within the component we expose a date property through the bindings. That way we can reference it outside this component like we do in `{{myDate}}<home date="myDate"></home>`.

```javascript
angular.module('spa').component('home', {
    template: homePage,
    controllerAs: 'vm',
    controller: 'homeController',
    bindings: {
        date: '='
    }
});

```

That concludes our small jump into angular. We converted our homebrewn single page application in a fully functioning angular application.
