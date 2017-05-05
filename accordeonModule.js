'use strict' 

var accordeonModule = function (data) { 

	
		
	
		$h.d('.accordeon-Module', 'click', '.btn-box-tool', function(e) {
			
			var openElem = e.target.closest('.box-default');
			
			
		if (openElem.classList.contains('collapsed-box') === true) {
			openElem.classList.remove('collapsed-box');
			
			this.children[0].classList.remove('fa-plus');
			this.children[0].classList.add('fa-minus');
		}

		else if (openElem.classList.contains('collapsed-box') === false) {
			openElem.classList.add('collapsed-box');
			this.children[0].classList.remove('fa-minus');
			this.children[0].classList.add('fa-plus');
		}
	
	
  
		
		
		
		
	});

	

	

} 

accordeonModule.prototype = Object.create(App.prototype); 
accordeonModule.prototype.constructor = accordeonModule;

