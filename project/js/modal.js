function displayModal(element){
  var imgNew = $("<img>");
  imgNew.attr("src", element.attr("src"));
  imgNew.addClass("anotherClass");

  $(".modal1 .box .content").append(imgNew);
  $(".modal1").css({"opacity":0});
  $(".modal1").css({"display":"flex"});
  $(".modal1").animate({"opacity":1}, 500,function(){

  })
};

function hideModal(){
  $(".modal1 .box .content").empty();
  $(".modal1").css({"display":"none"});
}
