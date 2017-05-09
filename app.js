'use strict'; 

var App = function () { 

	var modul = new accordeonModule();
	var modul2 = new tabs();
} 

App.prototype.getData = function () { 

return this.data; 

} 

window.addEventListener('DOMContentLoaded', App);

