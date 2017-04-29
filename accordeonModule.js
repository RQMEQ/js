'use strict' 

var accordeonModule = function (data) { 

	var panelItem = document.querySelectorAll('.box-default'),
	active = document.getElementsByClassName('active');


	Array.from(panelItem).forEach(function(item, i, panelItem) {
		item.addEventListener('click', function(e) {
    if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
      active[0].classList.remove('collapsed-box'); // убрать класс collapsed-box

    // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
    this.classList.toggle('collapsed-box');
});
	});
} 

accordeonModule.prototype = Object.create(App.prototype); 
accordeonModule.prototype.constructor = accordeonModule;

/*classList.add
classList.remove
classList.toggle
classList.contains отдасть булевое значение*/
/*li:not(.elem)*/