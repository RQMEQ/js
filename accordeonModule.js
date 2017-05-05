'use strict' 

var accordeonModule = function (data) { 

	//var panelItem = document.querySelectorAll('.box-default'),
	//active = document.getElementsByClassName('active');
	

	/*Array.from(panelItem).forEach(function(item, i, panelItem) {
		item.addEventListener('click', function(e) {
    if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
      active[0].classList.remove('collapsed-box'); // убрать класс collapsed-box
    // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
    this.classList.toggle('collapsed-box');
});S
	});*/
	/*if (classes.contains('fa-plus')) {

			this.classList.remove('fa-plus');
			this.classList.add('fa-minus');
		}*/
		
	
		$h.d('.accordeon-Module', 'click', '.btn-box-tool', function(e) {
			
			var openElem = e.target.closest('.box-default');
			
			//if(this.classes.contains('fa-plus')){
				//this.classList.remove('fa-minus');
			//}else {
				//this.classList.add('fa-plus');
			//}
		if (openElem.classList.contains('collapsed-box') === true) {
			openElem.classList.remove('collapsed-box');
			//this.children.classList.remove('fa-plus');
			//this.children.classList.add('fa-minus');
			this.children[0].classList.remove('fa-plus');
			this.children[0].classList.add('fa-minus');
		}

		else if (openElem.classList.contains('collapsed-box') === false) {
			openElem.classList.add('collapsed-box');
			this.children[0].classList.remove('fa-minus');
			this.children[0].classList.add('fa-plus');
		}
	
	
  
		
		/*if ('.box-default:not(.collapsed-box)') {
			alert(openElem.classList.contains('myCssClass'))
		}*/
		
		
	});

	/*var div = $('.collapsed-box');
        div.click(function(){
             div.not($(this).toggleClass('collapsed-box')).removeClass('collapsed-box')
        });*/


	/*classList.add
classList.remove
classList.toggle
classList.contains отдасть булевое значение*/
/*li:not(.elem)*/
	
	/*$(".button").click(function(){
		
		$(".element").toggleClass("collapsed-box");
		
	});*/

	

} 

accordeonModule.prototype = Object.create(App.prototype); 
accordeonModule.prototype.constructor = accordeonModule;

