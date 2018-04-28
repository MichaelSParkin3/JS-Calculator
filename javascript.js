// A $( document ).ready() block.
$( document ).ready(function() {


  $("button").click(function() {

    var id = this.id;

    if (!isNaN(id)) {
      if (id == AC) {
        $(".screen-numbers").text("0");
      }
    }

});


});
