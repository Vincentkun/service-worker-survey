var arr = [require('./demo/do1.js'), require('./demo/do2.js')];

for (var i = 0, len = arr.length; i < len; i++) {
	arr[i].init();
}
