// A $( document ).ready() block.
$( document ).ready(function start () {
  console.log("hi".charAt(-1));
console.log(eval('2 + 2'));
  console.log(eval('((2 + 5) / (4 * 3))+2'));
  var flipped = false;

  $("button").click(function() {

    var id = this.id;
    var text = $(".screen-numbers").text();
    var textEquation = $(".screen-equation").text();
    var hasDecimal = text.includes(".");

    if ($(this).hasClass( "click" )) {
      console.log("clone");
      el = this;
      el.style.animation = 'none';
      el.offsetHeight; /* trigger reflow */
      el.style.animation = null;
    }else {
      $(this).addClass( "click" );
    }


    if (text.replace(/\D/g,'').length >= 11 || textEquation.replace(/\D/g,'').length >= 20) {
      $(".screen-numbers").text("# TOO LONG");
      $(".screen-equation").text('PRESS "AC"');
    }
    //if the current number already has a decimal and its trying to add another then only console.log and nothing else
  else  if (hasDecimal && this.id == ".") {
      console.log("already has decimal");
//if the button press is a number
}else if (!isNaN(id) || this.id == "." || this.id == "(" || this.id == ")") {
      if (text.charAt(0) == "=") {
        $(".screen-numbers").text("0");
        $(".screen-equation").text("0");
      }
      //Save current numbers on screen
      var text = $(".screen-numbers").text();
      var textEquation = $(".screen-equation").text();
      //If the first char is a 0 then dont repaste the saved text
      if (text.charAt(0)=="0" && textEquation.charAt(0)=="0"){
        $(".screen-numbers").text(this.id);
        $(".screen-equation").text(this.id);

      }else if(text.charAt(0)=="0"){
        $(".screen-numbers").text(this.id);
        $(".screen-equation").text(textEquation+this.id);
      }else{
        //repaste the text with the new text
      $(".screen-numbers").text(text+this.id);
      $(".screen-equation").text(textEquation+this.id);
    }
//if the button pressed is not a number.
    } else if (isNaN(id)) {


      if (id == "smile") {
        flipped = true;
        if ($( ".calculator" ).hasClass( "rotate-back" )) {
          $( ".calculator" ).removeClass( "rotate-back" );
        }
        $( ".calculator" ).addClass( "rotate" );
        $(".screen-numbers").text("58008");
        $(".screen-equation").text('58008');
      }


      if (id == "AC") {
        if (flipped == true) {
          $( ".calculator" ).removeClass( "rotate" );
          $( ".calculator" ).addClass( "rotate-back" );
          flipped = false;
        }
        $(".screen-numbers").text("0");
        $(".screen-equation").text("0");
      }

      if (id == "/" || id == "x" || id == "-" || id == "+") {
        console.log(text);
        if (text.charAt(0) == "=") {
          text = text.replace("=","")
          $(".screen-equation").text(text+this.id);
          $(".screen-numbers").text("0");
        } else {
        $(".screen-numbers").text("0");
        $(".screen-equation").text(textEquation+this.id);
      }
      }

      if (id == "=") {
        finalEquation = $(".screen-equation").text();
        finalEquation = finalEquation.replace("x","*");
        $(".screen-equation").text(textEquation+"=");
        try {
        $(".screen-numbers").text("="+eval(finalEquation));
      }
      catch(error) {
        console.error(error);
        $(".screen-numbers").text("ERROR!");
        $(".screen-equation").text("INVALID EQUATION!");
        // expected output: SyntaxError: unterminated string literal
        // Note - error messages will vary depending on browser
      }
      }

    }

});


});
