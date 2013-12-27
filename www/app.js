window.addEventListener('load', function () {
    new FastClick(document.body);
    app.register();
}, false);
var app = {
    register:function(){
        $('#snap').on('click', function(){alert("klappt"); window.location.hash="#WebView"});
        $('#visit').on('click', function(){alert("klappt"); window.location.hash="#WebView"});
    }
}
// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var homePage =
    '<div>' +
        '<div class="header"><h1>SysTaxApp</h1></div>' +
        '<div class="mypage">' +
                '<div class="mainmenue">'+
                    '<button id="snap" type="button"  class="btn btn-primary app-btn">ARD.de</button>'+
                        '<p></p>'+
                    '<button id="visit" type="button" class="btn btn-primary app-btn">Visit Systax.org</button>'+
                '</div>'+
        '</div>' +
    '</div>';


var WebView=
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Robot</h1></div>' +
            '<div class="mypage">' +
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