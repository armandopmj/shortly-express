Shortly.signupView = Backbone.View.extend({
  className: 'signup', // TODO: check if needs to be something specific (i.e.; creator for create)

  template: Templates['signup'],

  // events: {
  //   'submit': 'shortenUrl' // TODO: create events specific to user submitting username and password
  // },

  render: function() {
    this.$el.html( this.template() );
    return this;
  }
});
