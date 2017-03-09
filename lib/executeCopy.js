/* *********************************************
 * @license
 * Copyright (c) 2017-Present lisez <mm4324@gmail.com>
 ***********************************************/

// create a virtual element and select all for copy
function executeCopy(el){
	'use strict';

	var _domTextarea = document.createElement('textarea');
	document.body.appendChild(_domTextarea);
	_domTextarea.value = el;

	_domTextarea.focus();
	_domTextarea.select();
	
	document.execCommand('copy');
	
	_domTextarea.remove();
}