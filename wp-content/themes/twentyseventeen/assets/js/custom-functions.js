(function($){
	var $footer = $('footer.site-footer'),
		$infoButton = $('.site-info-button', $footer),
		$infoCustomPopup = $('#info-custom-popup'),
		$popupCloseButton = $('.info-custom-popup-close', $infoCustomPopup);

	$infoButton.click(function() {
		$infoCustomPopup.show();
	});

	$popupCloseButton.click(function() {
		$infoCustomPopup.hide();
	});
}(jQuery));