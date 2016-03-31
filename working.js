console.log('script has loaded');

function scrolltobottom(){
  $(".screen").animate({ scrollTop: $(".screen").prop("scrollHeight") - $(".screen").height() }, 3000);
}

$(document).ready(function(){

  // ENTERING SEQUENCE

  setTimeout(function(){
    $('#firstMSG').fadeIn();
  }, 1500);
  // setTimeout(function(){
  //   $('.slideOne').fadeIn();
  // }, 3500);
  setTimeout(function(){
    $('.slideOne').fadeIn();
  }, 2500);

  // do we need an explinatoin or start button?

  // $('.begin').click(function(){
  //
  // });

  // FIRST SEQUENCE
 // FIRST OPTION A

 $('.slideOne li').click(function(){
   $('.slideOne').fadeOut().hide().next().show(2500);
   setTimeout(function(){
     var message = $('.firstoptAtext').text();
   $('#firstMSG').replaceWith("<div class='from-them'><p>" + message + "</p></div><div class='clear'></div>");
 }, 500);
   setTimeout(function(){
     $('section').append("<div class='right-typing-indicator'><span></span><span></span><span></span></div>");
   }, 1750);
 })

  $('#firstoptA').click(function(){
    $('.slideOne').fadeOut().hide().next().show(2500);
    setTimeout(function(){
      var message = $('.firstoptAtext').text();
    $('#firstMSG').replaceWith("<div class='from-them'><p>" + message + "</p></div><div class='clear'></div>");
  }, 500);
    setTimeout(function(){
      $('section').append("<div class='right-typing-indicator'><span></span><span></span><span></span></div>");
    }, 1750);
  });

  // FIRST OPTION B
   $('#firstoptB').click(function(){
     $('.slideOne').fadeOut().hide().next().show(2500);
     setTimeout(function(){
       var message = $('.firstoptBtext').text();
     $('#firstMSG').replaceWith("<div class='from-them'><p>" + message + "</p></div><div class='clear'></div>");
   }, 500);
     setTimeout(function(){
       $('section').append("<div class='right-typing-indicator'><span></span><span></span><span></span></div>");
     }, 1750);
   });

   // FIRST OPTION C
    $('#firstoptC').click(function(){
      $('.slideOne').fadeOut().hide().next().show(2500);
      setTimeout(function(){
        var message = $('.firstoptCtext').text();
      $('#firstMSG').replaceWith("<div class='from-them'><p>" + message + "</p></div><div class='clear'></div>");
    }, 500);
      setTimeout(function(){
        $('section').append("<div class='right-typing-indicator'><span></span><span></span><span></span></div>");
      }, 1750);
    });


    // SECOND SEQUENCE
    //  SECOND OPTION A

     $('#secondoptA').click(function(){
       $('.slideTwo').fadeOut().hide().next().show(2500);
       setTimeout(function(){
         var message = $('.secondoptAtext').text();
       $('#secondMSG').replaceWith("<div class='from-them'><p>" + message + "</p></div><div class='clear'></div>");
     }, 500);
       setTimeout(function(){
         $('section').append("<div class='right-typing-indicator'><span></span><span></span><span></span></div>");
       }, 1750);
     });

     // SECOND OPTION B
      $('#secondoptB').click(function(){
        $('.slideTwo').fadeOut().hide().next().show(2500);
        setTimeout(function(){
          var message = $('.secondoptBtext').text();
        $('#secondMSG').replaceWith("<div class='from-them'><p>" + message + "</p></div><div class='clear'></div>");
      }, 500);
        setTimeout(function(){
          $('section').append("<div class='right-typing-indicator'><span></span><span></span><span></span></div>");
        }, 1750);
      });

      // SECOND OPTION C
       $('#secondoptC').click(function(){
         $('.slideTwo').fadeOut().hide().next().show(2500);
         setTimeout(function(){
           var message = $('.secondoptCtext').text();
         $('#secondMSG').replaceWith("<div class='from-them'><p>" + message + "</p></div><div class='clear'></div>");
       }, 500);
         setTimeout(function(){
           $('section').append("<div class='right-typing-indicator'><span></span><span></span><span></span></div>");
         }, 1750);
       });

});

function choosereplace(){
  for (var i = 0; i < array.length; i++) {
    $(this).click(function(){
      console.log($(this).text());
    })
  }
}
