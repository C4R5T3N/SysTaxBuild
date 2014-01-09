/**
 * Created by carstenanton on 08.01.14.
 */
var view={
  init:function(){
      view.context={};
      this.renderAbout();
      this.renderHome();
      this.renderIframe();
  },
  renderAbout:function(){
      view.aboutTemplate=Handlebars.compile($('#about-template').html());
      view.about=view.aboutTemplate(view.context);
  },
  renderHome:function(){
      view.homeTemplate=Handlebars.compile($('#home-template').html());
      view.home=view.homeTemplate(view.context);
  },
  renderIframe:function(){
      view.iframeTemplate=Handlebars.compile($('#iframe-template').html());
      view.iframe=view.iframeTemplate(view.context);
  }
};

view.init();
