exports.init = function() {
	window.swSayHI = function() {
		worker.postMessage({ cmd: 'start', msg: 'Hi' });
	};

	window.swStop = function stop() {
		// Calling worker.terminate() from this script would also stop the worker.
		worker.postMessage({ cmd: 'stop', msg: 'Bye' });

		//停止 Worker 的方法之一
		// worker.terminate();
	};

	window.swUnknownCmd = function() {
		worker.postMessage({ cmd: 'foobard', msg: '???' });
	};

	var worker = new Worker('js/demo/doWork2.js');

	worker.addEventListener(
		'message',
		function(e) {
			// document.getElementById('result').textContent = e.data;
			console.log(e.data);
		},
		false
	);
};
