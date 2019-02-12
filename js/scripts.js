$(document).ready(function(){
	$('.header.back a').click(function(e){
	  e.preventDefault();
	  window.history.back();
	});
	
	$('.user-products__action a').click(function(){
		$('.user__add-product').addClass('visible');
	});
	
	$('.user__add-product__close').click(function(){
		$(this).parent().removeClass('visible');
	});
	
});