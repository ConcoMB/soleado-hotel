$('.carousel-paragraph').html($('.item.active > div')[0].innerHTML);

$('#amenities-carousel').on('slide.bs.carousel',function(){
  $('.carousel-paragraph').fadeOut(300);
  $('.carousel-paragraph').html('');
})

$('#amenities-carousel').on('slid.bs.carousel',function(){
    $('.carousel-paragraph').html($('.item.active > div')[0].innerHTML);
    $('.carousel-paragraph').fadeIn(800);		
})
