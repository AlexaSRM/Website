$(function () {
  $(".technical-btn").click(function () {
    $(".technical-btn").addClass("click-underline");
    $(".technical-btn").removeClass("underline");
    $(".creatives-btn").removeClass("click-underline");
    $(".creatives-btn").addClass("underline");
    $(".business-btn").removeClass("click-underline");
    $(".business-btn").addClass("underline");
    $(".technical").show();
    $(".creatives,.business").hide();
  });
  $(".creatives-btn").click(function () {
    $(".technical-btn").removeClass("primary");
    $(".technical-btn").removeClass("click-underline");
    $(".technical-btn").addClass("underline");
    $(".creatives-btn").addClass("click-underline");
    $(".creatives-btn").removeClass("underline");
    $(".business-btn").removeClass("click-underline");
    $(".business-btn").addClass("underline");
    $(".creatives").show();
    $(".technical,.business").hide();
  });
  $(".business-btn").click(function () {
    $(".technical-btn").removeClass("primary");
    $(".technical-btn").removeClass("click-underline");
    $(".technical-btn").addClass("underline");
    $(".creatives-btn").removeClass("click-underline");
    $(".creatives-btn").addClass("underline");
    $(".business-btn").addClass("click-underline");
    $(".business-btn").removeClass("underline");
    $(".business").show();
    $(".creatives,.technical").hide();
  });
});
