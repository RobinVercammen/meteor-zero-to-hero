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
