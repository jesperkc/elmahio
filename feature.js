$(function(){
    //svgNotificationTop = parseInt($('#new-error g').attr('transform').split(',')[1].split(')')[0]);
    //svgNotificationLeft = parseInt($('#new-error g').attr('transform').split(',')[0].split('(')[1]);
    //svgWidth = 400;
    //svgAnimateDelay = 3000;
    //svgAnimateDuration = 1000;
    //setInterval(slideEmailLeft, (svgAnimateDelay*2) + (svgAnimateDuration*2));
    
    
});
function slideEmailLeft(){
    $('#new-error g').css({"left": svgNotificationLeft});
    $('#new-error g')
        .animate(
          {"left": svgWidth},
          {duration: svgAnimateDuration,
           step: function( left ){
               this.setAttribute("transform", "translate("+left+", "+svgNotificationTop+")");
             }
           })
        .delay(svgAnimateDelay)
        .animate(
          {"left": svgNotificationLeft},
          {duration: svgAnimateDuration,
           step: function( left ){
               this.setAttribute("transform", "translate("+left+", "+svgNotificationTop+")");
             }
           })
        .delay(svgAnimateDelay);
    
    $('#daily-digest g').css({"left": -svgWidth});
    $('#daily-digest g')
        .animate(
          {"left": svgNotificationLeft},
          {duration: svgAnimateDuration,
           step: function( left ){
               this.setAttribute("transform", "translate("+left+", "+svgNotificationTop+")");
             }
           })
        .delay(svgAnimateDelay)
        .animate(
          {"left": -svgWidth},
          {duration: svgAnimateDuration,
           step: function( left ){
               this.setAttribute("transform", "translate("+left+", "+svgNotificationTop+")");
             }
           })
        .delay(svgAnimateDelay);
}