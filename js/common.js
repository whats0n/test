head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	// console.log($('body').html());

	$('.js-input').each(function() {
		$(this).focusin(function() {
			if ($(this).val().length >= 0) {
				$(this).parent('.js-field').addClass('is-active');
				$(this).parent('.js-field').find('.js-label').addClass('is-active')
			};
		});	
		$(this).focusout(function() {	
			$(this).parent('.js-field').removeClass('is-active');
			$(this).parent('.js-field').find('.js-label').removeClass('is-active');
			if ($(this).val().length !== 0) {
				$(this).parent('.js-field').find('.js-label').addClass('is-active')
			};
		});		
	});

	var element, circle, d, x, y;
	$(".js-btn").click(function(e){
	  
		element = $(this);
	  
		if(element.find(".circle").length == 0)
			element.prepend("<span class='circle'></span>");
			
		circle = element.find(".circle");
		circle.removeClass("animate");
		
		if(!circle.height() && !circle.width())
		{
			d = Math.max(element.outerWidth(), element.outerHeight());
			circle.css({height: d, width: d});
		}
		
		x = e.pageX - element.offset().left - circle.width()/2;
		y = e.pageY - element.offset().top - circle.height()/2;
		
		circle.css({top: y+'px', left: x+'px'}).addClass("animate");

		return false;
	});

});