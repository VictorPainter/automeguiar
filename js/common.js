$(function() {


	$('.main_slider').owlCarousel({
		loop:true,
		nav:false,
		dots: true,
		autoplay: true,
		slideTransition: 'linear',
		animateIn: 'fadeIn', // add this
		animateOut: 'fadeOut', // and this
		autoplayTimeout: 5000,
		autoplaySpeed: 2000,
		autoplayHoverPause: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			}
		}
		});

	$('.owl-dot').each(function(){
	$(this).children('span').text($(this).index()+1);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.go-top').addClass('active');
		} else {
			$('.go-top').removeClass('active');
		}
	});
	$('.go-top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	// Add smooth scrolling to all links			
	$("a").on('click', function(event) {
		if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){
			window.location.hash = hash;
		});
		}
	});

	var lightbox = GLightbox();
	var lightboxDescription = GLightbox({
	selector: 'glightbox2'
	});

	$('.open_order').click(function(){
		$('.pop-up').addClass('display_form');
	});
	$('.pop-up').click(function(){
		$('.pop-up').removeClass('display_form');
	});
	$('.cross').click(function(){
		$('.pop-up').removeClass('display_form');
	});

	new WOW().init();

});
