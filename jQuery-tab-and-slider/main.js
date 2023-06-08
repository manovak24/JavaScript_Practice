$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


$(function () {
    /*the left one*/
    $('.drawer-left-trigger').click(function(){
      $(this).parent().toggleClass('opened closed');
    });   
    
});