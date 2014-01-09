
var main={
    init:function(){
        new FastClick(document.body);
        this.register();
        view.init();
    },
    register:function(){
        $('#snap').on('click', function(){window.location='#about';});
        $('#back').on('click', function(){window.location='#';});
        $('#backi').on('click', function(){window.location='#';});
        $('#go').on('click', function(){window.location='#about';});


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


var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;

    if (hash === "#about") {
        page=view.about;
    } else if (hash === "#page2") {
        page=view.about;
    }
    else {
        page=view.home;
    }

    slider.slidePage($(page));
    main.register();

}

main.init();
route();