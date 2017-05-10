'use strict' 

var tabs = function (data) { 

		
		$h.d('.tabs', 'click', '.c-tabs-nav__link', function (e) { 

			
			var open = document.querySelectorAll('.c-tabs-nav__link'); 
			var cont = document.getElementsByClassName("c-tab-item");
			var elemHref = this.getAttribute('href');
			var clearHref = elemHref.replace('#', '');
			var getContent = document.querySelector('.c-tab-' + clearHref);

			for (var i = 0; i < open.length; i++ ) { 

				open[i].classList.remove('is-active');
				cont[i].classList.remove('is-active'); 
			} 

			this.classList.add('is-active');
			getContent.classList.add('is-active');
			
				
			
		})
		
	

	

} 

tabs.prototype = Object.create(App.prototype); 
tabs.prototype.constructor = tabs;

