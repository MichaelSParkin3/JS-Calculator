// A $( document ).ready() block.
$( document ).ready(function start () {

  $("button").click(function() {

    var id = this.id;
    var text = $(".screen-numbers").text();
    var textEquation = $(".screen-equation").text();
    var hasDecimal = text.includes(".");
    //if the current number already has a decimal and its trying to add another then only console.log and nothing else
    if (hasDecimal && this.id == ".") {
      console.log("already has decimal");
//if the button press is a number
}else if ((!isNaN(id)) || (this.id == ".")) {
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

      if (id == "AC") {
        $(".screen-numbers").text("0");
        $(".screen-equation").text("0");
      }

      if (id == "/" || id == "x" || id == "-" || id == "+") {
        $(".screen-numbers").text("0");
        $(".screen-equation").text(textEquation+this.id);
      }

    }

});


});
