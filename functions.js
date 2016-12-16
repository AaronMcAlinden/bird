$(window).scroll(function(){
	
	var wScroll = $(this).scrollTop();
	
	
	$('.back_tree').css({
		'transform'	:	'translate(0px, '+ wScroll /25 +'%)'
	});
	

	$('.nat_geo').css({
		'transform'	:	'translate(0px, '+ wScroll /17 +'%)'
	});
	
	$('.trees').css({
		'transform'	:	'translate(0px, -'+ wScroll /90 +'%)'
	});
	
	
	$('.one').css({
		'transform'	:	'translate(0px, '+ wScroll /2 +'%)'
	});
	
	
		$('.two').css({
		'transform'	:	'translate(0px, -'+ wScroll /5 +'%)'
	});
	
	
	if(wScroll > $('.content').offset().top)	{
		
		$('.intro, .img1').each(function(){
			
			$('.intro, .img1').addClass('is-showing');
			
		});
	}
	
	
	
	
	
});



