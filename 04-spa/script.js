window.onload = function () {
    // function to set the content div's content to the supplied parameter'
    var setContent = function (content) {
        document.querySelector('#content').innerHTML = content;
    }

    // emulate pages coming from a webserver / getting data from somewhere
    var homePage = '<h1>Home</h1> <p>this is the homepage</p>';
    var contactPage = '<h1>Contact</h1><p>this is the contact page</p>';
    var aboutPage = '<h1>About</h1><p>this is the about page';

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
