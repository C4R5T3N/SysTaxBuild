/**
 * Created by carstenanton on 08.01.14.
 */
var view={
  init:function(){
      view.context={};
      app.showAlert('alert');
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
view.about =
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Robot</h1></div>' +
        '<div class="scroller">' +
        '<div class="robot">' +
        '<iframe id="iframe"  style="width: 100px; height: 100px;" seamless="seamless" src="http://www.systax.org"></iframe>'+
        '</div>' +
        '</div>' +
        '</div>';