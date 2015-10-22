WebFontConfig = {
    google: {
        families: ['Roboto:100,300,500,900', 'Quicksand:400,700'],
        text: 'abcdedfghijklmopqrstuvwxyz!.-\'' + 'abcdedfghijklmopqrstuvwxyz'.toUpperCase()
    },
  fontactive: function(familyName, fvd) {
    if (localStorage){
        localStorage.setItem("font-loaded",true);
    }
  },
};
(function () {
    /*if (localStorage){
        if (localStorage.getItem("font-loaded") == "true"){
            var wf = document.createElement('link');
            wf.href = '//fonts.googleapis.com/css?family=Roboto:100,300,500,900|Quicksand:400,700';
            wf.rel = 'stylesheet';
            wf.media = 'all';
            wf.onload = function(){
                document.head.parentNode.className = "wf-active";
            }
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
            
        }
    }else{*/
        var wf = document.createElement('script');
        wf.src = '../js/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    //}
    
})();
/*$(document).ready(function () {
    setTimeout(tang, 500);
});

function tang() {

    var rn = Math.floor((Math.random() * 150) + 60);
    var rs = Math.floor((Math.random() * 11) + 4);
    t = new Trianglify({
        //x_gradient: ["#EC9A2A", "#EC6028"], //umbraco colors
        x_gradient: ["#0da58e", "#0B8D8B"],
        //Trianglify.colorbrewer.Spectral[rs],
        noiseIntensity: 0,
        cellsize: rn
    });
    $(".trianglify").each(function () {
        trianglifyIt(this);
    })
}

function trianglifyIt(obj) {
    var pattern = t.generate($(obj).width(), $(obj).outerHeight());
    $(obj).css({
        'background-image': pattern.dataUrl
    });
}*/