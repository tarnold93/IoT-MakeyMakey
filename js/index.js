$('html').keypress( function(e){
  if (e.keyCode === 32) {
   $('body').addClass('newImg');
   $('h1').addClass('newH1');
   $('img').remove();
   $('h1').text("We would do well to slow down a little, proceed at the optimum speed for our circumstances, focus on the significant, lift up our eyes, and truly see the things that matter most.");
   $( "p" ).remove( ":contains('-Dieter F. Uchtdorf')" );
   $('body').append("<p>-Dieter F. Uchtdorf</p>");
  }
});