"use strict";

(function() {

	var $h = function(selector) {

		return document.querySelectorAll(selector);
		
	} 



	$h.on = function(selector, eventType, callback) {

		var elem = document.querySelector(selector);

		if (elem == null) {

			çonsole.warn('No elements found!');
			return;
		}

		elem.addEventListener(eventType, callback);
	}



	window.$h = $h;
})();

/*$h.on('.nav', 'click', function() {

});*/

//$h('.nav').style.color='red';	


