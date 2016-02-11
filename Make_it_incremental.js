#!/usr/bin/env node

/*
Length : 28
Preceding number must always greater then the one before
Bust has to be multiplied of a number to just a greater 
Input [4,3,2,1]
OutPut [4,6,8,9]
*/

var a = function (a_items) {
	return a_items.map(function(value) {
		return prev = -~(prev/value)*value;
	}, prev = 0);
};

var b = a=>a.map(v=>p=-~(p/v)*v,p=0)

array = [1,10,2,1];
console.log(a(array));
console.log(b(array));