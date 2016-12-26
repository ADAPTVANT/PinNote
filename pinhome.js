/**
 * Pin Note Home Page Codes
 */

$(document).ready(function() {
	$("#pinNote").click(function(){
		var toAdd = $('#noteComment').val();
		$('<li>').text(toAdd).appendTo('#noteMessage');
		$('textarea').val(' ');
	});
});

$(document).on('click','li',function(){
	$(this).remove();
});