'use strict' 

var accordeonModule = function (data) { 

	
		
	
	$h.d('.accordeon-Module', 'click', '.btn-box-tool', function(e) {
		
		var openElem = e.target.closest('.box-default');
		var openEle = openElem.querySelector('i');		
		

		if (openElem.classList.contains('collapsed-box') === true) {


			openElem.classList.remove('collapsed-box');
			openEle.classList.remove('fa-plus');
			openEle.classList.add('fa-minus');
		}

		else if (openElem.classList.contains('collapsed-box') === false) {

			openElem.classList.add('collapsed-box');
			openEle.classList.add('fa-plus');
			openEle.classList.remove('fa-minus');
		}		
		
		
	});

	

	

} 

accordeonModule.prototype = Object.create(App.prototype); 
accordeonModule.prototype.constructor = accordeonModule;

