console.log('script has loaded');

function scrolltobottom(){
  $(".screen").animate({ scrollTop: $(".screen").prop("scrollHeight") - $(".screen").height() }, 2500);
}

$(document).ready(function(){

  // ENTERING SEQUENCE

  setTimeout(function(){
    $('#firstMSG').fadeIn();
  }, 2500);

  setTimeout(function(){
    $('.slideOne').fadeIn();
  }, 1500);


function sendMessage(selection){
  var msg = $('#'+selection+' p').text();
  var reply = $('#'+selection).attr('data-reply');
  var route = $('#'+selection).attr('data-route');
  setTimeout(function(){  $('.typing-indicator').remove(); $('section').append("<div class='from-them'><p>" + msg + "</p></div><div class='clear'></div>"); }, 500);
  setTimeout(function(){  $('section').append("<div class='from-me'><p>" + reply + "</p></div><div class='clear'></div>"); }, 1750);
  setTimeout(function(){  $('section').append("<div class='typing-indicator'><span></span><span></span><span></span></div>");
    scrolltobottom()
 }, 2500);
}

  // FIRST SEQUENCE

 $('.slideOne li').click(function(){
   $('.slideOne').fadeOut().hide().next().show(7500);
    var selection = $(this).attr('id');
    var route = $('#'+selection).attr('data-route');
    switch (route) {
      case "AB":
        $('#secondoptC, #secondoptD').hide();
      break;

      case "C":
        $('#secondoptA, #secondoptB').hide();
      break;
    }
    sendMessage(selection);
   });


    // SECOND SEQUENCE

    $('.slideTwo li').click(function(){
      $('.slideTwo').fadeOut().hide().next().show(7500);
       var selection = $(this).attr('id');
       var route = $('#'+selection).attr('data-route');
       switch (route) {
         case "A":
           $('#thirdoptA, #thirdoptB, #thirdoptC, #thirdoptD').hide();
         break;

         case "B":
           $('#thirdoptE, #thirdoptC').hide();
         break;

         case "C":
           $('#thirdoptA, #thirdoptB, #thirdoptD, #thirdoptE').hide();
         break;

         case "D":
           $('#thirdoptA, #thirdoptB, #thirdoptD, #thirdoptE').hide();
         break;

       }
      sendMessage(selection)
      });

      // THIRD SEQUENCE

      $('.slideThree li').click(function(){
        $('.slideThree').fadeOut().hide().next().show(7500);
         var selection = $(this).attr('id');
         var route = $('#'+selection).attr('data-route');
         switch (route) {
           case "A":
             $('#thirdoptC, #thirdoptD').hide();
           break;

           case "C":
             $('#thirdoptA, #thirdoptB').hide();
           break;
         }
        sendMessage(selection)
        });



});
