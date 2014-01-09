/**
 * Created by carstenanton on 08.01.14.
 */
var view={
  init:function(){
      view.context={};
      this.renderAbout();
      this.renderHome();
  },
  renderAbout:function(){
      view.aboutTemplate=Handlebars.compile($('#about-template').html());
      view.about=view.aboutTemplate(view.context);
  },
  renderHome:function(){
      view.homeTemplate=Handlebars.compile($('#home-template').html());
      view.home=view.homeTemplate(view.context);
  }
};

view.init();
