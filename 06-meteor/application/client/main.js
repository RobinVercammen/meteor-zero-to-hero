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


Template.Home.helpers({
  'lines': function () {
    return LineCollection.find({});
  }
});

Template.Home.events({
  'click button': function (event, template) {
    var value = template.find('input').value;
    LineCollection.insert({ text: value });
    template.find('input').value = '';
  }
});
