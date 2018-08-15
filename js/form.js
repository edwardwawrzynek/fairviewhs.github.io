$(document).ready(function() {
  $(".btn-submit").on("click", function() {
    $(".flash-success").removeClass("show");
    $(".flash-success").show()
    $(".flash-success").addClass("show");
    $("input").val();
    setTimeout(
      function()
      {
        $(".flash-success").hide()
      }, 5000);
  });
});
