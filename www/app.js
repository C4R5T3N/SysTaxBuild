/*
window.addEventListener('load', function () {
    new FastClick(document.body);
    app.register();
}, false);
var app = {
    register:function(){
        $('#snap').on('click', function(){window.location='#WebView';});
        $('#visit').on('click', function(){window.location='#WebView';});
    }
}
// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var homePage =
    '<div>' +
        '<div class="header"><h1>SysTaxApp</h1></div>' +
        '<div class="mypage">' +
                '<div class="page scroller">'+
                    '<button id="snap" type="button"  class="btn btn-primary app-btn">ARD.de</button>'+
                        '<p></p>'+
                    '<button id="visit" type="button" class="btn btn-primary app-btn">Visit Systax.org</button>'+
                '</div>'+
        '</div>' +
    '</div>';


var WebView=
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Robot</h1></div>' +
         '<div class="page scroller">' +
                '<iframe id="iframe" class="iframe" seamless="seamless" src="http://www.systax.org"></iframe>'+
            '</div>' +
    '</div>';


var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;

    if (hash=="#WebView"){
        page=WebView;
    }
    else {
        page = homePage;
    }
    slider.slidePage($(page));
    app.register();
}

// Primitive template processing. In a real-life app, use Handlerbar.js, Mustache.js or another template engine
function merge(tpl, data) {
    return tpl.replace("{{img}}", data.img)
              .replace("{{name}}", data.name)
              .replace("{{description}}", data.description);
}

route();
*/
/*
window.addEventListener('load', function () {
    new FastClick(document.body);
    $('#snap').on('click', function(){window.location='#mypage';});
}, false);
*/
var app={
    init:function(){
        new FastClick(document.body);
        this.register();

    },
    register:function(){
        $('#snap').on('click', function(){window.location='#mypage';});
        $('#back').on('click', function(){window.location='#';});
        $('#backi').on('click', function(){window.location='#';});

        this.abouttemplate=Handlebars.compile($('#about-template').html());
    },
    showAlert:function(msg){
        if(navigator.notification){
            //Signature: navigator.notification.alert(message, alertCallback, [title], [buttonName])
            navigator.notification.alert(msg, null, 'Warnung', 'OK');
        } else {
            alert(msg);
        }
    }
};
app.init();
app.context={};
app.about=app.abouttemplate(app.context);
// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var homePage =
    '<div>' +
        '<div class="header"><h1>Page Slider</h1></div>' +
        '<div class="scroller">' +
        '<ul class="list">' +
        '<li><a href="#page1"><strong>Build Bot</strong></a></li>' +
        '<li><a href="#page2"><strong>Medi Bot</strong></a></li>' +
        '<li><a href="#page3"><strong>Ripple Bot</strong></a></li>' +
        '</ul>' +
        '<button id="snap" type="button"  class="btn btn-primary app-btn">ARD.de</button>'+
        '</div>' +
        '</div>';

var detailsPage =
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Robot</h1></div>' +
        '<div class="scroller">' +
        '<div class="robot">' +
        '<iframe id="iframe"  style="width: 100px; height: 100px;" seamless="seamless" src="http://www.systax.org"></iframe>'+
        '</div>' +
        '</div>' +
        '</div>';


var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;

    if (hash === "#page1") {
        page = merge(detailsPage, {img: "buildbot.jpg", name: "Build Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    } else if (hash === "#page2") {
        page = merge(detailsPage, {img: "medibot.jpg", name: "Medi Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    } else if (hash === "#page3") {
        page = merge(detailsPage, {img: "ripplebot.jpg", name: "Ripple Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    } else if (hash=="#mypage") {
        page= app.about;
    }
    else {

        page = homePage;
//        slider.slide($(homePage), "left");
    }

    slider.slidePage($(page));
    app.register();

}

// Primitive template processing. In a real-life app, use Handlerbar.js, Mustache.js or another template engine
function merge(tpl, data) {
    return tpl.replace("{{img}}", data.img)
        .replace("{{name}}", data.name)
        .replace("{{description}}", data.description);
}

route();
