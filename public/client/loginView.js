Shortly.loginView = Backbone.View.extend({
  className: 'login', // TODO: check if needs to be something specific (i.e.; creator for create)

  template: Templates['login'],

  // events: {
  //   'submit': 'shortenUrl' // TODO: create events specific to user submitting username and password
  // },

  render: function() {
    this.$el.html( this.template() );
    return this;
  }
});
