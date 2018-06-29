// Scroll on button
$('.js--how-it-works').click(function () {
   $('html, body').animate({scrollTop: $('.clothes-you-like').offset().top}, 1000);
});

// Hide-unhide dropdown list
$(function(){
  var sub1 = $('.sub1');
  $('.clickable1').on('click', function(e){
    e.stopPropagation();
    sub1.toggle();
  });
  $(document).on('click', function(e){
    sub1.hide();
  });
});

$(function(){
  var sub2 = $('.sub2');
  $('.clickable2').on('click', function(e){
    e.stopPropagation();
    sub2.toggle();
  });
  $(document).on('click', function(e){
    sub2.hide();
  });
});

$(function(){
  var sub3 = $('.sub3');
  $('.clickable3').on('click', function(e){
    e.stopPropagation();
    sub3.toggle();
  });
  $(document).on('click', function(e){
    sub3.hide();
  });
});

// Pagination
$('#pagination').materializePagination({
  lastPage: 5,
  firstPage: 1,
});
