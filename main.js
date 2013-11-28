$(function() {
	var bgc = $('body').css('background-color');
	if ('rgb(255, 255, 255)' === bgc || 'rgba(0, 0, 0, 0)' === bgc)
	{
		$('body').css('background-color', '#eee');
	}
});
