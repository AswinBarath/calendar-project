$(document).ready(function(){
  $(".reminder").hide();
  $("#r2").show();
  $(".wd").click(function(){
      $("div").removeClass("active");
      $(this).addClass("active");
      $(".reminder").hide();
      $("#r").show();
  });
  $(".we").click(function(){
      $("div").removeClass("active");
      $(this).addClass("active");
      $(".reminder").hide();
      $("#r").show();
  });
  $("#6").click(function(){
      $("div").removeClass("active");
      $("#6").addClass("active");
      $(".reminder").hide();
      $("#r1").show();
  });
  $("#8").click(function(){
      $("div").removeClass("active");
      $("#8").addClass("active");
      $(".reminder").hide();
      $("#r2").show();
  });
  $("#12").click(function(){
      $("div").removeClass("active");
      $("#12").addClass("active");
      $(".reminder").hide();
      $("#r3").show();
  });
  $("#21").click(function(){
      $("div").removeClass("active");
      $("#21").addClass("active");
      $(".reminder").hide();
      $("#r4").show();
  });
  $("#22").click(function(){
      $("div").removeClass("active");
      $("#22").addClass("active");
      $(".reminder").hide();
      $("#r5").show();
  });
  $("#23").click(function(){
      $("div").removeClass("active");
      $("#23").addClass("active");
      $(".reminder").hide();
      $("#r6").show();
  });
});