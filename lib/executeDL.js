/* *********************************************
 * @license
 * Copyright (c) 2017-Present lisez <mm4324@gmail.com>
 * @version 1.0
 ***********************************************/

/* *********************************************
 * Creat file by Blob function and append a virtual for simulating click
 * @params {string} fName    - The name of the file
 * @params {string} fContent - The content of the file
 * @params {string} fType    - The create type of the file, defalut as 'text/plain'
 ***********************************************/

function executeDL(fName, fContent, fType){
	'use strict';
	
	fType = (typeof fType === 'undefined')? 'text/plain': fType;
	
	var _file = new Blob([fContent], {type: fType}),
		_link = URL.createObjectURL(_file),
		_tagA = document.createElement('a');
	 
	_tagA.href = _link;
	_tagA.download = fName;
	document.body.appendChild(_tagA);

	_tagA.focus();
	_tagA.click();
	_tagA.remove();

	return true;
}

